/*
 * @Author       : BigBigger
 * @Date         : 2021-08-17 10:23:46
 * @LastEditTime : 2021-08-17 15:30:59
 * @LastEditors  : BigBigger
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AxesHelper,
  BoxGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  SphereGeometry,
} from 'three';
import { initStats } from '../libs/utils';

export default (
  el: HTMLElement,
  width: number,
  height: number
): {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
} => {
  // 创建一个场景，该场景将包含所有元素，例如对象、摄影机和灯光
  const scene = new Scene();

  // 创建一个摄像头，它定义了我们要看的地方
  const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);

  // 创建渲染器并设置大小
  const renderer = new WebGLRenderer();
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(width, height);

  // 创建坐标轴
  const axes = new AxesHelper(20);
  scene.add(axes);

  // 创建平面
  const planeGeometry = new PlaneGeometry(60, 20);
  const planeMaterial = new MeshBasicMaterial({
    color: 0xaaaaaa,
  });
  const plane = new Mesh(planeGeometry, planeMaterial);
  // 旋转和定位平面并加入场景
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  scene.add(plane);

  // 创建立方体
  const cubeGeometry = new BoxGeometry(4, 4, 4);
  const cubeMaterial = new MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  // 定位立方体并加入场景
  cube.position.set(-4, 3, 0);
  scene.add(cube);

  // 创建球体
  const sphereGeometry = new SphereGeometry(4, 20, 20);
  const sphereMaterial = new MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  });
  const sphere = new Mesh(sphereGeometry, sphereMaterial);

  // 定位球体并加入场景
  sphere.position.set(20, 4, 2);
  scene.add(sphere);

  // 将摄影机定位并指向场景的中心
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  // 将渲染器的输出添加到html元素
  el?.appendChild(renderer.domElement);

  // 渲染场景
  // renderer.render(scene, camera);

  // 创建工具
  const stats = initStats(el);

  renderScene();
  function renderScene() {
    stats.update();
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }
  return {
    camera,
    renderer,
  };
};
