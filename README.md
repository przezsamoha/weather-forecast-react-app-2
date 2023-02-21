# Weather Forecast

###### ReactJs | Typescript | Vite | TailwindCSS App

#

This application lets you search for a weather forecast at the location of your choice.

It displays a list of suggested cities (based on user's input, typed in a search form) and provides 3 hours forecast for a period of 5 days and current weather characteristics for the chosen city, such as: temperature, min and max temp, cloud cover, sunrise/sunset, feels like, wind, visibility, pressure, humidity and precipitation.

By default it runs in a light mode but enables user to toggle the theme to dark mode.

## Tech

This project was built with [Vite](https://vitejs.dev/).

##### Core technologies

- Vite
- ReactJs
- TypeScript
- Tailwind CSS

##### Weather Forecast API

#

#

> This project features data from [Open Weather](https://openweathermap.org/)'s free plan pricing:
> [Geocoding API](https://openweathermap.org/api/geocoding-api) >[Weather Forecast API](https://openweathermap.org/forecast5)

##### API key

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

This project requires adding the following scripts to your projec:

`eslint`

```
with npm:
npm i eslint
```

```
with yarn:
$ yarn add eslint
```

`Vitest`

```
with npm:
npm install -D vitest
```

```
with yarn:
$ yarn add -D vitest
```

## Testing

To run tests run:

```
npm run test
```

## Licence

MIT

## Additional information

Inspired by [danascript](https://github.com/danascript/the-ultimate-api-challenge-weather-api-typescript) tutorial.
