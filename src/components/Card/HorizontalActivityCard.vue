<script>
import dateFormat from "@/handle-formats/dateFormat.js";
import decimalFormat from "@/handle-formats/decimalFormat.js";
import { statusBtnTextFormat } from "@/handle-formats/statusTextFormat.js";
import { getMainImg } from "@/data/utilitieFunctions.js";
import propsValidator from "@/data/propsValidator.js";
import UserMugShot from "@/components/UserMugShot.vue";

export default {
  data() {
    return {
      dateFormat,
      decimalFormat,
      statusBtnTextFormat,
      getMainImg
    };
  },
  props: {
    activity: {
      type: Object,
      required: true,
      validator(value) {
        const verifyKeys = ["id", "title", "imgs", "location", "startDate", "endDate", "isNitrox", "cylinderTotalId", "user"];

        return propsValidator("HorizontalActivityCard", value, verifyKeys);
      }
    }
  },
  components: {
    UserMugShot
  }
};
</script>

<template>
  <RouterLink :to="`/activity/${activity.id}`" class="col text-decoration-none shadow-sm card-hover">
    <div class="card horizontal-card h-100">
      <div class="row g-0">
        <div class="col-sm-5 position-relative overflow-hidden">
          <img :src="getMainImg(activity.imgs).img" class="img-fluid img-cover" :alt="activity.title" />
          <div class="img-mask"></div>
          <div class="position-absolute top-0 end-0 p-1 bg-darkPrimary bg-opacity-80 fs-7 text-body">{{ activity.location.name }}</div>
        </div>
        <div class="col-sm-7">
          <div class="card-body h-100 d-flex flex-column">
            <small class="font-barlow">{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</small>
            <h2 class="card-title h5 mb-0 text-primary text-truncate-row-2 fw-bold">{{ activity.title }}</h2>
            <p class="card-text text-truncate-row-2 white-space-pre-wrap opacity-75 mb-0" v-if="activity.features">{{ activity.features }}</p>
            <div class="row align-items-center fw-bold mt-2 mt-sm-auto">
              <div class="col text-truncate d-flex align-items-center">
                <UserMugShot :width-size="30" :name="activity.user.name" :img="activity.user.img" />
                <small class="ms-1 font-barlow fw-normal" v-if="activity.score">{{ `(${decimalFormat(activity.score, 1)})` }}</small>
              </div>
              <ul class="col-auto font-barlow list-inline mb-0">
                <li class="list-inline-item">{{ activity.certificateLevel.name }}</li>
                <li class="list-inline-item" v-if="activity.isNitrox">高氧</li>
                <li class="list-inline-item" v-if="activity.cylinderTotalId">{{ activity.cylinderTotal.name }}</li>
              </ul>
            </div>
            <RouterLink
              :to="`/activity/${activity.id}`"
              class="btn btn-custom-rectangle mt-3"
              role="button"
              :class="activity.isOrderPlaced || activity.orderStatus !== 2 ? 'btn-lightPrimary opacity-40' : 'btn-primary'"
            >
              <template v-if="activity.isOrderPlaced">已報名</template>
              <template v-else>{{ statusBtnTextFormat(activity.activityStatus, activity.orderStatus).replace("立即報名", "揪團詳情") }}</template>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";
$img-frame-card-Spacing: 1rem;

.horizontal-card {
  .img-fluid {
    height: 180px;

    @media (min-width: 576px) {
      height: 250px;
    }

    @media (min-width: 992px) {
      height: 280px;
    }
  }
}
</style>
