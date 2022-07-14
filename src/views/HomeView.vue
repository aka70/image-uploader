<script setup lang="ts">
import ImagePreview from "@/components/ImagePreview.vue";
import { ref } from "vue";

const imgFiles = ref<File[]>([]);

const onChange = (e: Event) => {
  const inputEvent = e.target as HTMLInputElement;
  const targetFiles = inputEvent.files as FileList;
  const filesArray = Array.from(targetFiles);
  imgFiles.value.push(...filesArray);
};

const submit = async () => {
  const formData = new FormData();
  imgFiles.value.forEach((file, index) => {
    formData.append(`files[${index}]`, file);
  });
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  });
  const responseJson = await response.json();
  console.log(responseJson);
  imgFiles.value = [];
};
</script>

<template>
  <form @submit.prevent>
    <label for="image">画像を選択してください</label>

    <input
      @change="onChange"
      type="file"
      id="image"
      name="image"
      accept="image/*"
      multiple
    />
    <button type="submit" @click="submit">保存</button>
  </form>

  <div v-for="(imgFile, index) in imgFiles" :key="index">
    <ImagePreview :imgFile="imgFile" />
  </div>
</template>
