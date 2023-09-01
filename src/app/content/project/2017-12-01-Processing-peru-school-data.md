---
layout: post
title:  "Comand line tool to process Peru school data"
liveLink: https://wiki.openstreetmap.org/wiki/Import/Catalogue/Peru/schools#Procesamiento_de_datos
github_url: https://github.com/Rub21/process-peru-schools
tags: [tile-reduce, turf, rbush, underscore]
technologies: [Tile-reduce, Turf, Rbush, Underscore]
img: /assets/images/project_images/school-import/schools.png
images: [
                  '/assets/images/project_images/school-import/schools.png',
                '/assets/images/project_images/school-import/data-page.png',
                '/assets/images/project_images/school-import/split-blocks.png'
      ]
sponsor: "By [Rub21](https://www.rub21.com)"
description: "Introducing our Command-Line Interface (CLI) tool designed to partition 100,000 points into density-based blocks. This tool is particularly useful for handling large datasets related to school locations."
---
# School Density CLI Tool

Introducing our Command-Line Interface (CLI) tool designed to partition 100,000 points into density-based blocks. This tool is particularly useful for handling large datasets related to school locations. The data is sourced from [SIGMED](http://sigmed.minedu.gob.pe/mapaeducativo), Peru's educational map database.

## 🌟 Key Features:

### 🗺️ Density-Based Partitioning
The tool employs advanced algorithms to divide points based on school density, making it easier to manage and analyze the data.

### ⚙️ CLI-First Design
The tool is built with a command-line interface, ensuring that it integrates seamlessly into your data processing pipeline.

### 📊 Visual Output
In addition to data splitting, the tool provides visual cues for better understanding of the density-based blocks.

## 📸 Screenshots:

### Data Page
View your data in a comprehensive layout.

![](/assets/images/project_images/school-import/data-page.png)

### Split Blocks
See how your data is split into density-based blocks.

![](/assets/images/project_images/school-import/split-blocks.png)

