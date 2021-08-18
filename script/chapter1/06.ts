/*
 * @Author       : BigBigger
 * @Date         : 2021-08-17 14:55:10
 * @LastEditTime : 2021-08-17 16:49:56
 * @LastEditors  : BigBigger
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  BoxGeometry,
  PlaneGeometry,
  Mesh,
  SphereGeometry,
  Vector2,
  SpotLight,
  AmbientLight,
  MeshLambertMaterial,
} from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { ThreeObject } from '@s/global';
import { initStats } from '../libs/utils';

export default (
  el: HTMLElement,
  width: number,
  height: number
): ThreeObject => {
  // 创建一个场景，该场景将包含所有元素，例如对象、摄影机和灯光
  const scene = new Scene();

  // 创建一个摄像头，它定义了我们要看的地方
  const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);

  // 创建渲染器并设置大小
  const renderer = new WebGLRenderer();
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  // 创建平面
  const planeGeometry = new PlaneGeometry(60, 20, 1, 1);
  const planeMaterial = new MeshLambertMaterial({ color: 0xffffff });
  const plane = new Mesh(planeGeometry, planeMaterial);
  // 旋转和定位平面并加入场景
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  plane.receiveShadow = true;
  scene.add(plane);

  // 创建立方体
  const cubeGeometry = new BoxGeometry(4, 4, 4);
  const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000 });
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  // 定位立方体并加入场景
  cube.position.set(-4, 4, 0);
  cube.castShadow = true;
  scene.add(cube);

  // 创建球体
  const sphereGeometry = new SphereGeometry(4, 20, 20);
  const sphereMaterial = new MeshLambertMaterial({
    color: 0x7777ff,
  });
  const sphere = new Mesh(sphereGeometry, sphereMaterial);

  // 定位球体并加入场景
  sphere.position.set(20, 4, 2);
  sphere.castShadow = true;
  scene.add(sphere);

  // 将摄影机定位并指向场景的中心
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  // 添加环境光
  const ambienLight = new AmbientLight(0x353535);
  scene.add(ambienLight);

  // 添加聚光灯
  const spotLight = new SpotLight(0xffffff);
  spotLight.position.set(-40, 40, -15);
  spotLight.castShadow = true;
  spotLight.shadow.camera.far = 130;
  spotLight.shadow.camera.near = 40;

  spotLight.shadow.mapSize = new Vector2(2 ** 10, 2 ** 10);
  // 如果您想要更详细的阴影，可以增加用于绘制阴影的mapSize
  // spotLight.shadow.mapSize = new Vector2(2 ** 12, 2 ** 12);

  scene.add(spotLight);

  // 将渲染器的输出添加到html元素
  el?.appendChild(renderer.domElement);

  // 创建工具
  const stats = initStats(el);
  const trackballControls = new TrackballControls(camera, renderer.domElement);

  let step = 0;

  renderScene();
  function renderScene() {
    stats.update();
    trackballControls.update();

    // 围绕立方体的轴旋转立方体
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    // 使球体上下跳动
    step += 0.04;
    sphere.position.x = 20 + 10 * Math.cos(step);
    sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }
  return {
    camera,
    renderer,
  };
};
