<script>
import { mapActions, mapState } from "pinia";
import ActivityStore from "../../stores/ActivityStore.js";
import LoadingStore from "../../stores/LoadingStore.js";

export default {
    data() {
        return {
        }
    },
    inject: ["frontLayoutData"],
    computed: {
        ...mapState(ActivityStore, ["search", "sort", "activitys"])
    },
    created() {
        this.$watch(
            () => this.$route.query,
            () => { 
                console.log(this.$route)
                this.search.locationId = this.$route.query.locationId;
                console.log(this.search)
                this.getActivitys()
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
{{ activitys }}
</template>

<style lang="scss"></style>
