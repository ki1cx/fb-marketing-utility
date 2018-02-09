import mapping from './mapping';

const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const AdsInsights = adsSdk.AdsInsights;
const Campaign = adsSdk.Campaign;
const AdPromotedObject = adsSdk.AdPromotedObject;

module.exports = function (adset, insight, debug) {
  const campaignObjective = adset[AdSet.Fields.campaign][Campaign.Fields.objective];
  const optimizationGoal = adset[AdSet.Fields.optimization_goal];
  const promotedObject = adset[AdSet.Fields.promoted_object];
  const customEventType = promotedObject ? promotedObject[AdPromotedObject.Fields.custom_event_type] : undefined;
  const actionType = mapping[campaignObjective][optimizationGoal][customEventType].action_type;
  const field = mapping[campaignObjective][optimizationGoal][customEventType].field;
  const actionValues = insight.action_values;
  const costPerActionTypes = insight.cost_per_action_type;
  let foundCostPerActionValue;

  if(debug) {
    console.log('===');
    console.log(adset[AdSet.Fields.name] + ': ' + campaignObjective + " -> " + optimizationGoal);
    console.log('===');

    console.log('=> Promoted Object');
    console.log(promotedObject);
    console.log('=> Action Values');
    console.log(actionValues);
    console.log('=> Cost Per Action Type');
    console.log(costPerActionTypes);

    console.log('=> customEventType: ' + customEventType);
    console.log('=> field: ' + field);
    console.log('=> actionType: ' + actionType);
  }

  for (const costPerActionType of costPerActionTypes) {
    if (actionType) {
      if (costPerActionType.action_type === actionType) {
        foundCostPerActionValue = costPerActionType.value;
      }
    } else {
      if (costPerActionType.field === field) {
        foundCostPerActionValue = costPerActionType.value;
      }
    }
  }

  if(debug) {
    console.log('=> CPA: ' + foundCostPerActionValue);
  }

  const result = {
    cpa: parseFloat(foundCostPerActionValue),
    date_start: insight.date_start,
    date_stop: insight.date_stop
  };

  return result;
}
