import Axios from 'axios';

export function getAPI(apiPath) {
  let URL = "/api"+apiPath;
  return Axios.get(URL)
}
