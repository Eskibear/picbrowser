export const INITIALIZE = 'INITIALIZE';
export const SWITCH_PIC = 'SWITCH_PIC';
export const SWITCH_DIR = 'SWITCH_DIR';

export function initialize(obj) {
  return { type: INITIALIZE, obj };
}

export function switchPic(index) {
  return { type: SWITCH_PIC, index }
}

export function switchDic(dir) {
  return { type: SWITCH_DIR, dir }
}