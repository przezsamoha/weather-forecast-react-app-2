import {
  formatTimestampToGetHoursAndMinutes,
  formatTimestampToGetHours,
  getHumidityDescription,
  getPrecipitationDescription,
  getPressureDescription,
  getVisibilityDesctiption,
  getWindDirection,
  getTilesBlueprint,
  getSubjectiveTemp,
} from "../helpers";

describe("formatTimestampToGetHoursAndMinutes", () => {
  it("should return '07:00' time", () => {
    const timestamp = 1676440800;
    const expected = "07:00";

    expect(formatTimestampToGetHoursAndMinutes(timestamp)).toMatch(expected);
  });
  it("should return '17:00' time", () => {
    const timestamp = 1676476800;
    const expected = "17:00";

    expect(formatTimestampToGetHoursAndMinutes(timestamp)).toMatch(expected);
  });
});

describe("formatTimestampToGetHours", () => {
  it("should return '07' time", () => {
    const timestamp = 1676440800;
    const expected = "07";

    expect(formatTimestampToGetHours(timestamp)).toMatch(expected);
  });
});

describe("getHumidityDescription", () => {
  it("should return 'Dry and comfortable.' if level is less or equal to 55", () => {
    const level = 55;
    const expected = "Dry and comfortable";

    expect(getHumidityDescription(level)).toMatch(expected);
  });

  it("should return 'Slightly uncomfortable.' if level is larger than 55 and less than 65", () => {
    const level = 60;
    const expected = "Slightly uncomfortable.";

    expect(getHumidityDescription(level)).toMatch(expected);
  });

  it("should return 'Lots of moisture, uncomfortable.' if level is larger or equal to 65", () => {
    const level = 70;
    const expected = "Lots of moisture, uncomfortable.";

    expect(getHumidityDescription(level)).toMatch(expected);
  });
});

describe("getPrecipitationDescription", () => {
  it("should return 'No chance,' if pop is less than 0.2", () => {
    const pop = 0;
    const expected = "No chance,";

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Slight chance,' if pop is greater or equal to 0.2 and less than 0.3", () => {
    const pop = 0.25;
    const expected = "Slight chance,";

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'A chance,' if pop is greater or equal to 0.3 and less than 0.6", () => {
    const pop = 0.5;
    const expected = "A chance,";

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Likely,' if pop is greater or equal to 0.6 and less than 0.7", () => {
    const pop = 0.65;
    const expected = "Likely,";

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Most likely,' if pop is greater or equal to 0.7", () => {
    const pop = 1;
    const expected = "Most likely,";

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
});

describe("getPressureDescription", () => {
  it("should return 'High pressure.' if pressure is higher than standard", () => {
    const pressure = 1040;
    const expected = "High pressure.";

    expect(getPressureDescription(pressure)).toMatch(expected);
  });
  it("should return 'Low pressure.' if pressure is lower than standard", () => {
    const pressure = 1000;
    const expected = "Low pressure.";

    expect(getPressureDescription(pressure)).toMatch(expected);
  });
});

describe("getVisibilityDesctiption", () => {
  it("should return 'Very poor visibility.' if distance is less or equal to 1000m.", () => {
    const distanceInMeters = 900;
    const expected = "Very poor visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Poor visibility.' if distance is greater than 1000m and less or equal to 4000m.", () => {
    const distanceInMeters = 1500;
    const expected = "Poor visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Medium visibility.' if distance is greater than 4000m and less or equal to 10000m.", () => {
    const distanceInMeters = 6000;
    const expected = "Medium visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Good visibility.' if distance is greater than 10000m and less or equal to 20000m.", () => {
    const distanceInMeters = 15000;
    const expected = "Good visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Very good visibility.' if distance is greater than 20000m and less or equal to 40000m.", () => {
    const distanceInMeters = 30000;
    const expected = "Very good visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Great visibility.' if distance is greater than 40000m", () => {
    const distanceInMeters = 50000;
    const expected = "Great visibility.";

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
});

describe("getWindDirection", () => {
  it("should return 'N' if degree is equal to 360", () => {
    const degree = 360;
    const expected = "N";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'E' if degree is equal to 90", () => {
    const degree = 90;
    const expected = "E";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'S' if degree is equal to 180", () => {
    const degree = 180;
    const expected = "S";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'W' if degree is equal to 270", () => {
    const degree = 270;
    const expected = "W";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'NE' if degree is greater than 0 and less than 90", () => {
    const degree = 50;
    const expected = "NE";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'SE' if degree is greater than 90 and less than 180", () => {
    const degree = 120;
    const expected = "SE";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'SW' if degree is greater than 180 and less than 270", () => {
    const degree = 200;
    const expected = "SW";

    expect(getWindDirection(degree)).toMatch(expected);
  });
  it("should return 'NW' if degree is greater than 270 and less than 360", () => {
    const degree = 320;
    const expected = "NW";

    expect(getWindDirection(degree)).toMatch(expected);
  });
});

describe("getSubjectiveTemp", () => {
  it("should return 'Feels colder' if feelsLike is lower than temp", () => {
    const feelsLike = 10;
    const temp = 15;
    const expected = "Feels colder";

    expect(getSubjectiveTemp(feelsLike, temp)).toMatch(expected);
  });

  it("should return 'Feels warmer' if feelsLike is higher than temp", () => {
    const feelsLike = 20;
    const temp = 15;
    const expected = "Feels warmer";

    expect(getSubjectiveTemp(feelsLike, temp)).toMatch(expected);
  });
});

describe("getTilesBlueprint", () => {
  const todayMock = {
    dt: 1676581200,
    main: {
      feels_like: 10,
      humidity: 9.5,
      pressure: 1045,
      temp: 11.39,
      temp_max: 11.39,
      temp_min: 10.36,
    },
    weather: [
      {
        description: "overcast clouds",
        icon: "04n",
        main: "Clouds",
      },
    ],
    wind: {
      speed: 2.4,
      gust: 11.35,
      deg: 223,
    },
    clouds: {
      all: 100,
    },
    pop: 0,
    visibility: 10000,
  };

  it("should return an array of 6 objects with weather data", () => {
    const expectedLength = 6;

    expect(getTilesBlueprint(todayMock).length).toBe(expectedLength);
  });
});
