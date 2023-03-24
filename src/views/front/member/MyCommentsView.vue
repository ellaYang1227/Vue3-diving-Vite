<script>
import { mapState } from "pinia";
import AuthStore from "@/stores/AuthStore.js";
import CommentList from "@/components/Comment/CommentList.vue";

export default {
  computed: {
    ...mapState(AuthStore, ["user"])
  },
  components: {
    CommentList
  }
};
</script>

<template>
  <CommentList :user-id="user.id.toString()" :user-name="user.name" :is-member-style="true" v-if="user?.id" />
</template>

<style lang="scss"></style>
