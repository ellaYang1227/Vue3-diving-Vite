<script>
import VueMultiselect from 'vue-multiselect';
import { mapActions, mapState } from "pinia";
import ActivityStore from "../../stores/ActivityStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import HorizontalActivityCard from "../../components/HorizontalActivityCard.vue";

export default {
    data() {
        return {
            selected: null,
            sortOptions: [{
                label: "更新時間",
                value: "updateDate"
            },{
                label: "出發時間",
                value: "startDate"
            },{
                label: "評分",
                value: "score"
            },{
                label: "報名人數",
                value: "orderTotal"
            }],
            sort: "updateDate"
        }
    },
    inject: ["frontLayoutData"],
    computed: {
        ...mapState(ActivityStore, ["adActivitys", "activitys"])
    },
    watch: {
        selected() {
            this.sort = this.selected.value;
        }
    },
    components: {
        VueMultiselect,
        HorizontalActivityCard
    },
    created() {
        this.selected = this.sortOptions[0];
        this.$watch(
            () => this.$route.query,
            () => { 
                console.log(this.$route.query)
                this.getActivitys(this.$route.query, this.sort)
                .then(res => this.hideLoading());
            },
            { immediate: true }
        );
        
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivitys"])
    }
};
</script>

<template>
<div class="container py-4 py-md-5">
    {{ sort }}
    <div class="row align-items-center mb-2">
        <h5 class="col fw-bold fs-4 mb-0 text-primary">為您精選</h5>
        <div class="col-auto btn-group ms-auto">
            <VueMultiselect v-model="selected" :options="sortOptions" label="label" track-by="label" :searchable="false" />
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 gy-4">
        <HorizontalActivityCard :activity="adActivity" v-for="adActivity in adActivitys" :key="adActivity.id" />
    </div>
    <div class="border-bottom border-lightPrimary opacity-25 my-4"></div>
    <div class="row row-cols-1 row-cols-md-2 gy-4">
        <HorizontalActivityCard :activity="activity" v-for="activity in activitys" :key="activity.id" />
    </div>
</div>
</template>

<style lang="scss"></style>
