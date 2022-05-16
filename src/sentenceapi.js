import fetch from 'node-fetch';

export function getSentence() {
  let endpoint =
    '	https://api.adviceslip.com/advice';

  // TODO: fetch를 이용해 endpoint로부터 영화 정보를 받아오세요
  return fetch(endpoint).then((response) => response.json());
}
