import path from 'path';
import { initialize } from '../actions';
import Store from '../store';

export function retrieveDirInfo(baseMap, relativePath){
  fetch(`/retrieve?basemap=${encodeURIComponent(JSON.stringify(baseMap))}&filename=${encodeURIComponent(relativePath)}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response)=>{
    response.json().then((json)=>{
      Store.store.dispatch(initialize(json));
    });
  });
}