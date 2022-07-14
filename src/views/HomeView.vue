<script setup lang="ts">
import ImagePreview from "@/components/ImagePreview.vue";
import { useFileUploader } from "@/composable/useFileUploader";

const { refFiles, pushFiles, submit } = useFileUploader();

const onChange = (e: Event) => {
  const inputEvent = e.target as HTMLInputElement;
  const targetFiles = inputEvent.files as FileList;
  pushFiles(Array.from(targetFiles));
};

const onUploadButtonClicked = () => {
  const fileInput = document.getElementById("file-input");
  fileInput?.click();
};
</script>

<template>
  <div class="container">
    <form @submit.prevent>
      <input
        @change="onChange"
        type="file"
        id="file-input"
        name="image"
        accept="image/*"
        multiple
      />
      <button @click="onUploadButtonClicked()">ファイルを保存</button>
      <button type="submit" @click="submit">保存</button>
    </form>

    <div v-for="(imageFile, index) in refFiles" :key="index">
      <ImagePreview :imageFile="imageFile" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

#file-input {
  display: none;
}
</style>
