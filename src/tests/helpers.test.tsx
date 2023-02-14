import {
  getHumidityDescription,
  getPrecipitationDescription,
  getPressureDescription,
  getVisibilityDesctiption,
} from '../helpers';

describe('getHumidityDescription', () => {
  it("should return 'Dry and comfortable.' if level is less or equal to 55", () => {
    const level = 55;
    const expected = 'Dry and comfortable';

    expect(getHumidityDescription(level)).toMatch(expected);
  });

  it("should return 'Slightly uncomfortable.' if level is larger than 55 and less than 65", () => {
    const level = 60;
    const expected = 'Slightly uncomfortable.';

    expect(getHumidityDescription(level)).toMatch(expected);
  });

  it("should return 'Lots of moisture, uncomfortable.' if level is larger or equal to 65", () => {
    const level = 70;
    const expected = 'Lots of moisture, uncomfortable.';

    expect(getHumidityDescription(level)).toMatch(expected);
  });
});

describe('getPrecipitationDescription', () => {
  it("should return 'No chance,' if pop is less than 0.2", () => {
    const pop = 0;
    const expected = 'No chance,';

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Slight chance,' if pop is greater or equal to 0.2 and less than 0.3", () => {
    const pop = 0.25;
    const expected = 'Slight chance,';

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'A chance,' if pop is greater or equal to 0.3 and less than 0.6", () => {
    const pop = 0.5;
    const expected = 'A chance,';

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Likely,' if pop is greater or equal to 0.6 and less than 0.7", () => {
    const pop = 0.65;
    const expected = 'Likely,';

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
  it("should return 'Most likely,' if pop is greater or equal to 0.7", () => {
    const pop = 1;
    const expected = 'Most likely,';

    expect(getPrecipitationDescription(pop)).toMatch(expected);
  });
});

describe('getPressureDescription', () => {
  it("should return 'High pressure.' if pressure is higher than standard", () => {
    const pressure = 1040;
    const expected = 'High pressure.';

    expect(getPressureDescription(pressure)).toMatch(expected);
  });
  it("should return 'Low pressure.' if pressure is lower than standard", () => {
    const pressure = 1000;
    const expected = 'Low pressure.';

    expect(getPressureDescription(pressure)).toMatch(expected);
  });
});

describe('getVisibilityDesctiption', () => {
  it("should return 'Very poor visibility.' if distance is less or equal to 1000m.", () => {
    const distanceInMeters = 900;
    const expected = 'Very poor visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Poor visibility.' if distance is greater than 1000m and less or equal to 4000m.", () => {
    const distanceInMeters = 1500;
    const expected = 'Poor visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Medium visibility.' if distance is greater than 4000m and less or equal to 10000m.", () => {
    const distanceInMeters = 6000;
    const expected = 'Medium visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Good visibility.' if distance is greater than 10000m and less or equal to 20000m.", () => {
    const distanceInMeters = 15000;
    const expected = 'Good visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Very good visibility.' if distance is greater than 20000m and less or equal to 40000m.", () => {
    const distanceInMeters = 30000;
    const expected = 'Very good visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
  it("should return 'Great visibility.' if distance is greater than 40000m", () => {
    const distanceInMeters = 50000;
    const expected = 'Great visibility.';

    expect(getVisibilityDesctiption(distanceInMeters)).toMatch(expected);
  });
});
