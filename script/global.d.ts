/*
 * @Description  :
 * @Author       : BigBigger
 * @Date         : 2021-08-17 16:40:30
 * @LastEditTime : 2021-08-17 16:48:35
 * @LastEditors  : BigBigger
 */
import { PerspectiveCamera, WebGLRenderer } from 'three';

export interface ThreeObject {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
}
