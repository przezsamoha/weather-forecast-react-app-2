import { getHumidityDescription } from '../helpers';

describe('getHumidityDescription', () => {
  test("Humidity level is equal to 55 returns 'Dry and comfortable' description.", () => {
    const level = 55;
    const expected = 'Dry and comfortable';

    expect(getHumidityDescription(level)).toMatch(expected);
  });
  test("Humidity level is equal to 60 returns 'Slightly uncomfortable.' description.", () => {
    const level = 60;
    const expected = 'Slightly uncomfortable.';

    expect(getHumidityDescription(level)).toMatch(expected);
  });
});
