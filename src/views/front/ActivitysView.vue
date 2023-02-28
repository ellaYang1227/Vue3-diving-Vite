<script>
import VueMultiselect from 'vue-multiselect';
import { mapActions, mapState } from "pinia";
import ActivityStore from "../../stores/ActivityStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import OtherStore from "../../stores/OtherStore.js";
import { getRandom } from "../../data/utilitieFunctions.js";
import HorizontalActivityCard from "../../components/HorizontalActivityCard.vue";

export default {
    data() {
        return {
            activitys: [],
            initAdActivitys: [],
            adActivitys: [],
            selectedSort: null,
            sortOptions: [{
                label: "更新時間",
                value: "updateDate"
            },{
                label: "出發時間",
                value: "startDate"
            },{
                label: "評價分數",
                value: "score"
            },{
                label: "報名人數",
                value: "orderTotal"
            }]
        }
    },
    inject: ["frontLayoutData"],
    computed: {
        ...mapState(OtherStore, ["comments"]),
    },
    watch: {
        selectedSort: {
            handler(val, oldVal) {
                if(val) {
                    const { value } = val;
                    this.activitys.sort((a,b) => {
                        if(value === 'startDate'){
                            return a[value] > b[value] ? 1 : -1;
                        }else if(value === 'orderTotal'){
                            return a.orders.length > b.orders.length ? -1 : 1;
                        }else{
                            return a[value] > b[value] ? -1 : 1;
                        }
                    });

                    this.adActivitys = getRandom(this.initAdActivitys, 2);
                }
            }
            
        }
    },
    components: {
        VueMultiselect,
        HorizontalActivityCard
    },
    created() {
        this.$watch(
            () => this.$route.query,
            () => { 
                this.fetchData();
            },
            { immediate: true }
        );
        
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivitys", "getAdActivitys"]),
        ...mapActions(OtherStore, ["getComments", "setScore"]),
        fetchData(){
            this.selectedSort = null;
            const APIs = [this.getActivitys(this.$route.query)];

            if(!this.initAdActivitys.length){
                APIs.push(this.getAdActivitys());
                APIs.push(this.getComments())
            }

            Promise.all(APIs).then(resArr => {
                this.activitys = this.setScore(resArr[0]);

                if(!this.initAdActivitys.length){
                    this.initAdActivitys = this.setScore(resArr[1]);
                }
                
                this.selectedSort = this.sortOptions[0];
                this.hideLoading();
            });
        }
    }
};
</script>

<template>
<div class="container py-4 py-md-5">
    <div class="row align-items-center mb-2">
        <h5 class="col fw-bold fs-4 mb-0 text-primary">為您精選</h5>
        <div class="col-auto btn-group ms-auto">
            <VueMultiselect v-model="selectedSort" :options="sortOptions" label="label" track-by="label" :searchable="false" />
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 gy-4">
        <HorizontalActivityCard :activity="adActivity" v-for="adActivity in adActivitys" :key="adActivity.id" />
    </div>
    <div class="border-bottom border-lightPrimary opacity-25 my-4"></div>
    <div class="row row-cols-1 row-cols-md-2 gy-4" v-if="activitys.length">
        <HorizontalActivityCard :activity="activity" v-for="activity in activitys" :key="activity.id" />
        
    </div>
    <div v-else class="text-center fs-5 opacity-75">找不到符合條件的活動，試試看其他搜尋條件吧</div>
</div>
</template>

<style lang="scss"></style>
