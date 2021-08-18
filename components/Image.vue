<!--
 * @Description  : 图片展示
 * @Author       : BigBigger
 * @Date         : 2021-08-16 14:03:46
 * @LastEditTime : 2021-08-17 10:00:42
 * @LastEditors  : BigBigger
-->
<template>
  <div>
    <img :src="src" :alt="`图 ${chapter}.${index}`" />
    <div class="img-title">
      图&nbsp;&nbsp;&nbsp;&nbsp;{{ chapter }}.{{ index }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vitepress';
  const { path } = useRoute();
  const props = defineProps<{
    index: number;
  }>();
  const chapter = path.split('/')[2].replace('chapter', '');
  const src = `/chapter${chapter}/${props.index}.png`;
</script>

<style>
  .img-title {
    text-align: center;
  }
</style>
