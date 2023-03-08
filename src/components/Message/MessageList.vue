<script>
import { mapActions, mapState } from "pinia";
import MessageStore from "../../stores/MessageStore.js";
import LoadingStore from "../../stores/LoadingStore.js";
import AuthStore from "../../stores/AuthStore.js";
import MessageCard from "./MessageCard.vue";
import MessageInput from "./MessageInput.vue";

export default {
    data() {
        return {
            msgForm: "",
            returnUrl: ""
        }
    },
    props: {
        activityId: {
            type: String,
            required: true
        }
    },
    components: {
        MessageCard,
        MessageInput
    },
    computed: {
        ...mapState(MessageStore, ["messages"]),
        ...mapState(AuthStore, ["user"])
    },
    watch: {
        activityId() {
            this.getMessagesfullApi();
        }
    },
    mounted() {
        this.returnUrl = this.$route.path;
        this.getMessagesfullApi();
    },
    methods: {
        ...mapActions(MessageStore, ["updateMessages", "getMessagesfull"]),
        ...mapActions(LoadingStore, ["showLoading"]),
        getMessagesfullApi() {
            this.showLoading();
            this.getMessagesfull(this.activityId);
        },
        submitMsg() {
            this.updateMessages(this.activityId, this.msgForm);
            this.msgForm = "";
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-header bg-primary bg-opacity-10 py-3 border-0 d-flex justify-content-between align-items-center">
            <h5 class="flex-shrink-0 me-4 mb-0 fw-bold">留言</h5>
            <MessageInput v-model:msgForm="msgForm" @update:msgForm="submitMsg" v-if="user" />
            <router-link :to="{ path: '/login', query: { returnUrl } }" v-else>請先登入</router-link>
        </div>
        <div class="card-body py-1 overflow-auto" style="max-height: 60vh">
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent px-0" v-for="message in messages" :key="message.id">
                    <MessageCard :message="message" />
                </li>
                <li class="list-group-item bg-transparent px-0 opacity-75" v-if="!messages.length">目前沒有留言</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss"></style>