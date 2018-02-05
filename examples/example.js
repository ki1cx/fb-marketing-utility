const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const Campaign = adsSdk.Campaign;
const AdsInsights = adsSdk.AdsInsights;
const AdPromotedObject = adsSdk.AdPromotedObject;
const utility = require('../src/index');
const getAdSets = require('./getAdSets');

void async function () {
  const accessToken = 'your token';
  const adAccountId = 'your ad account id';
  const debug = false;
  const adSets = await getAdSets(accessToken, adAccountId, debug);
  const time_ranges = [{
    since: '2018-01-01',
    until: '2018-01-03'
  }, {
    since: '2018-01-04',
    until: '2018-01-11'
  }, {
    since: '2018-01-12',
    until: '2018-02-02'
  }];

  for(const adSet of adSets) {
    const insights = await adSet.getInsights([AdsInsights.Fields.action_values, AdsInsights.Fields.cost_per_action_type], {
      // date_preset: AdsInsights.DatePreset.lifetime.toLowerCase(),
      time_ranges: time_ranges,
      // limit: 10
    });

    const cpas = utility.getCPAs(adSet, insights);

    console.log(cpas);
  }
}();