<script setup lang="ts">
const props = defineProps<{
  imgFile: File;
}>();
const imgSrc = URL.createObjectURL(props.imgFile);
</script>

<template><img :src="imgSrc" /></template>
