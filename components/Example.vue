<!--
 * @Description  : 原书示例
 * @Author       : BigBigger
 * @Date         : 2021-08-19 17:11:26
 * @LastEditTime : 2022-01-07 10:16:19
 * @LastEditors  : BigBigger
-->
<template>
  <div
    class="three-example"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <iframe
      v-if="!lazy || (lazy && isMounted)"
      :src="src"
      frameborder="0"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, onUnmounted } from 'vue';
  import { useRoute } from 'vitepress';
  const { path } = useRoute();
  const props = withDefaults(
    defineProps<{
      filename: string;
      lazy: boolean;
    }>(),
    { lazy: true }
  );
  const isMounted = ref(false);
  const width = ref(0);
  const height = ref(0);
  const pathArr = path.split('/'),
    chapter = pathArr[2].replace('chapter', '').padStart(2, '0');
  const src = `//three-example.docs.wxiaolei.com/src/chapter-${chapter}/${props.filename}.html`;
  function onResize() {
    const el = document.getElementsByClassName('content')[0];
    width.value = el?.getBoundingClientRect().width;
    height.value = width.value / 1.5;
  }
  onMounted(async () => {
    onResize();
    window.addEventListener('resize', onResize, false);
    isMounted.value = true;
    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
    });
  });
</script>

<style scoped lang="less">
  .three-example {
    margin-top: 1.5rem;
  }
</style>
