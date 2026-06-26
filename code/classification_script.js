// Import Landsat 8 collection
var l8_24 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');

// Filter by date and cloud cover
var filtered2 = l8_24.filter(ee.Filter.date('2024-01-01', '2024-01-31'))
                .filter(ee.Filter.lt('CLOUD_COVER', 10))
                .filterBounds(bdwgs); // Filter by your area of interest

// Create a median composite
var medianComposite2 = filtered2.median();

// Clip to your area of interest
var clippedComposite2 = medianComposite2.clip(bdwgs);

// Display the clipped composite


print(clippedComposite2);

//generating training data
var label = 'class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];
var input = clippedComposite2.select(bands);
// 0 = water; 1 = urban; 2 = crop; 3 = forest; 4 = barren 

var training2 = urban.merge(crop).merge(water).merge(barren).merge(forest);

Map.addLayer(clippedComposite2, {bands: ['SR_B4', 'SR_B3', 'SR_B2'], min: 0, max: 30000}, 'Clipped Median Composite2');

//overlaying the points on the land sat image
var trainImage2 = input.sampleRegions({
  collection: training2,
  properties: [label],
  scale: 30
});
print(trainImage2);

var trainingData2 = trainImage2.randomColumn();
var trainset2 = trainingData2.filter(ee.Filter.lessThan('random', 0.8));
var testset2 = trainingData2.filter(ee.Filter.greaterThanOrEquals('random', 0.8));


//classification CART and regression tree
var classifier2 = ee.Classifier.smileCart().train(trainset2, label, bands);

//CLASSIFYING THE IMAGE
var classified2 = input.classify(classifier2);
var landcoverpalette2 = [
  'blue',
  'red',
  'green',
  'yellow',
  'grey'
  ];
Map.addLayer(classified2.clip(bdwgs), {palette: landcoverpalette2, min:0, max: 4}, 'LULC');
