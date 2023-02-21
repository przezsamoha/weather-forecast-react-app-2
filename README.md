# Weather Forecast

An application that lets you search a weather forecast for a location of your choice.
Provides a 3 hours forecast for a period of 5 days.

## Tech

This project was built with [Vite](https://vitejs.dev/).

##### Core technologies:

- ReactJs
- TypeScript
- Tailwind CSS

##### Official API:

- geolocation data: [OpenWeather API](https://openweathermap.org/api/geocoding-api#direct_name)
- weather data: [OpenWeather API](https://openweathermap.org/forecast5#5days)
  _(both available in free plan pricing)_

## How to run

[Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) requires [Node.js](https://nodejs.org/en/) version 14.18+, 16+ to run.

Once you have the correct Node.js version installed, install all dependencies and devDependencies of the project in your project directory:

```
npm i
```

To start the app in development mode run:

```
npm run dev
```

To view it in your browser, open http://localhost:3000.

## API calls

[Open Weather](https://openweathermap.org/price) API requires an API key.
To get one you need to register for a free plan on the Open Wather website.

Once you obtain your uniqe API key, find a `.dist.env` file in the project documentation, fill in your _VITE_APP_API_KEY_ and save it as an `.env` file.

## Licence

MIT

## Additional information

Inspired by [danascript](https://github.com/danascript/the-ultimate-api-challenge-weather-api-typescript) tutorial.
