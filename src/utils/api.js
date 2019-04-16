import http from './request.js'

export function testUrl() {
  return http.get('');
}

export function cube(x) {
  return x * x * x;
}

export function getSummoner(summonerId){
  return http.get(`http://localhost:8080/getSummoner?summonerId=${summonerId}`)
  // return {
  //   "profileIconId": 3632,
  //   "name": "JoyCJay-zcj",
  //   "puuid": "6bmemBIp6TveV98cOOKV-Djjjj_0kbyPdk1kBpMrd31spm1RIFowLqP1UJR6ZkIuZWKhxxVS26wdGA",
  //   "summonerLevel": 105,
  //   "accountId": "k3FVou_50RmEUDSN42cCs4iVXuggR-kQvhH7a_X8JAgoxVI",
  //   "id": "oiL2jn33fB3KojNWe1JNqxvgkxIGOkChqH_Zyb5XF4MdJyXo",
  //   "revisionDate": 1553733674000
  // };
}

export function getMatchList(accountId){
  return [
        {
            "platformId": "EUW1",
            "gameId": 3996539685,
            "champion": 58,
            "queue": 430,
            "season": 13,
            "timestamp": 1555281994161,
            "role": "SOLO",
            "lane": "TOP"
        },
        {
            "platformId": "EUW1",
            "gameId": 3996545874,
            "champion": 64,
            "queue": 430,
            "season": 13,
            "timestamp": 1555280559170,
            "role": "DUO_SUPPORT",
            "lane": "NONE"
        },
        {
            "platformId": "EUW1",
            "gameId": 3996458012,
            "champion": 61,
            "queue": 430,
            "season": 13,
            "timestamp": 1555277749568,
            "role": "SOLO",
            "lane": "MID"
        }
    ];
}

export function getRedList(gameId){
  return [
    {
      index:0,
      id: "red1",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:1,
      id: "red2",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:2,
      id: "red3",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:3,
      id: "red4",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:4,
      id: "red5",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    }
  ];
}

export function getBlueList(gameId){
  return [
    {
      index:0,
      id: "blue1",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:1,
      id: "blue2",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:2,
      id: "blue3",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:3,
      id: "blue4",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
    {
      index:4,
      id: "blue5",
      kda:"1-2-3",
      gold:"8888",
      dmg:"123456",
      dmgTaken:"654321"
    },
  ];
}

export function getMatch(matchId) {
  return {};
}