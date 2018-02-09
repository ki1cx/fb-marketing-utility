/*!
 * fb-marketing-utility <https://github.com/kiwchang/fb-marketing-utility>
 *
 * Copyright (c) 2018, Ki Chang, Hemanth Kumar.
 * Licensed under the MIT License.
 */

import _getCPA from './getCPA';
import _getBenchmarkCPA from './getBenchmarkCPA';

const utility = {
  debug: false,
  getBenchmarkCPA: function (estimates) {
    let cpas = Array();

    for (const estimate of estimates) {
      const result = _getBenchmarkCPA(estimate, utility.debug);
      cpas.push(result);
    }

    return {
      cpa: cpas
    }
  },
  getCPA: function (adSet, insights) {
    let cpas = Array();
    let sum = 0;

    if(insights.length) {
      for (const insight of insights) {
        const result = _getCPA(adSet, insight, utility.debug);
        sum += parseFloat(result.cpa);
        cpas.push(result);
      }

      return {
        avg: insights.length ? (sum / insights.length) : 0,
        sum: sum,
        cpa: cpas
      }
    }

    return {
      avg: undefined,
      sum: undefined,
      cpa: cpas
    }
  }
}

module.exports = utility;
