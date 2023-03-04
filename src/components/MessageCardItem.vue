<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
import propsValidator from "../data/propsValidator.js";
</script>

<script>
import { mapState } from "pinia";
import AuthStore from "../stores/AuthStore.js";
import UserMugShot from "./UserMugShot.vue";

export default {
    props: {
        message: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["user", "updateDate", "content"];
                return propsValidator(value, verifyKeys);
            }
        },
        organiserId: {
            type: String,
            required: true
        }
    },
    components: {
        UserMugShot
    },
    computed: {
        ...mapState(AuthStore, ["user"]),
    },
    methods: {
        editMessage() {
            console.log('修改', this.message)
        },
        addMessageReply() {
            console.log('回覆', this.message)
        }
    }
};
</script>

<template>
    <div class="row justify-content-between align-items-end">
        <div class="col-7 d-flex align-items-center">
            <UserMugShot :img="message.user?.img" />
            <ul class="list-unstyled mb-0 lh-sm">
                <li class="text-truncate"><span v-if="message.userId == organiserId">主辦人‧</span>{{ message.user?.name }}</li>
                <li><small class="opacity-80 font-barlow">{{ dateFormat(message.updateDate, ["date", "time"]) }}</small></li>
            </ul>
        </div>
        <div class="col-auto mt-2 mt-sm-0 hstack align-self-start opacity-80">
            <button type="button" class="btn btn-link btn-sm py-0 lh-1" @click="editMessage" v-if="user.id == message.userId">修改</button>
            <div class="vr" v-if="user.id == message.userId && user.id == organiserId"></div>
            <button type="button" class="btn btn-link btn-sm py-0 lh-1 pe-0" @click="addMessageReply" v-if="user.id == organiserId">回覆</button>
        </div>
        <p class="mb-0 col-12 mt-2">{{ message.content }}</p>
    </div>
</template>

<style lang="scss"></style>