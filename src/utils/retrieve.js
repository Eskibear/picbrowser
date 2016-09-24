import path from 'path';
import { initialize } from '../actions';
import Store from '../store';

export function retrieveDirInfo(baseDir, subDir){
  const curDir = path.join(baseDir, subDir);

  fetch(`/retrieve?filename=${encodeURIComponent(curDir)}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response)=>{
    response.json().then((json)=>{
      console.log(json);
      Store.store.dispatch(initialize(json));
    });
  });
}