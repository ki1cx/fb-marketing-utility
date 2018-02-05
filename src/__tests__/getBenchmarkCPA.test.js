// __tests__/getCPA.test.js
const _getBenchmarkCPA = require('../getBenchmarkCPA');

it('Benchmark CPA', () => {
  expect.assertions(1);

  const estimate = require('../fixtures/delivery_estimate/estimate');
  const result = require('../fixtures/delivery_estimate/result');

  const cpa = _getBenchmarkCPA(estimate);

  expect(cpa).toEqual(result);
});