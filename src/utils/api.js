import http from './request';

export function getAPI(apiPath) {
  let URL = "/api"+apiPath;
  return http.get(URL)
}

export function getSummoner(summonerName) {
  return http.get(`/consult/getSummoner?summonerName=${summonerName}`)
}

export function getMatchList(accountId, index) {
  return http.get(`/consult/getMatches?accountId=${accountId}&index=${index}`)
}

// export function getEChartsData(type, match) {
//   return http.get(`/consult/getEChartsData?type=${type}&match=${match}`)
// }

export function getChampionImage() {
  return http.get(`http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json`)
}