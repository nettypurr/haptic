import { h as _h } from './h.js';

import { add } from './nodeAdd.js';
import { insert } from './nodeInsert.js';
import { property } from './nodeProperty.js';
import { remove } from './nodeRemove.js';

// This API should be compatible with community libraries that extend Sinuous
const api = {
  // Element namespace URL such as SVG or MathML
  ns: '',
  // Element creation
  h: _h,
  // Customizable internal methods for h()
  add,
  insert,
  property,
  remove,
  // Reactivity callback; could be haptic/v, sinuous/observable, mobx, etc
  reactiveFn: (_: (...args: unknown[]) => unknown) => {},
};

// Reference the latest internal h() allowing others to customize the call
const h: typeof _h = (...args) => api.h(...args);

export { api, h };
