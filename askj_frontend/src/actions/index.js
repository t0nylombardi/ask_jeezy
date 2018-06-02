import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const FETCH_JEEZY = 'FETCH_JEEZY';

export function fetchJeezy(){

  const request = axios.get(ROOT_URL)

  console.log('Request:', request);

  return{
    type: FETCH_JEEZY,
    payload: request
  };
}