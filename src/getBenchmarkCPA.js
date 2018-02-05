function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

module.exports = function (delivery_estimate) {
  const dailyOutcomesCurve = delivery_estimate.daily_outcomes_curve;
  let cpa;
  let cpaSum = 0;
  let cpaAvg;
  let cpaMin;
  let cpaMax;
  let cpaSpread;
  let curveCPA = Array();

  for (const curve of dailyOutcomesCurve) {
    if(curve.actions) {
      cpa = curve.spend * .01 / curve.actions;
      cpaMin = cpaMin ? (cpa < cpaMin ? cpa : cpaMin) : cpa;
      cpaMax = cpaMax ? (cpa > cpaMax ? cpa : cpaMax) : cpa;
      cpaSum += cpa;
      curveCPA.push(cpa);
    }
  }

  cpaAvg = cpaSum / dailyOutcomesCurve.length;
  cpaSpread = cpaMax - cpaMin;


  cpaAvg = precisionRound(cpaAvg, 3);
  cpaMin = precisionRound(cpaMin, 3);
  cpaMax = precisionRound(cpaMax, 3);
  cpaSum = precisionRound(cpaSum, 3);
  cpaSpread = precisionRound(cpaSpread, 3);

  // console.log('=> CPA: ' + cpaAvg);

  const result = {
    cpaAvg: cpaAvg,
    cpaMin: cpaMin,
    cpaMax: cpaMax,
    cpaSum: cpaSum,
    cpaSpread: cpaSpread,
    percentiles: {
      p25: precisionRound((.25 * cpaSpread) + cpaMin, 3),
      p50: precisionRound((.50 * cpaSpread) + cpaMin, 3),
      p75: precisionRound((.75 * cpaSpread) + cpaMin, 3)
    }
  };

  return result;
}
