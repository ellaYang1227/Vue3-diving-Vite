<script>
import * as bootstrap from "bootstrap";
import { mapActions } from "pinia";
import OrderStore from "@/stores/OrderStore.js";
import dateFormat from "@/handle-formats/dateFormat.js";
import { loadingImg } from "@/data/imagePaths.js";
import UserMugShot from "@/components/UserMugShot.vue";

export default {
  data() {
    return {
      dateFormat,
      loadingImg,
      modal: null,
      orders: [],
      isLoading: true
    };
  },
  props: ["activityId"],
  expose: ["openModal"],
  watch: {
    activityId() {
      this.fetchData();
    }
  },
  components: {
    UserMugShot
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false
    });

    this.fetchData();
  },
  methods: {
    ...mapActions(OrderStore, ["getSearchOrdersForActivityId"]),
    fetchData() {
      this.orders = [];
      if (this.activityId) {
        this.getSearchOrdersForActivityId(this.activityId).then(res => {
          this.orders = res;
          this.isLoading = false;
        });
      }
    },
    openModal() {
      this.modal.show();
    }
  }
};
</script>

<template>
  <div class="modal fade" ref="modal" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">報名總覽</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-0">
          <div v-if="isLoading" class="py-3">
            <VueLoading v-model:active="isLoading" background-color="#083d63" :opacity="0.85" :is-full-page="false" class="position-relative">
              <img :src="loadingImg" class="loading-img" style="width: 100px" alt="loading" />
              <p class="font-barlow text-uppercase mb-0 text-center opacity-80 ps-3">loading...</p>
            </VueLoading>
          </div>
          <ul class="list-group list-group-flush" v-else>
            <li class="list-group-item px-0" :class="{ 'pt-0': index }" v-for="(order, index) in orders" :key="order.id">
              <div class="bg-lightPrimary bg-opacity-10 p-2">
                <div class="row align-items-center">
                  <div class="col">
                    <UserMugShot :img="order.user?.img" :name="order.user?.name" :widthSize="30" />
                  </div>
                  <div class="col-auto font-barlow">
                    {{ dateFormat(order.updateDate, ["date", "time"]) }}
                  </div>
                </div>
              </div>
              <ul class="list-unstyled opacity-80 mt-2 px-2">
                <li>證照等級<strong class="ms-2">AOW</strong></li>
                <li>需有高氧證照<strong class="ms-2">是</strong></li>
                <li>潛水支數<strong class="ms-2">25+</strong></li>
              </ul>
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
