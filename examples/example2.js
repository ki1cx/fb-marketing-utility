const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const Campaign = adsSdk.Campaign;
const AdsInsights = adsSdk.AdsInsights;
const AdPromotedObject = adsSdk.AdPromotedObject;

import utility from '../build/index';
import getAdSets from './getAdSets';

require('dotenv').config();

void async function () {
  const accessToken = process.env.FB_ACCESS_TOKEN;
  const adAccountId = process.env.FB_AD_ACCOUNT_ID;
  const debug = false;
  const adSets = await getAdSets(accessToken, adAccountId, debug);

  for(const adSet of adSets) {
    const deliveryEstimate = await adSet.getDeliveryEstimate([], {});

    const cpa = utility.getBenchmarkCPA(deliveryEstimate);

    console.log(cpa);
  }
}();