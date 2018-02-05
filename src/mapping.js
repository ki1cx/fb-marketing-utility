/*!
 * fb-marketing-utility <https://github.com/kiwchang/fb-marketing-utility>
 *
 * Copyright (c) 2018, Ki Chang, Hemanth Kumar.
 * Licensed under the MIT License.
 */

const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;
const AdsInsights = adsSdk.AdsInsights;
const Campaign = adsSdk.Campaign;
const AdPromotedObject = adsSdk.AdPromotedObject;

// {
//   campaignObjective: {
//     defaultOptimizationGoal: {
//       customEventType: {
//         action_type: value,
//         field: value
//       }
//     }
//   }
// }

module.exports = {
  [Campaign.Objective.brand_awareness]: {
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.conversions]: {
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.social_impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.social_impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.offsite_conversions]: {
      [AdPromotedObject.CustomEventType.achievement_unlocked]: {
        action_type: 'offsite_conversion.fb_pixel_achievement_unlocked'
      },
      [AdPromotedObject.CustomEventType.add_payment_info]: {
        action_type: 'offsite_conversion.fb_pixel_add_payment_info'
      },
      [AdPromotedObject.CustomEventType.add_to_cart]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_cart'
      },
      [AdPromotedObject.CustomEventType.add_to_wishlist]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_wishlist'
      },
      [AdPromotedObject.CustomEventType.complete_registration]: {
        action_type: 'offsite_conversion.fb_pixel_complete_registration'
      },
      [AdPromotedObject.CustomEventType.content_view]: {
        action_type: 'offsite_conversion.fb_pixel_view_content'
      },
      [AdPromotedObject.CustomEventType.initiated_checkout]: {
        action_type: 'offsite_conversion.fb_pixel_initiate_checkout'
      },
      [AdPromotedObject.CustomEventType.lead]: {
        action_type: 'offsite_conversion.lead'
      },
      [AdPromotedObject.CustomEventType.other]: {
        action_type: 'offsite_conversion.other'
      },
      [AdPromotedObject.CustomEventType.purchase]: {
        action_type: 'offsite_conversion.fb_pixel_purchase'
      },
      [AdPromotedObject.CustomEventType.rate]: {
        action_type: 'offsite_conversion.fb_pixel_rate'
      },
      [AdPromotedObject.CustomEventType.search]: {
        action_type: 'offsite_conversion.fb_pixel_search'
      },
      [AdPromotedObject.CustomEventType.spent_credits]: {
        action_type: 'offsite_conversion.fb_pixel_spent_credits'
      },
      [AdPromotedObject.CustomEventType.tutorial_completion]: {
        action_type: 'offsite_conversion.fb_pixel_tutorial_completion'
      }
    }
  },
  [Campaign.Objective.event_responses + '_event']: {
    [AdSet.OptimizationGoal.event_responses]: {
      'undefined': {
        action_type: 'rsvp'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.event_responses + '_page']: {
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.event_reponses]: {
      'undefined': {
        action_type: 'rsvp'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.lead_generation]: {
    [AdSet.OptimizationGoal.lead_generation]: {
      'undefined': {
        action_type: 'leadgen.other'
      }
    },
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: 'link_click'
      }
    }
  },
  [Campaign.Objective.link_clicks]: {
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: 'link_click'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.page_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.page_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.landing_page_views]: {
      'undefined': {
        action_type: 'landing_page_view'
      }
    },
  },
  [Campaign.Objective.offer_claims]: {
    [AdSet.OptimizationGoal.offer_claims]: {
      'undefined': {
        action_type: 'receive_offer'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.offsite_conversions]: {
      [AdPromotedObject.CustomEventType.achievement_unlocked]: {
        action_type: 'offsite_conversion.fb_pixel_achievement_unlocked'
      },
      [AdPromotedObject.CustomEventType.add_payment_info]: {
        action_type: 'offsite_conversion.fb_pixel_add_payment_info'
      },
      [AdPromotedObject.CustomEventType.add_to_cart]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_cart'
      },
      [AdPromotedObject.CustomEventType.add_to_wishlist]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_wishlist'
      },
      [AdPromotedObject.CustomEventType.complete_registration]: {
        action_type: 'offsite_conversion.fb_pixel_complete_registration'
      },
      [AdPromotedObject.CustomEventType.content_view]: {
        action_type: 'offsite_conversion.fb_pixel_view_content'
      },
      [AdPromotedObject.CustomEventType.initiate_checkout]: {
        action_type: 'offsite_conversion.fb_pixel_initiate_checkout'
      },
      [AdPromotedObject.CustomEventType.lead]: {
        action_type: 'offsite_conversion.lead'
      },
      [AdPromotedObject.CustomEventType.level_achieved]: {
        action_type: 'offsite_conversion.fb_pixel_level_achieved'
      },
      [AdPromotedObject.CustomEventType.other]: {
        action_type: 'offsite_conversion.other'
      },
      [AdPromotedObject.CustomEventType.purchase]: {
        action_type: 'offsite_conversion.fb_pixel_purchase'
      },
      [AdPromotedObject.CustomEventType.rate]: {
        action_type: 'offsite_conversion.fb_pixel_rate'
      },
      [AdPromotedObject.CustomEventType.search]: {
        action_type: 'offsite_conversion.fb_pixel_search'
      },
      [AdPromotedObject.CustomEventType.spent_credits]: {
        action_type: 'offsite_conversion.fb_pixel_spent_credits'
      },
      [AdPromotedObject.CustomEventType.tutorial_completion]: {
        action_type: 'offsite_conversion.fb_pixel_tutorial_completion'
      }
    }
  },
  [Campaign.Objective.page_likes]: {
    [AdSet.OptimizationGoal.page_likes]: {
      'undefined': {
        action_type: 'like'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.page_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.page_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.post_engagement]: {
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.page_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.page_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.video_views]: {
      'undefined': {
        action_type: 'video_view'
      }
    },
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: 'link_click'
      }
    }
  },
  [Campaign.Objective.product_catalog_sales]: {
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.link_clicks.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.offsite_conversions]: {
      [AdPromotedObject.CustomEventType.achievement_unlocked]: {
        action_type: 'offsite_conversion.fb_pixel_achievement_unlocked'
      },
      [AdPromotedObject.CustomEventType.add_payment_info]: {
        action_type: 'offsite_conversion.fb_pixel_add_payment_info'
      },
      [AdPromotedObject.CustomEventType.add_to_cart]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_cart'
      },
      [AdPromotedObject.CustomEventType.add_to_wishlist]: {
        action_type: 'offsite_conversion.fb_pixel_add_to_wishlist'
      },
      [AdPromotedObject.CustomEventType.complete_registration]: {
        action_type: 'offsite_conversion.fb_pixel_complete_registration'
      },
      [AdPromotedObject.CustomEventType.content_view]: {
        action_type: 'offsite_conversion.fb_pixel_view_content'
      },
      [AdPromotedObject.CustomEventType.initiate_checkout]: {
        action_type: 'offsite_conversion.fb_pixel_initiate_checkout'
      },
      [AdPromotedObject.CustomEventType.lead]: {
        action_type: 'offsite_conversion.lead'
      },
      [AdPromotedObject.CustomEventType.level_achieved]: {
        action_type: 'offsite_conversion.fb_pixel_level_achieved'
      },
      [AdPromotedObject.CustomEventType.other]: {
        action_type: 'offsite_conversion.other'
      },
      [AdPromotedObject.CustomEventType.purchase]: {
        action_type: 'offsite_conversion.fb_pixel_purchase'
      },
      [AdPromotedObject.CustomEventType.rate]: {
        action_type: 'offsite_conversion.fb_pixel_rate'
      },
      [AdPromotedObject.CustomEventType.search]: {
        action_type: 'offsite_conversion.fb_pixel_search'
      },
      [AdPromotedObject.CustomEventType.spent_credits]: {
        action_type: 'offsite_conversion.fb_pixel_spent_credits'
      },
      [AdPromotedObject.CustomEventType.tutorial_completion]: {
        action_type: 'offsite_conversion.fb_pixel_tutorial_completion'
      }
    }
  },
  [Campaign.Objective.reach]: {
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    }
  },
  [Campaign.Objective.video_views]: {
    [AdSet.OptimizationGoal.video_views]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.video_views.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.page_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.page_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.brand_awareness]: {
    [AdSet.OptimizationGoal.brand_awareness]: {
      'undefined': {
        action_type: '?'
      }
    }
  },
  [Campaign.Objective.app_installs + 'canvas']: {
    [AdSet.OptimizationGoal.app_installs]: {
      'undefined': {
        action_type: 'app_install'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    }
  },
  [Campaign.Objective.app_installs + 'mobile']: {
    [AdSet.OptimizationGoal.app_installs]: {
      'undefined': {
        action_type: 'mobile_app_install'
      }
    },
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: 'link_click'
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.video_views]: {
      'undefined': {
        action_type: 'video_view'
      }
    },
    [AdSet.OptimizationGoal.offsite_conversions]: {
      [AdPromotedObject.CustomEventType.achievement_unlocked]: {
        action_type: 'app_custom_event.fb_mobile_achievement_unlocked'
      },
      [AdPromotedObject.CustomEventType.add_payment_info]: {
        action_type: 'app_custom_event.fb_mobile_add_payment_info'
      },
      [AdPromotedObject.CustomEventType.add_to_cart]: {
        action_type: 'app_custom_event.fb_mobile_add_to_cart'
      },
      [AdPromotedObject.CustomEventType.add_to_wishlist]: {
        action_type: 'app_custom_event.fb_mobile_add_to_wishlist'
      },
      [AdPromotedObject.CustomEventType.complete_registration]: {
        action_type: 'app_custom_event.fb_mobile_complete_registration'
      },
      [AdPromotedObject.CustomEventType.content_view]: {
        action_type: 'app_custom_event.fb_mobile_content_view'
      },
      [AdPromotedObject.CustomEventType.initiate_checkout]: {
        action_type: 'app_custom_event.fb_mobile_initiated_checkout'
      },
      [AdPromotedObject.CustomEventType.lead]: {
        action_type: 'app_custom_event.fb_mobile_lead'
      },
      [AdPromotedObject.CustomEventType.level_achieved]: {
        action_type: 'app_custom_event.fb_mobile_level_achieved'
      },
      [AdPromotedObject.CustomEventType.other]: {
        action_type: 'app_custom_event.other'
      },
      [AdPromotedObject.CustomEventType.purchase]: {
        action_type: 'app_custom_event.fb_mobile_purchase'
      },
      [AdPromotedObject.CustomEventType.rate]: {
        action_type: 'app_custom_event.fb_mobile_rate'
      },
      [AdPromotedObject.CustomEventType.search]: {
        action_type: 'app_custom_event.fb_mobile_search'
      },
      [AdPromotedObject.CustomEventType.spent_credits]: {
        action_type: 'app_custom_event.fb_mobile_spent_credits'
      },
      [AdPromotedObject.CustomEventType.tutorial_completion]: {
        action_type: 'app_custom_event.fb_mobile_tutorial_completion'
      }
    }
  },
  [Campaign.Objective.link_clicks + 'canvas']: {
    [AdSet.OptimizationGoal.engaged_users]: {
      'undefined': {
        action_type: 'app_engagement'
      }
    },
    [AdSet.OptimizationGoal.app_installs]: {
      'undefined': {
        action_type: 'app_install'
      }
    },
    [AdSet.OptimizationGoal.impressions]: {
      'undefined': {
        field: AdSet.OptimizationGoal.impressions.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.post_engagement]: {
      'undefined': {
        action_type: AdSet.OptimizationGoal.post_engagement.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    }
  },
  [Campaign.Objective.link_clicks + 'mobile']: {
    [AdSet.OptimizationGoal.link_clicks]: {
      'undefined': {
        action_type: 'link_click'
      }
    },
    [AdSet.OptimizationGoal.reach]: {
      'undefined': {
        field: AdSet.OptimizationGoal.reach.toLowerCase()
      }
    },
    [AdSet.OptimizationGoal.video_views]: {
      'undefined': {
        action_type: 'video_view'
      }
    },
    [AdSet.OptimizationGoal.offsite_conversions]: {
      [AdPromotedObject.CustomEventType.achievement_unlocked]: {
        action_type: 'app_custom_event.fb_mobile_achievement_unlocked'
      },
      [AdPromotedObject.CustomEventType.add_payment_info]: {
        action_type: 'app_custom_event.fb_mobile_add_payment_info'
      },
      [AdPromotedObject.CustomEventType.add_to_cart]: {
        action_type: 'app_custom_event.fb_mobile_add_to_cart'
      },
      [AdPromotedObject.CustomEventType.add_to_wishlist]: {
        action_type: 'app_custom_event.fb_mobile_add_to_wishlist'
      },
      [AdPromotedObject.CustomEventType.complete_registration]: {
        action_type: 'app_custom_event.fb_mobile_complete_registration'
      },
      [AdPromotedObject.CustomEventType.content_view]: {
        action_type: 'app_custom_event.fb_mobile_content_view'
      },
      [AdPromotedObject.CustomEventType.initiate_checkout]: {
        action_type: 'app_custom_event.fb_mobile_initiated_checkout'
      },
      [AdPromotedObject.CustomEventType.lead]: {
        action_type: 'app_custom_event.fb_mobile_lead'
      },
      [AdPromotedObject.CustomEventType.level_achieved]: {
        action_type: 'app_custom_event.fb_mobile_level_achieved'
      },
      [AdPromotedObject.CustomEventType.other]: {
        action_type: 'app_custom_event.other'
      },
      [AdPromotedObject.CustomEventType.purchase]: {
        action_type: 'app_custom_event.fb_mobile_purchase'
      },
      [AdPromotedObject.CustomEventType.rate]: {
        action_type: 'app_custom_event.fb_mobile_rate'
      },
      [AdPromotedObject.CustomEventType.search]: {
        action_type: 'app_custom_event.fb_mobile_search'
      },
      [AdPromotedObject.CustomEventType.spent_credits]: {
        action_type: 'app_custom_event.fb_mobile_spent_credits'
      },
      [AdPromotedObject.CustomEventType.tutorial_completion]: {
        action_type: 'app_custom_event.fb_mobile_tutorial_completion'
      }
    }
  }
}

