module.exports = {
  defaultMap:{
    name: 'defaultMap',
    virtualBase: '/defaultBase',
    realBase: process.cwd()
  },
  availableMaps: [{
    name: 'mapName',
    virtualBase: '/virtualUrlBasePath',
    realBase: 'realDirectoryInLocalDisk'
  }],
  allowedIps: [
    '::ffff:127.0.0.1',
    '::1'
  ]
};