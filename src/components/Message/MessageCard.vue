<script setup>
import propsValidator from "../../data/propsValidator.js";
</script>

<script>
import MessageCardItem from "./MessageCardItem.vue";

export default {
    props: {
        message: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["messageReplys", "activity"];
                return propsValidator(value, verifyKeys);
            }
        }
    },
    components: {
        MessageCardItem
    },
};
</script>

<template>
    <MessageCardItem :message="message" :message-id="message.id" :organiser-id="message.activity.userId" :activity-id="message.activity.id" />
    <ul class="list-group list-group-flush list-group-reply border-top" v-if="message.messageReplys.length">
        <li class="list-group-item bg-transparent ps-3 pe-0" v-for="messageReply in message.messageReplys" :key="messageReply.id">
            <MessageCardItem :message="messageReply" :message-id="message.id" :messageReply-id="messageReply.id" :organiser-id="message.activity.userId" :activity-id="message.activity.id" />
        </li>
    </ul>
</template>

<style lang="scss">
.list-group-reply {
    border-color: var(--bs-list-group-border-color) !important;
    margin-top: var(--bs-list-group-item-padding-y);

    .list-group-item {
        &:last-child {
            padding-bottom: 0;
        }
    }
}
</style>