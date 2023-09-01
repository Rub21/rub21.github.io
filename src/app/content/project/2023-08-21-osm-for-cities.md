---
layout: post
title: 'Kubernetes Cluster for OSM-For-Cities'
github_url: https://github.com/osm-for-cities/ofc-k8s
liveLink: https://osmforcities.org/
tags: [Helm,Kubernetes,Docker]
technologies: [Helm,Kubernetes,Docker]
img: assets/images/project_images/ofc.gif
images:
  [
    
    'assets/images/project_images/ofc.gif',
  ]
sponsor: 'By [DevSeed](http://devseed.com/)'
description: "Kubernetes cluster for distributing OpenStreetMap data presets for various cities."
---

# Kubernetes Cluster for OSM-For-Cities

I have been involved in this project, which serves as a platform for distributing OpenStreetMap data presets for various cities. My contributions were primarily in the areas of Kubernetes infrastructure and deployment. In terms of how the Kubernetes clusters function, we initiate an `m3.medium` instance where Gitea runs. Other components, such as metrics and autoscalers, are also part of the setup. These allow us to scale spot instances like `m4.2xlarge`, `m5.2xlarge`, `m5a.2xlarge`, `m6a.2xlarge`, `m6i.2xlarge`, `t2.2xlarge`, `t3.2xlarge`, and `t3a.2xlarge`. This approach helps us optimize costs, as the processes that run are scheduled daily, and we only need to activate the instances for a few hours.

![](/assets/images/project_images/ofc.gif)

[Helm charts](https://github.com/osm-for-cities/osm-for-cities/tree/develop/osm-for-cities)
