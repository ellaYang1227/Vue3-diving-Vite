<script setup>
import dateFormat from "../handle-formats/dateFormat.js";
import propsValidator from "../data/propsValidator.js";
</script>

<script>
import * as bootstrap from "bootstrap";
import { mapActions, mapState } from "pinia";
import LoadingStore from "../stores/LoadingStore.js";
import AuthStore from "../stores/AuthStore.js";
import MessageStore from "../stores/MessageStore.js";
import UserMugShot from "./UserMugShot.vue";
import MessageInput from "./MessageInput.vue";

export default {
    data() {
        return {
            msgForm: "",
            inputAction: "",
            collapseInput: null
        }
    },
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
        UserMugShot,
        MessageInput
    },
    computed: {
        ...mapState(AuthStore, ["user"]),
        ...mapState(LoadingStore, ["isLoadingBtn"])
    },
    mounted() {
        this.setInitialMsgForm();
        this.collapseInput = new bootstrap.Collapse(this.$refs.collapseInput, {
            toggle: false
        });
    },
    methods: {
        ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
        ...mapActions(MessageStore, ["updateMessages", "updateMessageReplys"]),
        setInitialMsgForm() {
            this.msgForm = this.message.content;
        },
        setInputAction(action) {
            this.inputAction = this.inputAction !== action ? action : "";
            if(action === "reply") { 
                this.collapseInput.toggle();
                this.msgForm = "";
            }
        },
        // submitMsg(method) {
        //     if(this.msgForm) {
        //         this.showLoading("btn");
        //         this.isMsgFormErr = false;

        //         console.log(this.msgForm);
        //         if(method === 'edit') {
        //             console.log('修改', this.message)
        //         }else if(method === 'reply') {
        //             console.log('回覆', this.message)
        //         }
        //     }
            
        // },
        submitMsg() {
            console.log(this.msgForm)
            console.log(this.inputAction, this.message)
            const { id, activityId } = this.message;
            if(this.inputAction === "edit") {
                this.updateMessages(activityId, this.msgForm, id)
                .then(success => {
                    console.log(success)
                    this.inputAction = "";
                })
                .catch(err => { 
                    console.log(err)
                    this.inputAction = "";
                    this.setInitialMsgForm();
                });
            } else {

            }
            
            
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
            <button type="button" class="btn btn-link btn-sm py-0 lh-1" @click="setInputAction('edit')" v-if="user.id == message.userId">修改</button>
            <div class="vr" v-if="user.id == message.userId && (user.id == organiserId || user.id == message.userId)"></div>
            <button type="button" class="btn btn-link btn-sm py-0 lh-1 pe-0" @click="setInputAction('reply')" v-if="user.id == organiserId || user.id == message.userId">回覆</button>
        </div>
        <p class="mb-0 col-12 mt-2">
            <template v-if="inputAction !== 'edit'">{{ message.content }}</template>
            <MessageInput v-model:msgForm="msgForm" @update:msgForm="submitMsg" v-if="inputAction === 'edit'" />
        </p>
        <div class="col-12 mt-2 collapse" ref="collapseInput">
            <MessageInput v-model:msgForm="msgForm" @update:msgForm="submitMsg" />
        </div>
    </div>
</template>

<style lang="scss"></style>