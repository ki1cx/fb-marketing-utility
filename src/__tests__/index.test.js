// __tests__/getCPA.test.js
const utility = require('../index');

it('CPA Ranges Mapping=> Objective: PAGE_LIKES Optimization: PAGE_LIKES', () => {
  expect.assertions(1);

  const adSet = require('../fixtures/insight/page_likes/page_likes/adset');
  const insights = require('../fixtures/insight/page_likes/page_likes/insights');
  const results = require('../fixtures/insight/page_likes/page_likes/results');

  const cpas = utility.getCPA(adSet, insights);

  expect(cpas).toEqual(results);
});

it('Benchmark CPA', () => {
  expect.assertions(1);

  const estimates = require('../fixtures/delivery_estimate/estimates');
  const results = require('../fixtures/delivery_estimate/results');

  const cpas = utility.getBenchmarkCPA(estimates);

  expect(cpas).toEqual(results);
});