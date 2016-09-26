var fs = require('fs');
var path = require('path');
var config = require('../config');

function isPic(filename){
  const re = /\.(jpe?g|png|gif|svg)$/i;
  return re.test(filename);
}

function listFiles(baseMapRaw, relativePath){
  const baseMap = JSON.parse(decodeURIComponent(baseMapRaw));
  const absolutePath = path.join(baseMap.realBase, decodeURIComponent(relativePath));

  if (!absolutePath){
    return {}
  }
  const picList = [];
  const dirList = ['..'];
  fs.readdirSync(absolutePath).forEach((filename)=> {
    try{
      const stat = fs.statSync(path.join(absolutePath, filename));
      if (stat && stat.isDirectory()) {
        dirList.push(filename);
      }
      else if (isPic(filename.toLowerCase())) {
        picList.push(filename);
      }
    }catch (err) {
      console.error(err);
      console.error(err.stack);
    }
  });

  return {
    baseMap,
    curIndex: picList.length > 0 ? 0 : -1,
    curDir: relativePath,
    picList,
    dirList
  };
}

module.exports = { listFiles };