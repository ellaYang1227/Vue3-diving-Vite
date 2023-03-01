<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "../../stores/LoadingStore.js";
import ActivityStore from "../../stores/ActivityStore.js";

export default {
    data() {
        return {
            activity: {}
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => { 
                const { activityId } = this.$route.params;
                if(activityId){
                    // this.getActivity(activityId)
                    // .then(res => {
                    //     console.log(res)
                    //     this.activity = res;
                    //     this.hideLoading();
                    // });
                }
            },
            { immediate: true }
        );
        
    },
    // mounted() {
    //     console.log(this.$route.params)
    //     // this.getActivity()
    //     // this.hideLoading();
    // },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivity"]),
    }
};
</script>

<template>
{{ activity }}
</template>

<style lang="scss"></style>
