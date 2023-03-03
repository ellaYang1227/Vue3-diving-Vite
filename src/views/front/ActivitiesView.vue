<script>
import VueMultiselect from 'vue-multiselect';
import { mapActions, mapState } from "pinia";
import ActivityStore from "../../stores/ActivityStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import CommentStore from "../../stores/CommentStore.js";
import { getRandom } from "../../data/utilitieFunctions.js";
import HorizontalActivityCard from "../../components/HorizontalActivityCard.vue";

export default {
    data() {
        return {
            activities: [],
            initAdActivities: [],
            adActivities: [],
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
    computed: {
        ...mapState(CommentStore, ["comments"]),
    },
    watch: {
        selectedSort: {
            handler(val, oldVal) {
                if(val) {
                    const { value } = val;
                    this.activities.sort((a,b) => {
                        if(value === 'startDate'){
                            return a[value] > b[value] ? 1 : -1;
                        }else if(value === 'orderTotal'){
                            return a.orders.length > b.orders.length ? -1 : 1;
                        }else{
                            return a[value] > b[value] ? -1 : 1;
                        }
                    });

                    this.adActivities = getRandom(this.initAdActivities, 2);
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
                const { path } =  this.$route;
                if(path.indexOf('/activities') > -1){ this.fetchData() }
            },
            { immediate: true }
        );
        
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(ActivityStore, ["getActivities", "getAdActivities"]),
        ...mapActions(CommentStore, ["setScore"]),
        fetchData(){
            this.selectedSort = null;
            const APIs = [this.getActivities(this.$route.query)];
            if(!this.initAdActivities.length){ APIs.push(this.getAdActivities()) }

            Promise.all(APIs).then(resArr => {
                this.activities = this.setScore(resArr[0]);

                if(!this.initAdActivities.length){
                    this.initAdActivities = this.setScore(resArr[1]);
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
        <h5 class="col fw-bold fs-4 mb-0 text-warning">為您精選</h5>
        <div class="col-auto btn-group ms-auto">
            <VueMultiselect v-model="selectedSort" :options="sortOptions" label="label" track-by="label" :searchable="false" />
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 gy-4">
        <HorizontalActivityCard :activity="adActivity" v-for="adActivity in adActivities" :key="adActivity.id" />
    </div>
    <div class="border-bottom opacity-30 my-4"></div>
    <div class="row row-cols-1 row-cols-md-2 gy-4" v-if="activities.length">
        <HorizontalActivityCard :activity="activity" v-for="activity in activities" :key="activity.id" />
        
    </div>
    <div v-else class="text-center fs-5 opacity-75">找不到符合條件的活動，試試看其他搜尋條件吧</div>
</div>
</template>

<style lang="scss"></style>
