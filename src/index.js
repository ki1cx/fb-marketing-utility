/*!
 * fb-marketing-utility <https://github.com/kiwchang/fb-marketing-utility>
 *
 * Copyright (c) 2018, Ki Chang, Hemanth Kumar.
 * Licensed under the MIT License.
 */

const _getCPA = require('./getCPA');
const _getBenchmarkCPA = require('./getBenchmarkCPA');

module.exports = {
  getBenchmarkCPA: function (estimates) {
    let cpas = Array();

    for (const estimate of estimates) {
      const result = _getBenchmarkCPA(estimate);
      cpas.push(result);
    }

    return {
      cpa: cpas
    }
  },
  getCPA: function (adSet, insights) {
    let cpas = Array();
    let sum = 0;

    for (const insight of insights) {
      const result = _getCPA(adSet, insight);
      sum += parseFloat(result.cpa);
      cpas.push(result);
    }

    return {
      avg: insights.length ? (sum / insights.length) : 0,
      sum: sum,
      cpa: cpas
    }
  }
}
