# Hermes Application

This repository contains the Hermes Application, developed using the Ionic framework. It provides a cross-platform mobile application with a focus on performance and user experience.

## Features

- **Cross-Platform Compatibility**: Runs seamlessly on both iOS and Android devices.
- **Responsive Design**: Adapts to various screen sizes for optimal user experience.
- **Modular Architecture**: Organized code structure for scalability and maintainability.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Ionic CLI](https://ionicframework.com/docs/cli/installation)
- [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/)

## Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/MarawanHassaan/Hermes-application.git
   cd Hermes-application
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Add platfroms
   ```bash
   ionic cordova platform add ios
   ionic cordova platform add android
   ```
4. Run the application
   For iOS
   ```bash
   ionic cordova run ios
   ```
   For android
   ```bash
   ionic cordova run android
   ```
   The application can also be tested in a browser
   ```bash
   ionic serve
   ```

## Project Structure
**`src/`**: Contains the main application source code

**`resources/`**: Holds images and other static assets.

**`config.xml/`**: Configuration file for Cordova.

**`package.json`**: Contains project metadata and dependencies.
