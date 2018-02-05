const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const Campaign = adsSdk.Campaign;

module.exports = async function (accessToken, adAccountId, debug) {
  const api = adsSdk.FacebookAdsApi.init(accessToken);
  api.setDebug(debug);
  const account = new AdAccount(adAccountId);
  const adSets = await account.getAdSets([AdSet.Fields.id, AdSet.Fields.name, AdSet.Fields.campaign + '{' + Campaign.Fields.objective + '}', AdSet.Fields.promoted_object, AdSet.Fields.optimization_goal], {
    limit: 1
  });

  return adSets;
};