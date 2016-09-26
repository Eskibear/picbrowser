export function saveSnapshot(state) {
  const { baseMap } = state;
  ['curIndex', 'curDir'].forEach( (name) => {
    localStorage[name] = state[name];
  });
  ['virtualBase', 'realBase'].forEach( (name) => {
    localStorage[name] = baseMap[name];
  });
}

export function loadSnapshot() {
  const {virtualBase, realBase, curIndex, curDir} = localStorage;
  return {virtualBase, realBase, curIndex, curDir};
}
