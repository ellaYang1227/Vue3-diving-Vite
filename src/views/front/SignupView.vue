<script>
import { signupImg } from "@/data/imagePaths.js";
import { guestGuard } from "@/data/routeGuard.js";
import MyInfoForm from "@/components/MyInfoForm.vue";
import FormUtilitieLayoutVue from "@/components/FormUtilitieLayout.vue";

export default {
  data() {
    return {
      signupImg,
      title: "註冊"
    };
  },
  inject: ["frontLayoutData"],
  components: {
    MyInfoForm,
    FormUtilitieLayoutVue
  },
  beforeRouteEnter(to, from, next) {
    guestGuard(to, from, next);
  },
  created() {
    this.frontLayoutData.showSearchBar = false;
  }
};
</script>

<template>
  <FormUtilitieLayoutVue :title="`${title}`" en-title="signup" :img="signupImg">
    <template #body>
      <MyInfoForm />
    </template>
  </FormUtilitieLayoutVue>
</template>

<style lang="scss"></style>
