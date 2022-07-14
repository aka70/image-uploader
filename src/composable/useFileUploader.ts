import { ref } from "vue";

export function useFileUploader() {
  const refFiles = ref<File[]>([]);

  const pushFiles = (imageFiles: File[]) => {
    refFiles.value.push(...imageFiles);
  };

  const submit = async () => {
    const formData = new FormData();
    refFiles.value.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    });
    const responseJson = await response.json();
    console.log(responseJson);
    refFiles.value = [];
  };

  return {
    refFiles,
    pushFiles,
    submit,
  };
}
