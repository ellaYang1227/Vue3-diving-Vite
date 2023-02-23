<script setup>
import formSchema from "../../data/formSchema.js";
import { loginImg } from "../../data/imagePaths.js";
import { authGuard } from "../../data/routeGuard.js";
const { VITE_COMPANY_NAME } = import.meta.env;
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import OtherStore from "../../stores/OtherStore.js";
import UploadImg from "../../components/UploadImg.vue";

export default {
    data(){
        return{
            activityId: "",
            certificateLevels: [],
            cylinderTotals: [],
            activity: {
                title: "",
                imgs: [],
                locationId: "",
                features: "",
                content: "",
                startDate: "",
                endDate: "",
                orderExpiryDate: "",
                maxOrderTotal: null,
                cost: null,
                certificateLevel: "",
                cylinderTotal: "",
                isNitrox: null,
                tags: []
            }
        }
    },
    components: {
        VForm: Form,
        Field,
        ErrorMessage,
        UploadImg
    },
    beforeRouteEnter(to, from, next) {
        authGuard(to, from, next);
    },
    mounted() {
        this.activityId = this.$route.params.activityId;
        console.log(this.activityId)
        const APIs = [this.getCertificateLevels(), this.getCylinderTotals()];
        //if(this.activityId){ APIs.push(this.getMyinfo(this.activityId)) }
        Promise.all(APIs).then(resArr => {
            console.log(resArr)
            this.certificateLevels = resArr[0];
            this.cylinderTotals = resArr[1];
            //if(this.id) { this.activity = resArr[2] }
            this.hideLoading();
        });
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(OtherStore, ["getCertificateLevels", "getCylinderTotals"]),
        onSubmit() {
            this.showLoading("btn");
            console.log(this.activityId)
        }
    }
};
</script>

<template>編輯活動s</template>

<style lang="scss"></style>
