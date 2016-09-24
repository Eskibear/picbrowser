var fs = require('fs');
var path = require('path');
var config = require('../config');

function isPic(filename){
  if (filename.endsWith('.jpg')
    ||filename.endsWith('.jpeg')
    ||filename.endsWith('.png')
    ||filename.endsWith('.gif')) {
    return true;
  }
  else {
    return false;
  }
}

function listFiles(relativePath){
  console.log(`listFiles: ${relativePath}`);
  const absolutePath = path.join(config.storageBasePath, decodeURIComponent(relativePath));
  // console.log(curDir);
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
    curIndex: 0,
    curDir: relativePath,
    picList,
    dirList
  };
}

module.exports = {
  listFiles
};