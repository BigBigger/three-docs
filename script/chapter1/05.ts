/*
 * @Author       : BigBigger
 * @Date         : 2021-08-17 11:03:55
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
  MeshLambertMaterial,
  SpotLight,
  Vector2,
  AmbientLight,
  ConeGeometry,
  CylinderGeometry,
} from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { ThreeObject } from '@s/global';
import { initStats, initControls } from '../libs/utils';

export default (
  el: HTMLElement,
  width: number,
  height: number
): ThreeObject => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);

  const renderer = new WebGLRenderer();
  renderer.setClearColor(new Color(0x000000));
  renderer.setSize(width, height);
  // 打开阴影效果
  renderer.shadowMap.enabled = true;

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

  // 添加环境光
  const ambienLight = new AmbientLight(0x353535);
  scene.add(ambienLight);

  // 将摄影机定位并指向场景的中心
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  // 将渲染器的输出添加到html元素
  el?.appendChild(renderer.domElement);

  // 渲染场景
  // renderer.render(scene, camera);

  // 创建相关工具，后续有介绍
  const trackballControls = new TrackballControls(camera, renderer.domElement);
  const stats = initStats(el);
  let exampleFlag = false;
  initControls(el, {
    changeExample: () => {
      // 先删除现有图形
      scene.children
        .filter((i) => i instanceof Mesh)
        .forEach((i) => {
          scene.remove(i);
        });
      // 添加另一种图形
      (exampleFlag ? createExample13 : createExample14)(scene);
      exampleFlag = !exampleFlag;
    },
  });
  // 开始创建示例13
  createExample13(scene);

  renderScene();
  function renderScene() {
    stats.update();
    trackballControls.update();
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }
  return {
    camera,
    renderer,
  };
};
// 创建示例
const createExample13 = (scene: Scene): void => {
  createCube(scene);
  createSphere(scene);
  createPlane(scene);
};
const createExample14 = (scene: Scene): void => {
  createGroundPlane(scene);
  createBoundingWall(scene);
  createHouse(scene);
  createTree(scene);
};

// 创建立方体
const createCube = (scene: Scene): void => {
  const cubeGeometry = new BoxGeometry(4, 4, 4);
  const cubeMaterial = new MeshLambertMaterial({
    color: 0xff0000,
  });
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 2;
  cube.position.z = 0;

  cube.castShadow = true;
  scene.add(cube);
};
// 创建球体
const createSphere = (scene: Scene): void => {
  const sphereGeometry = new SphereGeometry(4, 20, 20);
  const sphereMaterial = new MeshLambertMaterial({
    color: 0x7777ff,
  });
  const sphere = new Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;

  sphere.castShadow = true;
  scene.add(sphere);
};
// 创建平面
const createPlane = (scene: Scene): void => {
  const planeGeometry = new PlaneGeometry(60, 20);
  const planeMaterial = new MeshLambertMaterial({
    color: 0xaaaaaa,
  });
  const plane = new Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);

  plane.receiveShadow = true;
  scene.add(plane);
};

// 创建围墙
const createBoundingWall = (scene: Scene): void => {
  const wallLeft = new BoxGeometry(70, 2, 2);
  const wallRight = new BoxGeometry(70, 2, 2);
  const wallTop = new BoxGeometry(2, 2, 50);
  const wallBottom = new BoxGeometry(2, 2, 50);

  const wallMaterial = new MeshLambertMaterial({
    color: 0xa0522d,
  });

  const wallLeftMesh = new Mesh(wallLeft, wallMaterial);
  const wallRightMesh = new Mesh(wallRight, wallMaterial);
  const wallTopMesh = new Mesh(wallTop, wallMaterial);
  const wallBottomMesh = new Mesh(wallBottom, wallMaterial);

  wallLeftMesh.position.set(15, 1, -25);
  wallRightMesh.position.set(15, 1, 25);
  wallTopMesh.position.set(-19, 1, 0);
  wallBottomMesh.position.set(49, 1, 0);

  scene.add(wallLeftMesh);
  scene.add(wallRightMesh);
  scene.add(wallBottomMesh);
  scene.add(wallTopMesh);
};

// 创建草地
const createGroundPlane = (scene: Scene): void => {
  // create the ground plane
  const planeGeometry = new PlaneGeometry(70, 50);
  const planeMaterial = new MeshLambertMaterial({
    color: 0x9acd32,
  });
  const plane = new Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  scene.add(plane);
};

// 创建房子
const createHouse = (scene: Scene): void => {
  const roof = new ConeGeometry(5, 4);
  const base = new CylinderGeometry(5, 5, 6);

  // create the mesh
  const roofMesh = new Mesh(
    roof,
    new MeshLambertMaterial({
      color: 0x8b7213,
    })
  );
  const baseMesh = new Mesh(
    base,
    new MeshLambertMaterial({
      color: 0xffe4c4,
    })
  );

  roofMesh.position.set(25, 8, 0);
  baseMesh.position.set(25, 3, 0);

  roofMesh.receiveShadow = true;
  baseMesh.receiveShadow = true;
  roofMesh.castShadow = true;
  baseMesh.castShadow = true;

  scene.add(roofMesh);
  scene.add(baseMesh);
};

// 创建树
const createTree = (scene: Scene): void => {
  const trunk = new BoxGeometry(1, 8, 1);
  const leaves = new SphereGeometry(4);

  // create the mesh
  const trunkMesh = new Mesh(
    trunk,
    new MeshLambertMaterial({
      color: 0x8b4513,
    })
  );
  const leavesMesh = new Mesh(
    leaves,
    new MeshLambertMaterial({
      color: 0x00ff00,
    })
  );

  // position the trunk. Set y to half of height of trunk
  trunkMesh.position.set(-10, 4, 0);
  leavesMesh.position.set(-10, 12, 0);

  trunkMesh.castShadow = true;
  trunkMesh.receiveShadow = true;
  leavesMesh.castShadow = true;
  leavesMesh.receiveShadow = true;

  scene.add(trunkMesh);
  scene.add(leavesMesh);
};
