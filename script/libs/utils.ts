/*
 * @Description  :
 * @Author       : BigBigger
 * @Date         : 2021-07-27 17:00:09
 * @LastEditTime : 2021-08-17 14:07:45
 * @LastEditors  : BigBigger
 */
import Stats from 'stats.js';
import { GUI, GUIController } from 'dat.gui';
import { isNumber, forIn, isFunction, isArray, forEach, has } from 'lodash';

// 初始化动画运行监测模块
export function initStats(el = document.body, type?: number): Stats {
  const stats = new Stats();
  // 0: fps, 1: ms, 2: mb, 3+: custom
  stats.showPanel(type || 0);
  stats.dom.style.position = 'absolute';
  el.appendChild(stats.dom);
  return stats;
}

interface customOption {
  value: number | string;
  type?: 'color' | 'select';
  fn?: {
    name: Exclude<keyof GUIController, 'domElement' | 'object' | 'property'>;
    parameter: unknown;
  }[];
  params?: (string | number)[] | { [key: string]: string | number };
}

interface controlOptions {
  [key: string]:
    | number
    | (string | number)[]
    | (() => void)
    | controlOptions
    | customOption;
}

type getType<T> = T extends customOption
  ? T['value']
  : T extends controlOptions
  ? { [K in keyof T]: getType<T[K]> }
  : T;

function valueIsOption(
  value: customOption | controlOptions
): value is customOption {
  return has(value, 'value');
}

function add(
  gui: GUI,
  controls: Record<string, unknown>,
  options: controlOptions
) {
  forIn(options, (value, key) => {
    if (isFunction(value)) {
      // function 直接添加button
      controls[key] = value;
      gui.add(controls, key);
    } else if (isNumber(value)) {
      // number 添加为 slider
      controls[key] = value;
      gui.add(controls, key, value);
    } else if (isArray(value)) {
      // 非对象数组添加为select
      gui.add(controls, key, value);
    } else {
      // object二次判断
      if (valueIsOption(value)) {
        // 有value则认为是customOption
        controls[key] = value.value;
        if (value.type === 'color') {
          // 类型为color
          gui.addColor(controls, key);
        } else if (value.type === 'select') {
          gui.add(controls, key, value.params || []);
        } else {
          if (value.fn) {
            const controller = gui.add(controls, key);
            forEach(value.fn, (i) => {
              controller[i.name](i.parameter);
            });
          } else {
            gui.add(controls, key, ...((value.params || []) as number[]));
          }
        }
      } else {
        // 否则认为是folder
        controls[key] = {};
        add(
          gui.addFolder(key),
          controls[key] as Record<string, unknown>,
          value
        );
      }
    }
  });
}

// 初始化gui控制模块
export function initControls<T extends controlOptions>(
  el: HTMLElement,
  options: T
): { [K in keyof T]: getType<T[K]> } {
  const controls: Record<string, unknown> = {};
  const gui = new GUI({ autoPlace: false });
  // 定位元素
  gui.domElement.style.position = 'absolute';
  gui.domElement.style.right = '0px';
  gui.domElement.style.top = '0px';
  gui.domElement.style.zIndex = '10000';
  el.appendChild(gui.domElement);
  add(gui, controls, options);
  return controls as { [K in keyof T]: getType<T[K]> };
}
