import http from './request.js'

var match1 = {
	"Meta": {
    "gameId": 3996539685,
		"date": "2019 / 4 / 16",
		"duration": "21 min",
		"win": "blue"
	},
	"bluePlayers": [
    {
		"lane": "top",
		"summonerName": "b1",
		"champion": "Aatrox",
		"spells": [6, 14],
		"items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
		"kda": "1-1-1",
		"largestMultiKill": 1,
		"totalMinionsKilled": 157,
		"turretKills": 0,
		"gold": 6789,
		"dmg": 4396,
		"dmgTaken": 3469,
		"viewScore": 12
    },
    {
      "lane": "jgl",
      "summonerName": "b2",
      "champion": "Aatrox",
      "spells": [6, 14],
      "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
      "kda": "1-1-1",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "mid",
        "summonerName": "b3",
        "champion": "Aatrox",
        "spells": [6, 14],
        "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
        "kda": "1-1-1",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "sup",
          "summonerName": "b4",
          "champion": "Aatrox",
          "spells": [6, 14],
          "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
          "kda": "1-1-1",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "adc",
            "summonerName": "b5",
            "champion": "Aatrox",
            "spells": [6, 14],
            "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
            "kda": "1-1-1",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            }
  ],
	"redPlayers": [
    {
      "lane": "top",
      "summonerName": "r1",
      "champion": "Aatrox",
      "spells": [6, 14],
      "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
      "kda": "1-1-1",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "jgl",
        "summonerName": "r2",
        "champion": "Aatrox",
        "spells": [6, 14],
        "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
        "kda": "1-1-1",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "mid",
          "summonerName": "r3",
          "champion": "Aatrox",
          "spells": [6, 14],
          "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
          "kda": "1-1-1",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "sup",
            "summonerName": "r4",
            "champion": "Aatrox",
            "spells": [6, 14],
            "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
            "kda": "1-1-1",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            },
            {
              "lane": "adc",
              "summonerName": "r5",
              "champion": "Aatrox",
              "spells": [6, 14],
              "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
              "kda": "1-1-1",
              "largestMultiKill": 1,
              "totalMinionsKilled": 157,
              "turretKills": 0,
              "gold": 6789,
              "dmg": 4396,
              "dmgTaken": 3469,
              "viewScore": 12
              }
  ]
};

var match2 = {
	"Meta": {
    "gameId": 3996545874,
		"date": "2019 / 4 / 17",
		"duration": "21 min",
		"win": "red"
	},
	"bluePlayers": [
    {
		"lane": "top",
		"summonerName": "b1",
		"champion": "Ahri",
		"spells": [6, 14],
		"items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
		"kda": "2-2-2",
		"largestMultiKill": 1,
		"totalMinionsKilled": 157,
		"turretKills": 0,
		"gold": 6789,
		"dmg": 4396,
		"dmgTaken": 3469,
		"viewScore": 12
    },
    {
      "lane": "jgl",
      "summonerName": "b2",
      "champion": "Ahri",
      "spells": [6, 14],
      "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
      "kda": "2-2-2",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "mid",
        "summonerName": "b3",
        "champion": "Ahri",
        "spells": [6, 14],
        "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
        "kda": "2-2-2",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "sup",
          "summonerName": "b4",
          "champion": "Ahri",
          "spells": [6, 14],
          "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
          "kda": "2-2-2",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "adc",
            "summonerName": "b5",
            "champion": "Ahri",
            "spells": [6, 14],
            "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
            "kda": "2-2-2",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            }
  ],
	"redPlayers": [
    {
      "lane": "top",
      "summonerName": "r1",
      "champion": "Ahri",
      "spells": [6, 14],
      "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
      "kda": "2-2-2",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "jgl",
        "summonerName": "r2",
        "champion": "Ahri",
        "spells": [6, 14],
        "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
        "kda": "2-2-2",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "mid",
          "summonerName": "r3",
          "champion": "Ahri",
          "spells": [6, 14],
          "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
          "kda": "2-2-2",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "sup",
            "summonerName": "r4",
            "champion": "Ahri",
            "spells": [6, 14],
            "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
            "kda": "2-2-2",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            },
            {
              "lane": "adc",
              "summonerName": "r5",
              "champion": "Ahri",
              "spells": [6, 14],
              "items": [3078, 3748, 3111, 3124, 3144, 1052, 3340],
              "kda": "2-2-2",
              "largestMultiKill": 1,
              "totalMinionsKilled": 157,
              "turretKills": 0,
              "gold": 6789,
              "dmg": 4396,
              "dmgTaken": 3469,
              "viewScore": 12
              }
  ]
};

