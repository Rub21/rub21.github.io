---
layout: post
title:  Geojson to OSM
liveLink: https://www.npmjs.com/package/geojson2osm
github_url: https://github.com/Rub21/geojson2osm
tags: [node.js]
technologies: [Node.js]
img: https://user-images.githubusercontent.com/1152236/41137566-600e5e9c-6aa1-11e8-945e-fd25663e5dba.png
images: [
                'https://user-images.githubusercontent.com/1152236/41137566-600e5e9c-6aa1-11e8-945e-fd25663e5dba.png'
        ]
sponsor: "By [Mapbox](https://www.mapbox.com)"
description: "GeoJSON-to-OSM is a Node.js Command Line Interface (CLI) tool designed to facilitate the conversion of GeoJSON files to OSM (OpenStreetMap) format. This tool is particularly useful for users who wish to import custom geographical data into OpenStreetMap without manual conversion. "
---
# GeoJSON-to-OSM CLI Converter

## Overview

GeoJSON-to-OSM is a Node.js Command Line Interface (CLI) tool designed to facilitate the conversion of GeoJSON files to OSM (OpenStreetMap) format. This tool is particularly useful for users who wish to import custom geographical data into OpenStreetMap without manual conversion. 

## Features

- **Quick Conversion**: Convert GeoJSON files to OSM format in just a few steps.
- **Batch Processing**: Convert multiple GeoJSON files in one go.
- **Data Integrity**: Ensures that the conversion maintains all geometrical and attribute information.
- **Tag Mapping**: Optionally map GeoJSON properties to OSM tags.
  
## Installation

You'll need to have Node.js installed on your computer. If you haven't installed it yet, download and install it from [Node.js official website](https://nodejs.org/).

To install GeoJSON-to-OSM, open your terminal and run:

```bash
npm install -g geojson-to-osm
```

## Usage

### Basic Conversion

To convert a single GeoJSON file to OSM format:

```bash
geojson-to-osm -i input.geojson -o output.osm
```




