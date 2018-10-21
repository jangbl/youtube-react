import {getShortNumberString} from '../number-format';

test('getShortNumberString(0)', () => {
  expect(getShortNumberString(0)).toEqual('0');
});

test('getShortNumberString(9)', () => {
  expect(getShortNumberString(9)).toEqual('9');
});

test('getShortNumberString(52)', () => {
  expect(getShortNumberString(52)).toEqual('52');
});

test('getShortNumberString(456)', () => {
  expect(getShortNumberString(456)).toEqual('456');
});

test('getShortNumberString(1001)', () => {
  expect(getShortNumberString(1001)).toEqual('1.0K');
});

test('getShortNumberString(1099)', () => {
  expect(getShortNumberString(1099)).toEqual('1.1K');
});

test('getShortNumberString(5298)', () => {
  expect(getShortNumberString(5298)).toEqual('5.3K');
});

test('getShortNumberString(10053)', () => {
  expect(getShortNumberString(10053)).toEqual('10.1K');
});

test('getShortNumberString(10100)', () => {
  expect(getShortNumberString(10100)).toEqual('10.1K');
});

test('getShortNumberString(10999)', () => {
  expect(getShortNumberString(10999)).toEqual('11.0K');
});

test('getShortNumberString(11732)', () => {
  expect(getShortNumberString(11732)).toEqual('12K');
});

test('getShortNumberString(100000)', () => {
  expect(getShortNumberString(100000)).toEqual('100K');
});

test('getShortNumberString(532000)', () => {
  expect(getShortNumberString(532000)).toEqual('532K');
});

test('getShortNumberString(1000000)', () => {
  expect(getShortNumberString(1000000)).toEqual('1M');
});

test('getShortNumberString(1230000)', () => {
  expect(getShortNumberString(1230000)).toEqual('1.2M');
});

test('getShortNumberString(23000000)', () => {
  expect(getShortNumberString(23000000)).toEqual('23M');
});

test('getShortNumberString(872000000)', () => {
  expect(getShortNumberString(872000000)).toEqual('872M');
});

test('getShortNumberString(1000000000)', () => {
  expect(getShortNumberString(1000000000)).toEqual('1B');
});

test('getShortNumberString(1500000000)', () => {
  expect(getShortNumberString(1500000000)).toEqual('1.5B');
});

test('getShortNumberString(20000000000)', () => {
  expect(getShortNumberString(20000000000)).toEqual('20B');
});

test('getShortNumberString(387000000000)', () => {
  expect(getShortNumberString(387000000000)).toEqual('387B');
});

test('getShortNumberString(1000000000000)', () => {
  expect(getShortNumberString(1000000000000)).toEqual('1T');
});

test('getShortNumberString(1800000000000)', () => {
  expect(getShortNumberString(1800000000000)).toEqual('1.8T');
});