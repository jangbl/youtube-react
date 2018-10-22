import {getVideoDurationString} from '../date-format';

describe('services/date-format getVideoDurationString()', () => {
  test('getVideoDurationString() formats 4s video', () => {
    expect(getVideoDurationString('PT4S')).toEqual('0:04');
  });

  test('getVideoDurationString() formats 13s video', () => {
    expect(getVideoDurationString('PT13S')).toEqual('0:13');
  });

  test('getVideoDurationString() formats 1min video', () => {
    expect(getVideoDurationString('PT1M')).toEqual('1:00');
  });

  test('getVideoDurationString() formats 01:31 min video', () => {
    expect(getVideoDurationString('PT1M31S')).toEqual('1:31');
  });

  test('getVideoDurationString() formats 10:10 min video', () => {
    expect(getVideoDurationString('PT10M10S')).toEqual('10:10');
  });

  test('getVideoDurationString() formats 3:06:15 hours video', () => {
    expect(getVideoDurationString('PT3H6M15S')).toEqual('3:06:15');
  });

  test('getVideoDurationString() formats 13:30:47 hours video', () => {
    expect(getVideoDurationString('PT13H30M47S')).toEqual('13:30:47');
  });

  test('getVideoDurationString() formats 01:00:25:05 days video', () => {
    expect(getVideoDurationString('P1DT25M5S')).toEqual('24:25:05');
  });
});
