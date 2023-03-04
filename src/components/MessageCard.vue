<script setup>
import propsValidator from "../data/propsValidator.js";
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
    <MessageCardItem :message="message" :organiser-id="message.activity.userId" />
    <ul class="list-group list-group-flush list-group-reply border-top" v-if="message.messageReplys.length">
        <li class="list-group-item bg-transparent ps-3 pe-0" v-for="messageReply in message.messageReplys" :key="messageReply.id">
            <MessageCardItem :message="messageReply" :organiser-id="message.activity.userId" />
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