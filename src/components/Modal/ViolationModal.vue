<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
import { loadingImg } from "../../data/imagePaths.js";
</script>

<script>
import * as bootstrap from "bootstrap";
import { mapActions } from "pinia";
import MemberStore from '../../stores/MemberStore.js';

export default {
    data() {
        return {
            modal: null,
            violation: {},
            isLoading: true
        }
    },
    props: ["violationId"],
    expose: ["openModal"],
    watch: {
        violationId() {
            this.fetchData();
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal, {
            keyboard: false
        });

        this.fetchData();
    },
    methods: {
        ...mapActions(MemberStore, ["getViolation"]),
        fetchData() {
            this.violation = {};
            if(this.violationId) {
                this.getViolation(this.violationId).then(res => {
                    this.violation = res;
                    this.isLoading = false;
                });
            }
            
        },
        openModal() {
            this.modal.show();
        }
    },
};
</script>

<template>
    <div class="modal fade" ref="modal" aria-labelledby="commentModalLabel"  aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">違規說明</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div v-if="isLoading" class="py-3">
                    <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.85" :is-full-page="false" class="position-relative">
                        <img :src="loadingImg" class="loading-img" style="width: 100px" />
                        <p class="font-barlow text-uppercase mb-0 text-center opacity-80 ps-3">loading...</p>
                    </VueLoading>
                </div>
                <ul class="list-unstyled lh-sm mb-0" v-else>
                    <li>
                        <small class="opacity-75">活動名稱</small>
                        <h1 class="fs-6">{{ violation.activity?.title }}</h1>
                    </li>
                    <li class="mt-2">
                        <small class="opacity-75">違規原因</small>
                        <h1 class="fw-bold fs-5 text-danger">{{ violation.reason }}</h1>
                    </li>
                    <li class="mt-2">
                        <small class="opacity-75">懲處內容</small>
                        <span class="d-block text-danger">該揪團活動系統強迫下架</span>
                    </li>
                    <li class="mt-2">
                        <small class="opacity-75">舉發時間</small>
                        <span class="d-block font-barlow">{{ dateFormat(violation.creationDate) }}</span>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-lightPrimary rounded-0" data-bs-dismiss="modal">關閉</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>