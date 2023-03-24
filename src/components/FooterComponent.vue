<script>
const { VITE_COMPANY_NAME } = import.meta.env;
export default {
  data() {
    return {
      VITE_COMPANY_NAME
    };
  }
};
</script>

<template>
  <div class="bg-primary bg-opacity-20 text-center py-2 fs-7">
    <span class="d-block">© 2022 {{ VITE_COMPANY_NAME }}. All Rights Reserved.</span>
    <span>資料、圖片、來源皆來自網路，僅用來做為學習用途</span>
  </div>
</template>

<style lang="scss"></style>
