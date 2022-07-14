<script setup lang="ts">
const props = defineProps<{
  imageFile: File;
}>();
const imgSrc = URL.createObjectURL(props.imageFile);
</script>

<template><img :src="imgSrc" /></template>
