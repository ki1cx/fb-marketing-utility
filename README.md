# fb-marketing-utility

FB Marketing Utility is a group of methods that assist in calculating CPA from AdSet Insights or Delivery Estimates. 

## Install

```bash
npm install fb-marketing-utility --save
```

## Usage

```javascript
import utility from 'fb-marketing-utility';

const accessToken = <your access token>
const adAccountId = <your ad account id>
const debug = false;

const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const Campaign = adsSdk.Campaign;
const AdsInsights = adsSdk.AdsInsights;
const api = adsSdk.FacebookAdsApi.init(accessToken);
api.setDebug(debug);
const account = new AdAccount(adAccountId);
const adSetFields = [AdSet.Fields.id, AdSet.Fields.name, AdSet.Fields.campaign + '{' + Campaign.Fields.objective + '}', AdSet.Fields.promoted_object, AdSet.Fields.optimization_goal];
const insightFields = [AdsInsights.Fields.action_values, AdsInsights.Fields.cost_per_action_type];
const adSets = await account.getAdSets(adSetFields, {
	limit: 1
});

for(const adSet of adSets) {
	console.log(adSet.name);
	
	//Calculate CPA based on Insights
	const insights = await adSet.getInsights(insightFields, {
	  date_preset: AdsInsights.DatePreset.lifetime.toLowerCase(),
	  limit: 3
	});
	console.log(utility.getCPA(adSet, insights));
	
	//Calcualte CPA based on Delivery Estimate
	const deliveryEstimates = await adSet.getDeliveryEstimate([], {});
	console.log(utility.getBenchmarkCPA(deliveryEstimates));
}
```
## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## License

See [LICENSE](LICENSE)

