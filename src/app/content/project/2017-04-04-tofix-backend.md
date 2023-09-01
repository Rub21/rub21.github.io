---
layout: post
title:  "Tofix Backend"
github_url: https://github.com/osmlab/to-fix-backend
liveLink: https://github.com/osmlab/to-fix-backend
tags: [node.js, hapi.js]
technologies: [Node.js, Hapi.js]
img: https://user-images.githubusercontent.com/11095038/28570267-09741cb0-715b-11e7-805c-361a28607e26.png
images: [
      'https://user-images.githubusercontent.com/11095038/28570267-09741cb0-715b-11e7-805c-361a28607e26.png'
      ]
sponsor: "By [Mapbox](https://www.mapbox.com)"
description: "The backend infrastructure is architected to handle the high volume of tasks, and to ensure smooth interactions between the frontend and the OSM database. The system is built to be scalable, robust, and easy to maintain."
---
# To-Fix Backend Infrastructure Documentation

## Introduction

This document outlines the backend infrastructure designed to support [To-Fix](https://github.com/osmlab/to-fix), a micro-tasking tool aimed at enhancing the quality and accuracy of OpenStreetMap (OSM) data.

## Architecture Overview

The backend infrastructure is architected to handle the high volume of tasks, and to ensure smooth interactions between the frontend and the OSM database. The system is built to be scalable, robust, and easy to maintain.

![Backend Architecture Diagram](/path/to/diagram.png)

## Key Components

### 1. Database

- **Type**: PostgreSQL with PostGIS extension
- **Role**: To store tasks, user interactions, and associated metadata.

### 2. API Server

- **Technology**: Node.js with Express
- **Role**: To handle incoming HTTP requests and interact with the database.

### 3. Task Queue

- **Technology**: Redis
- **Role**: To manage the queue of tasks that are to be sent to the client-side application.

### 4. Cache Layer

- **Technology**: Memcached
- **Role**: To cache frequently accessed data, reducing database load.

## How it Works

1. **Task Generation**: Tasks are generated and added to the Redis queue.
2. **API Requests**: The frontend application requests tasks via the API.
3. **Task Assignment**: Tasks are assigned to users and marked as 'in-progress' in the database.
4. **Data Updating**: Once a task is completed, the data changes are committed to OSM.
5. **Task Completion**: The task status is updated in the database.

## Scaling Strategies

- **Horizontal Scaling**: Additional API servers can be spun up during high load.
- **Database Sharding**: As the database grows, we can shard the data across multiple instances.
