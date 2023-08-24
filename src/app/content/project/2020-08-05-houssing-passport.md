---
layout: post
title: 'Housing Passports'
github_url: http://documents1.worldbank.org/curated/en/605571574937088827/pdf/Synthesis-Report.pdf
liveLink: https://medium.com/devseed/finding-vulnerable-housing-in-street-view-images-using-ai-to-create-safer-cities-2b58b4e3b991
tags: [python, postgres, docker]
technologies: [Python,Postgres,Docker]
img: https://miro.medium.com/max/1400/0*EWaOMw5CJGOHmInR
images: ['https://miro.medium.com/max/1400/0*EWaOMw5CJGOHmInR']
sponsor: 'By [DevSeed](http://devseed.com/)'
description: "As part of a World Bank initiative, Development Seed—the company I am affiliated with—is working on identifying potentially hazardous construction features using geotagged street view imagery. This project aims to assess the safety of buildings in the context of natural disasters like earthquakes, high winds, and floods."
---

# Housing Passports: Enhancing Construction Safety Through Machine Learning

As part of a [World Bank initiative](http://documents1.worldbank.org/curated/en/605571574937088827/pdf/Synthesis-Report.pdf), [Development Seed](http://devseed.com/)—the company I am affiliated with—is working on identifying potentially hazardous construction features using geotagged street view imagery. This project aims to assess the safety of buildings in the context of natural disasters like earthquakes, high winds, and floods.

## The Machine Learning Workflow for Housing Passports

Development Seed spearheaded the machine learning aspect of this project, focusing on training models and running inferences on millions of street view images. Here's an overview of the key steps involved:

### 1. Image Labeling and TFRecords Creation

In this phase, we generated labeled training data and then created TFRecords as inputs for the machine learning model.

![Data Training](/assets/images/project_images/hp/data-trainning.jpg)

- **Labeling Guide**: [Housing Passports Labeling Guidelines](http://devseed.com/housing-passports-labeling/)

### 2. Module Training

Here we utilized Kubeflow and Kubernetes for the training process, eventually containerizing the model in a Docker container.

![Module Training](/assets/images/project_images/hp/module_trainning.jpg)

- **Docker Images**:
  - [Building Parts](https://hub.docker.com/r/developmentseed/building_parts)
  - [Building Properties](https://hub.docker.com/r/developmentseed/building_properties)

### 3. Running Inference

In this stage, detection was carried out on hundreds of thousands of images.

![Inference](/assets/images/project_images/hp/inference.jpg)

- **Codebase**: [Chip-n-Scale Queue Arranger on GitHub](https://github.com/developmentseed/chip-n-scale-queue-arranger)

### 4. Matching Detection with Building Footprints

We cross-referenced the detected features with existing building footprints and stored this data in a georeferenced PostgreSQL database.

![Image Matching](/assets/images/project_images/hp/image_matching.jpg)

### 5. Visualizing Predictions

Finally, we developed a dashboard to visualize the predictions.

![Dashboard](/assets/images/project_images/hp/viz.jpg)

- **Dashboard**: [Housing Passports Visualization](https://housing-passports.surge.sh)

## Additional Resources

- **Frontend Repository**: [Housing Passports Frontend on GitHub](https://github.com/developmentseed/housing-passports-frontend)
- **Labeling Repository**: [Housing Passports Labeling on GitHub](https://github.com/developmentseed/housing-passports-labeling)
- **Blog Post**: [Finding Vulnerable Housing Using AI](https://medium.com/devseed/finding-vulnerable-housing-in-street-view-images-using-ai-to-create-safer-cities-2b58b4e3b991)
- **Technical Report**: [Urban Change Public Report](https://understandrisk.org/wp-content/uploads/4_DevSeed_UR-2019-urban-change-public.pdf)
