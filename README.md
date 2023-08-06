# Weather Forecast

###### ReactJs | Typescript | Vite | TailwindCSS | Leaflet App

An upgraded version of a weather application that lets you check the weather forecast for the location of your choice that now includes an interactive map.

It displays a list of suggested cities (based on your input typed in a search form) and as one of them is clicked, application provides a 3 hours forecast and current weather characteristics, such as: temperature, min and max temp, cloud cover, sunrise/sunset, feels like, wind, visibility, pressure, humidity and precipitation, as well as a map of a chosen location.

By default it runs in a light mode but enables user to toggle the theme to dark mode.

## Preview

🔗 [Live demo](https://przezsamoha-weather-forecast.netlify.app/)

![weather-forecast-preview](https://user-images.githubusercontent.com/99020665/258645894-25d3a14d-1b40-4750-9d48-cf57922107e3.png)

## Tech

This project was built with [Vite](https://vitejs.dev/).

#### Core technologies

- Vite
- ReactJs
- TypeScript
- Tailwind CSS
- Leaflet

#### Weather Forecast API

> This project features data from [Open Weather](https://openweathermap.org/)'s free plan pricing:
> [Geocoding API](https://openweathermap.org/api/geocoding-api) and
> [Weather Forecast API](https://openweathermap.org/forecast5).

#### API key

Open Weather API requires an **API key**.
To get one you will have to [create a free account](https://home.openweathermap.org/users/sign_up) on the OpenWeather website.

Once you obtain your uniqe **API key\***, find a `.dist.env` file in the project's documentation, assign your **API key** to the `VITE_APP_API_KEY` variable and save file as an `.env`.

\*_which can be found under ['My API key'](https://home.openweathermap.org/api_keys) tab_

## How to run

[Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) requires [Node.js](https://nodejs.org/en/) version 14.18+, 16+ to run.

Once you have the correct Node.js version installed, install all dependencies and devDependencies of the project in your project's directory:

```
npm i
```

To start the app in development mode run:

```
npm run dev
```

To view it in your browser, open http://localhost:3000.

### Scripts

`build`

```
npm run build
```

`lint`

```
npm run lint
```

`test`

```
npm run test
```

`test with coverage`

```
npm run test:coverage
```

## Licence

MIT

## Additional information

Inspired by [danascript](https://github.com/danascript/the-ultimate-api-challenge-weather-api-typescript) tutorial.
