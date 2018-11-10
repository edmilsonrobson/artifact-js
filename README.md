# Artifact JS

A Javascript API Wrapper for Valve's cardgame Artifact (with built-in caching).

### How to Use

Currently, the only method available is getting all cards from a set:

```
const artifactJS = require("./index.js");
artifactJS.cardSet.getSet("00").then(response => console.log(response))
```

This will print the list of cards from card set `00`.
You can view an example response below [or by clicking here, from Valve's official repo](https://github.com/ValveSoftware/ArtifactDeckCode/blob/master/README.md)

```
{
  "card_set": {
    "version": 1,
    "set_info": {
      "set_id": 0,
      "pack_item_def": 0,
      "name": {
        "english": "Base Set"
      }
    },
    "card_list": [{

      "card_id": 4000,
      "base_card_id": 4000,
      "card_type": "Hero",
      "card_name": {
        "english": "Farvhan the Dreamer"
      },
      "card_text": {
        "english": "Pack Leadership<BR>\nFarvhan the Dreamer's allied neighbors have +1 Armor."
      },
      "mini_image": {
        "default": "<url to png>"
      },
      "large_image": {
        "default": "<url to png>"
      },
      "ingame_image": {
        "default": "<url to png>"
      },
      "is_green": true,
      "attack": 4,
      "hit_points": 10,
      "references": [{
          "card_id": 4002,
          "ref_type": "includes",
          "count": 3
        },
        {
          "card_id": 4001,
          "ref_type": "passive_ability"
        }
      ]


    },
    ..... more cards ....

    ]
  }
}
```

Card sets will be cached respecting Valve's API `expire_time` values. You can know if the call was cached or not by the `cached`
attribute which ArtifactJS appends to the API result.

### Contribute

Contributions are welcome! [Post any issues or suggestions for improvements](https://github.com/edmilsonrobson/artifact-ccg-js/issues).
