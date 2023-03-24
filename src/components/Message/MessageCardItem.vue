<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import AuthStore from "@/stores/AuthStore.js";
import MessageStore from "@/stores/MessageStore.js";
import dateFormat from "@/handle-formats/dateFormat.js";
import propsValidator from "@/data/propsValidator.js";
import UserMugShot from "@/components/UserMugShot.vue";
import MessageInput from "./MessageInput.vue";

export default {
  data() {
    return {
      dateFormat,
      msgForm: "",
      inputAction: ""
    };
  },
  props: {
    message: {
      type: Object,
      required: true,
      validator(value) {
        const verifyKeys = ["user", "updateDate", "content"];
        return propsValidator("MessageCardItem", value, verifyKeys);
      }
    },
    activityId: {
      type: Number,
      required: true
    },
    organiserId: {
      type: String,
      required: true
    },
    messageId: {
      type: Number,
      required: true
    },
    messageReplyId: {
      type: Number,
      required: false
    }
  },
  components: {
    UserMugShot,
    MessageInput
  },
  computed: {
    ...mapState(AuthStore, ["user"]),
    ...mapState(LoadingStore, ["isLoadingBtn"]),
    showEditBtn() {
      return this.user?.id == this.message.userId;
    },
    showReplyBtn() {
      return !this.messageReplyId && (this.user?.id == this.organiserId || this.user?.id == this.message.userId);
    }
  },
  mounted() {
    this.setInitialMsgForm();
  },
  methods: {
    ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
    ...mapActions(MessageStore, ["updateMessages", "updateMessageReplys"]),
    setInitialMsgForm() {
      this.msgForm = this.message.content;
    },
    setInputAction(action) {
      this.inputAction = this.inputAction !== action ? action : "";

      if (action === "reply") {
        this.msgForm = "";
      } else if (action === "edit") {
        this.setInitialMsgForm();
      }
    },
    submitMsg() {
      if (this.inputAction === "edit") {
        if (!this.messageReplyId) {
          this.updateMessages(this.activityId, this.msgForm, this.messageId)
            .then(success => this.handleRes(success))
            .catch(err => this.handleRes(err));
        } else {
          this.updateMessageReplys(this.activityId, this.messageId, this.msgForm, this.messageReplyId)
            .then(success => this.handleRes(success))
            .catch(err => this.handleRes(err));
        }
      } else if (this.inputAction === "reply") {
        this.updateMessageReplys(this.activityId, this.messageId, this.msgForm)
          .then(success => this.handleRes(success))
          .catch(err => this.handleRes(err));
      }
    },
    handleRes(success) {
      this.inputAction = "";
      if (!success) {
        this.setInitialMsgForm();
      }
    }
  }
};
</script>

<template>
  <div class="row justify-content-between align-items-end">
    <div class="col-7 d-flex align-items-center">
      <UserMugShot :img="message.user?.img" :isShowName="false" />
      <ul class="list-unstyled mb-0 lh-sm ms-1">
        <li class="text-truncate"><span v-if="message.userId == organiserId">主辦人‧</span>{{ message.user?.name }}</li>
        <li>
          <small class="opacity-80 font-barlow">{{ dateFormat(message.updateDate, ["date", "time"]) }}</small>
        </li>
      </ul>
    </div>
    <div class="col-auto mt-2 mt-sm-0 hstack align-self-start opacity-80">
      <button type="button" class="btn btn-link btn-sm py-0 lh-1" @click="setInputAction('edit')" v-if="showEditBtn">修改</button>
      <div class="vr" v-if="showEditBtn && showReplyBtn"></div>
      <button type="button" class="btn btn-link btn-sm py-0 lh-1" @click="setInputAction('reply')" v-if="showReplyBtn">回覆</button>
    </div>
    <div class="mb-0 col-12 mt-2">
      <p class="mb-1" v-if="inputAction !== 'edit'">{{ message.content }}</p>
      <MessageInput v-model:msgForm="msgForm" @update:msgForm="submitMsg" v-if="inputAction" />
    </div>
  </div>
</template>

<style lang="scss"></style>