var match3 = {
	"Meta": {
    "gameId": 3996458012,
		"date": "2019 / 4 / 18",
		"duration": "21 min",
		"win": "blue"
	},
	"bluePlayers": [
    {
		"lane": "top",
		"summonerName": "b1",
		"champion": "Corki",
		"spells": [6, 14],
		"items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
		"kda": "3-3-3",
		"largestMultiKill": 1,
		"totalMinionsKilled": 157,
		"turretKills": 0,
		"gold": 6789,
		"dmg": 4396,
		"dmgTaken": 3469,
		"viewScore": 12
    },
    {
      "lane": "jgl",
      "summonerName": "b2",
      "champion": "Corki",
      "spells": [6, 14],
      "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
      "kda": "3-3-3",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "mid",
        "summonerName": "b3",
        "champion": "Corki",
        "spells": [6, 14],
        "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
        "kda": "3-3-3",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "sup",
          "summonerName": "b4",
          "champion": "Corki",
          "spells": [6, 14],
          "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
          "kda": "3-3-3",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "adc",
            "summonerName": "b5",
            "champion": "Corki",
            "spells": [6, 14],
            "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
            "kda": "3-3-3",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            }
  ],
	"redPlayers": [
    {
      "lane": "top",
      "summonerName": "r1",
      "champion": "Corki",
      "spells": [6, 14],
      "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
      "kda": "3-3-3",
      "largestMultiKill": 1,
      "totalMinionsKilled": 157,
      "turretKills": 0,
      "gold": 6789,
      "dmg": 4396,
      "dmgTaken": 3469,
      "viewScore": 12
      },
      {
        "lane": "jgl",
        "summonerName": "r2",
        "champion": "Corki",
        "spells": [6, 14],
        "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
        "kda": "3-3-3",
        "largestMultiKill": 1,
        "totalMinionsKilled": 157,
        "turretKills": 0,
        "gold": 6789,
        "dmg": 4396,
        "dmgTaken": 3469,
        "viewScore": 12
        },
        {
          "lane": "mid",
          "summonerName": "r3",
          "champion": "Corki",
          "spells": [6, 14],
          "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
          "kda": "3-3-3",
          "largestMultiKill": 1,
          "totalMinionsKilled": 157,
          "turretKills": 0,
          "gold": 6789,
          "dmg": 4396,
          "dmgTaken": 3469,
          "viewScore": 12
          },
          {
            "lane": "sup",
            "summonerName": "r4",
            "champion": "Corki",
            "spells": [6, 14],
            "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
            "kda": "3-3-3",
            "largestMultiKill": 1,
            "totalMinionsKilled": 157,
            "turretKills": 0,
            "gold": 6789,
            "dmg": 4396,
            "dmgTaken": 3469,
            "viewScore": 12
            },
            {
              "lane": "adc",
              "summonerName": "r5",
              "champion": "Corki",
              "spells": [6, 14],
              "items": [3031, 3078, 3094, 3020, 3046, 3140, 3340],
              "kda": "3-3-3",
              "largestMultiKill": 1,
              "totalMinionsKilled": 157,
              "turretKills": 0,
              "gold": 6789,
              "dmg": 4396,
              "dmgTaken": 3469,
              "viewScore": 12
              }
  ]
};

var matchList=[match1,match2,match3];


export function testUrl() {
  return http.get('');
}

export function cube(x) {
  return x * x * x;
}

export function getSummoner(summonerName){
  return {
    "profileIconId": 3632,
    "name": "JoyCJay-zcj",
    "puuid": "6bmemBIp6TveV98cOOKV-Djjjj_0kbyPdk1kBpMrd31spm1RIFowLqP1UJR6ZkIuZWKhxxVS26wdGA",
    "summonerLevel": 105,
    "accountId": "k3FVou_50RmEUDSN42cCs4iVXuggR-kQvhH7a_X8JAgoxVI",
    "id": "oiL2jn33fB3KojNWe1JNqxvgkxIGOkChqH_Zyb5XF4MdJyXo",
    "revisionDate": 1553733674000
  };
}

export function getMatchList(accountId){
  return matchList;
}

export function getMatch(matchId) {
  let result;
  switch (matchId) {
    case 3996539685:
      result= match1;
      break;
    case 3996545874:
      result= match2;
      break;
    case 3996458012:
      result= match3;
      break;
    default:
      break;
  }
  return result;
}