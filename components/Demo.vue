<!--
 * @Description  :
 * @Author       : BigBigger
 * @Date         : 2021-08-11 09:16:44
 * @LastEditTime : 2021-08-18 09:27:09
 * @LastEditors  : BigBigger
-->
<template>
  <div id="three-demo" ref="domEl" />
</template>

<script setup lang="ts">
  import { onMounted, ref, onUnmounted } from 'vue';
  import { useRoute } from 'vitepress';
  import { ThreeObject } from '@s/global';
  const { path } = useRoute();
  const a = import.meta.glob(`/script/chapter*/*.ts`);
  const fileKey = path.replace('/docs', '/script').replace('.html', '.ts');
  const domEl = ref<HTMLElement>();
  onMounted(async () => {
    try {
      const el = document.getElementsByClassName('content')[0];
      const width = el?.getBoundingClientRect().width;
      const height = width / 1.5;
      a[fileKey]().then((mod) => {
        const threeObject: ThreeObject = mod?.default?.(
          domEl.value,
          width,
          height
        );

        function onResize() {
          const _width = el?.getBoundingClientRect().width;
          const _height = _width / 1.5;
          threeObject.camera.aspect = _width / _height;
          threeObject.camera.updateProjectionMatrix();
          threeObject.renderer.setSize(_width, _height);
        }
        window.addEventListener('resize', onResize, false);
        onUnmounted(() => {
          window.removeEventListener('resize', onResize);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
</script>

<style scoped lang="less">
  #three-demo {
    position: relative;
  }
</style>
