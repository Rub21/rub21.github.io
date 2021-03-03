---
layout: post
title: 'Housing Passports'
github_url: http://documents1.worldbank.org/curated/en/605571574937088827/pdf/Synthesis-Report.pdf
tags: [phyhon, postgres, docker]
technologies: phyhon,postgres,docker
img: https://miro.medium.com/max/1400/0*EWaOMw5CJGOHmInR
images: ['https://miro.medium.com/max/1400/0*EWaOMw5CJGOHmInR']
sponsor: 'By [DevSeed](http://devseed.com/)'
---

The Housing Passports is a [World Bank project](http://documents1.worldbank.org/curated/en/605571574937088827/pdf/Synthesis-Report.pdf) with collaboration of [Development Seed](http://devseed.com/), the company that I work.

The World Bank is working on detection of specific construction features, within geotagged street view imagery. The goal is to find building features that are potentially dangerous during earthquakes, high winds, floods, etc.

# Machine Learning process for Housing Passports

Development Seed was in charge of running the part of training a Machine Learning Module and run the inferences over millions of street view images. The process of training a ML module takes many steps, that i aging to mention below 👇

## Image labeling and TFRecords creation

In this process, we generated training data, and then the creation of TFRecords for the inputs for module training:

![](/assets/images/project_images/hp/data-trainning.jpg)

Guide for correct labeling: [http://devseed.com/housing-passports-labeling/](http://devseed.com/housing-passports-labeling/)

## Module training

In step, we used Kubeflow and kubernetes and eventually we containerized the module in docker container

![](/assets/images/project_images/hp/module_trainning.jpg)

- Building parts image: https://hub.docker.com/r/developmentseed/building_parts
- Building properties image: https://hub.docker.com/r/developmentseed/building_properties

## Running Inference

At this stage we ran detection over hundred thousand of images.

![](/assets/images/project_images/hp/inference.jpg)

## Matching detection and building footprints

![](/assets/images/project_images/hp/image_matching.jpg)

![](/assets/images/project_images/hp/image_matching2.jpg)

We got a postgres database with georeferenced detections.

## Visualizing predictions

We built a dashboard for prediction visualization

![](/assets/images/project_images/hp/viz.jpg)

[https://housing-passports.surge.sh](https://housing-passports.surge.sh)

### Public repositories and resources

- [https://github.com/developmentseed/housing-passports-frontend](https://github.com/developmentseed/housing-passports-frontend)
- [https://github.com/developmentseed/housing-passports-labeling](https://github.com/developmentseed/housing-passports-labeling)
- [https://medium.com/devseed/finding-vulnerable-housing-in-street-view-images-using](https://medium.com/devseed/finding-vulnerable-housing-in-street-view-images-using-ai-to-create-safer-cities-2b58b4e3b991)
- [https://understandrisk.org/wp-content/uploads/4_DevSeed_UR-2019-urban-change-public.pdf](https://understandrisk.org/wp-content/uploads/4_DevSeed_UR-2019-urban-change-public.pdf)
