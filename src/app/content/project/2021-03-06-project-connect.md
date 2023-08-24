---
layout: post
title: 'Project Connect'
github_url: http://devseed.com/blog/2021-03-18-ai-enabling-school-mapping
liveLink: https://devseed.com/blog/2021-03-18-ai-enabling-school-mapping
tags:
  [
    python,
    postgres,
    docker,
    trainig_data,
    artificialintelligence,
    machinelearning,
    ml,
    ai,
    deeplearning,
    data,
    training,
    cloud,
    schools,
    unicef,
  ]
technologies: [Python,Postgres,Docker,Tensorflow,AI]
img: /assets/images/project_images/project_connect/dif.gif
images:
  [
    '/assets/images/project_images/project_connect/dif.gif',
    '/assets/images/project_images/project_connect/Supertile.jpg',
    '/assets/images/project_images/project_connect/School_classifier_workflow.jpg',
  ]
sponsor: 'By [DevSeed](http://devseed.com/)'
description: "We've partnered with UNICEF to locate unmapped schools across eight countries: Kenya, Rwanda, Sierra Leone, Niger, Honduras, Ghana, Kazakhstan, and Uzbekistan. Through our efforts, we've successfully identified 23,100 new unmapped schools."
---

# Utilizing AI to Map Unidentified Schools for UNICEF's Giga Project

We've partnered with UNICEF to locate unmapped schools across eight countries: Kenya, Rwanda, Sierra Leone, Niger, Honduras, Ghana, Kazakhstan, and Uzbekistan. Through our efforts, we've successfully identified 23,100 new unmapped schools.

Over the course of seven months, we've engineered an end-to-end, scalable AI model pipeline consisting of the following components:

## 1. Data Generation: Utilizing High-Resolution Satellite Images
We employ high-resolution super-tiles from Maxar to generate a comprehensive training dataset. These images are systematically sorted and stored in Google Cloud Storage.

![Super-tile Example](/assets/images/project_images/project_connect/Supertile.jpg)

## 2. Model Training: Efficient Experimentation Using GKE Cluster
Our team focuses on creating an efficient training environment. We've set up a Google Kubernetes Engine (GKE) Cluster to run multiple experiments and optimize the model.

![School Classifier Workflow](/assets/images/project_images/project_connect/School_classifier_workflow.jpg)

## 3. Object Detection: Scanning Over 70 Million Tiles with ML Enabler
Our models are deployed to scan more than 70 million tiles using ML Enabler, allowing us to identify potential school locations across various terrains and conditions.

![ML Enabler Workflow](/assets/images/project_images/project_connect/ml-enabler.gif)

## 4. Expert Human Validation: Ensuring Accuracy 
After automated identification, human experts validate the findings to guarantee the high accuracy and reliability of the mapping.

![Human Validation in Ghana](/assets/images/project_images/project_connect/pc3_ghana.gif)
![Human Validation in Niger](/assets/images/project_images/project_connect/pc3_niger.gif)
![Human Validation in Kenya](/assets/images/project_images/project_connect/pc3_kenya.gif)

### Additional Resources

- **Learn More**: [AI-Enabled School Mapping Blog](http://devseed.com/blog/2021-03-18-ai-enabling-school-mapping)
- **View Results**: [Project Connect Visualizations](http://devseed.com/project-connect-visualizations/)
