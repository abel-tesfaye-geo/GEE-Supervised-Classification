# GEE-Supervised-Classificatio
## Supervised Machine Learning | Google Earth Engine
## Overview
This project performs supervised image classification to map land use and land cover (LULC) in [your study area], Ethiopia,  using Google Earth Engine (GEE). The classification uses  Sentinel-2 / Landsat imagery and a Random Forest classifier.

## Study Area
- Location: Bahir Dar, Ethiopia
- Area: 600 km²
- Imagery: Sentinel-2 / Landsat 8 (Year: 2024)

## Classification Classes
- Urban / Built-up
- Agricultural Land
- Forest / Vegetation
- Waterbody
- Bare Land

## Methodology
1. Image acquisition and cloud masking
2. Training sample collection
3. Feature extraction (spectral bands + indices)
4. Random Forest classification
5. Accuracy assessment

## Results
![Classified Map](screenshots/classified_map.png)

## Accuracy Assessment
| Class | Producer's Accuracy | User's Accuracy |
|-------|-------------------|----------------|
| Urban |97 | % |
| Agriculture |89 | % |
| Forest |90 | % |
| Water 92 | % |
| Bare Land | 93 | % |

**Overall Accuracy:** 90%  
**Kappa Coefficient:** 0.89

## Code
The full GEE script is available in the [`code/`](code/) folder.

## Tools Used
- Google Earth Engine (JavaScript API)
- Sentinel-2 / Landsat 8 imagery
- QGIS (for visualization)

## Author
Abel Tesfaye  
Assistant Lecturer, Institute of Land Administration  
Bahir Dar University, Ethiopia
