import { EventsService } from './events.service';
import * as data from '../mocks/24.json';

describe(`EventsService`, () => {
  let sut: EventsService;
  let http;
  const apiPath = '';

  beforeEach(() => {
    http = jasmine.createSpyObj(http, ['get']);

    sut = new EventsService(http, apiPath);

    http.get = () => data;
  });

  it(`getAllEvents() should return correct data `, () => {
    const expected = [...data.default.Events, ...data.default.Births, ...data.default.Deaths];

    const actual = sut.getAllEvents();

    expect(actual).toEqual(expected);
  });

  it(`getEvents() should return correct data `, () => {
    const expected = [...data.default.Events];

    const actual = sut.getEvents();

    expect(actual).toEqual(expected);
  });

  it(`getBirths() should return correct data `, () => {
    const expected = [...data.default.Births];

    const actual = sut.getBirths();

    expect(actual).toEqual(expected);
  });

  it(`getDeaths() should return correct data `, () => {
    const expected = [...data.default.Deaths];

    const actual = sut.getDeaths();

    expect(actual).toEqual(expected);
  });
});
