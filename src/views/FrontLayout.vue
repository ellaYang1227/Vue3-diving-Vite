<script>
import { mapActions, mapState } from "pinia";
import OptionStore from "../stores/OptionStore.js";
import OtherStore from "../stores/OtherStore.js";
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SearchActivityBar from "../components/SearchActivityBar.vue";
const optionStore = OptionStore();

export default {
    data() {
        return {
            isVerticalMiddle: false,
            showSearchBar: true,
            isMainOverflowHidden: false,
        };
    },
    provide() {
        return {
            frontLayoutData: this
        };
    },
    computed: {
        ...mapState(OptionStore, ["locations", "tags"])
    },
    components: {
        HeaderNavbar,
        FooterComponent,
        SearchActivityBar
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                console.log('front created')
                this.isVerticalMiddle = false;
                this.showSearchBar = true;
                this.isMainOverflowHidden = false;
            },
            { immediate: true }
        );

        Promise.all([
            this.getLocations(),
            this.getTags(),
            this.getComments()
        ]).then(resArr => {
            optionStore.$patch(state => {
                state.locations = resArr[0];
                state.tags = resArr[1];
            });
        });
    },
    methods: {
        ...mapActions(OptionStore, ["getLocations", "getTags"]),
        ...mapActions(OtherStore, ["getComments"])
    }
};
</script>

<template>
    <div class="min-vh-100 d-flex flex-column" :class="{ 'overflow-hidden': isMainOverflowHidden }">
        <HeaderNavbar :show-search-bar="showSearchBar" />
        <div class="flex-fill fixed-margin-top-headerHeight" :class="{ 'd-flex flex-column justify-content-center': isVerticalMiddle }">
            <SearchActivityBar v-if="showSearchBar" />
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<style lang="scss"></style>
