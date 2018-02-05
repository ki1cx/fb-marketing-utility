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

  for(const adSet of adSets) {
    const deliveryEstimate = await adSet.getDeliveryEstimate([], {});

    for(const estimate of deliveryEstimate) {
      const cpa = utility.getBenchmarkCPA([estimate]);
    }
  }
}();