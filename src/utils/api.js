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