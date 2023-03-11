<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
</script>

<script>
import * as bootstrap from "bootstrap";
import { mapActions } from "pinia";
import MemberStore from '../../stores/MemberStore.js';

export default {
    data() {
        return {
            modal: null,
            isLoading: false
        }
    },
    props: {
        activity: {
            type: Object,
            required: true
        }
    },
    expose: ["openModal"],
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal, {
            keyboard: false,
            backdrop:  "static"
        });
    },
    methods: {
        ...mapActions(MemberStore, ["delActivity"]),
        openModal() {
            this.modal.show();
        },
        onSubmit() {
            this.isLoading = true;
            const { id } = this.activity;
            this.delActivity(id)
            .then(success => {
                this.modal.hide();
                this.isLoading = false;
            });
        }
    },
};
</script>

<template>
    <div class="modal fade" ref="modal" aria-labelledby="commentModalLabel"  aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                {{ activity.id }}
                <h5 class="modal-title">刪除揪團活動</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" :disabled="isLoading"></button>
            </div>
            <div class="modal-body">
                您確認要永久刪除此揪團活動，刪除後將無法復原？
                <ul class="list-unstyled lh-sm mb-0">
                    <li class="mt-2">
                        <small class="opacity-75">活動名稱</small>
                        <h1 class="fw-bold fs-5 text-danger">{{ activity?.title }}</h1>
                    </li>
                    <li class="mt-2">
                        <small class="opacity-75">活動地點</small>
                        <span class="d-block">{{ activity.location?.name }}</span>
                    </li>
                    <li class="mt-2">
                        <small class="opacity-75">活動日期</small>
                        <span class="d-block font-barlow">{{ `${dateFormat(activity.startDate)} ~ ${dateFormat(activity.endDate)}` }}</span>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-lightPrimary rounded-0" data-bs-dismiss="modal" :disabled="isLoading">取消</button>
                <button type="button" class="btn btn-danger btn-custom-rectangle" :disabled="isLoading" @click="onSubmit">
                    <span class="spinner-border spinner-border-sm" role="status" v-if="isLoading"></span>
                    刪除
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>