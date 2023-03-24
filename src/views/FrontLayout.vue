<script>
import { mapActions, mapState } from "pinia";
import OptionStore from "@/stores/OptionStore.js";
import MemberStore from "@/stores/MemberStore.js";
import AuthStore from "@/stores/AuthStore.js";
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SearchActivityBar from "@/components/Search/SearchActivityBar.vue";

export default {
  data() {
    return {
      isVerticalMiddle: false,
      showSearchBar: true,
      isMainOverflowHidden: false
    };
  },
  provide() {
    return {
      frontLayoutData: this
    };
  },
  computed: {
    ...mapState(OptionStore, ["locations", "tags"]),
    ...mapState(AuthStore, ["user"])
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
        this.isVerticalMiddle = false;
        this.showSearchBar = true;
        this.isMainOverflowHidden = false;
      },
      { immediate: true }
    );

    const apis = [this.getLocations(), this.getTags()];

    if (this.user?.id) {
      apis.push(this.getMyOrders(3));
    }
    Promise.all(apis);
  },
  methods: {
    ...mapActions(OptionStore, ["getLocations", "getTags"]),
    ...mapActions(MemberStore, ["getMyOrders"])
  }
};
</script>

<template>
  <div class="min-vh-100 d-flex flex-column" :class="{ 'overflow-hidden': isMainOverflowHidden }">
    <HeaderNavbar :show-search-bar="showSearchBar" />
    <div class="flex-fill fixed-margin-top-headerHeight" :class="{ 'd-flex flex-column justify-content-center': isVerticalMiddle }">
      <SearchActivityBar v-if="showSearchBar" />
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss"></style>
