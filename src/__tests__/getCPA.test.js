// __tests__/getCPA.test.js
const _getCPA = require('../getCPA');

it('CPA Mapping=> Objective: PAGE_LIKES Optimization: PAGE_LIKES', () => {
  expect.assertions(1);

  const adSet = require('../fixtures/insight/page_likes/page_likes/adset');
  const insight = require('../fixtures/insight/page_likes/page_likes/insight');
  const result = require('../fixtures/insight/page_likes/page_likes/result');

  const cpa = _getCPA(adSet, insight);

  expect(cpa).toEqual(result);
});