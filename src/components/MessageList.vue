<script>
import { mapActions } from "pinia";
import LoadingStore from "../stores/LoadingStore.js";
import MessageStore from "../stores/MessageStore.js";
import MessageCard from "./MessageCard.vue";

export default {
    data() {
        return {
            messages: []
        }
    },
    props: {
        activityId: {
            type: String,
            required: true
        }
    },
    watch: {
        activityId() {
            this.getMessagesApi();
        }
    },
    components: {
        MessageCard
    },
    mounted() {
        this.getMessagesApi();
    },
    methods: {
        ...mapActions(LoadingStore, ["hideLoading"]),
        ...mapActions(MessageStore, ["getMessages", "getMessageReplys"]),
        getMessagesApi() {
            this.getMessages(this.activityId).then(res => {
                const apiIds = res.reduce((accumulator, currentValue) => {
                    const { id } = currentValue;
                    accumulator.push(this.getMessageReplys(id));
                    return accumulator;
                }, []);

                Promise.all(apiIds).then(resArr => {
                    this.messages = res.map((message, index) => {
                        return {
                            ...message,
                            messageReplys: resArr[index]
                        };
                    });
                });

                this.hideLoading();
            });
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-header bg-primary bg-opacity-10 py-3 border-0 d-flex align-items-center">
            <h5 class="flex-shrink-0 me-4 mb-0 fw-bold">留言</h5>
            <input type="text" class="form-control">
        </div>
        <div class="card-body py-1 overflow-auto" style="max-height: 50vh">
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