# EcoForecast App

EcoForecast is a React and Google Earth Engine app for exploring sagebrush ecosystem forecasts across climate scenarios.

Live demo: [ecoforecast.vercel.app](https://ecoforecast.vercel.app)

The app helps researchers and land managers visualize future ecological changes in sagebrush habitat. Forecast data was generated with [STEPWAT2](https://github.com/DrylandEcology/STEPWAT2) on Yale cluster compute, then served through an embedded [Google Earth Engine](https://developers.google.com/earth-engine) application.

Built with researchers from [Yale School of the Environment](https://environment.yale.edu/), the [USGS](https://www.usgs.gov/), [Marshall University](https://www.marshall.edu/), and [Utah State University](https://www.usu.edu/).

## Features

- Public landing page for the EcoForecast project and collaborators.
- Embedded Google Earth Engine app for interactive ecosystem forecast exploration.
- Pages for getting started, model context, contact, privacy, and terms of use.
- Responsive React UI with Tailwind CSS and Framer Motion.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Earth Engine
- Vercel

## Running Locally

```bash
npm install
npm start
```

Open `http://localhost:3000` to view the app.

## Project Context

EcoForecast presents simulation outputs from climate and vegetation models in a browser-based interface. The React shell handles project documentation, routing, and responsive layout, while the launch page embeds the Earth Engine visualization used for interactive map exploration.
