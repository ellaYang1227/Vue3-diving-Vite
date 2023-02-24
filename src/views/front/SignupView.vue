<script setup>
import { signupImg } from "../../data/imagePaths.js";
import { guestGuard } from "../../data/routeGuard.js";
</script>

<script>
import MyinfoForm from "../../components/MyinfoForm.vue";
import FormUtilitieLayoutVue from "../../components/FormUtilitieLayout.vue";

export default {
    data() {
        return {
            title: "註冊"
        };
    },
    inject: ["frontLayoutData"],
    components: {
        MyinfoForm,
        FormUtilitieLayoutVue
    },
    beforeRouteEnter(to, from, next) {
        guestGuard(to, from, next);
    },
    created() {
        this.frontLayoutData.isVerticalMiddle = false;
    }
};
</script>

<template>
    <FormUtilitieLayoutVue :title="`${title}`" en-title="signup" :img="signupImg">
        <template #body>
            <MyinfoForm />
        </template>
    </FormUtilitieLayoutVue>
</template>

<style lang="scss"></style>
