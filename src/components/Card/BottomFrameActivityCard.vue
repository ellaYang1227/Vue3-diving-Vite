<script>
import dateFormat from "@/handle-formats/dateFormat.js";
import { getMainImg } from "@/data/utilitieFunctions.js";
import propsValidator from "@/data/propsValidator.js";
import UserMugShot from "@/components/UserMugShot.vue";

export default {
  data() {
    return {
      dateFormat,
      getMainImg
    };
  },
  props: {
    activity: {
      type: Object,
      required: true,
      validator(value) {
        const verifyKeys = ["id", "title", "imgs", "location", "startDate", "endDate", "user"];

        return propsValidator("BottomFrameActivityCard", value, verifyKeys);
      }
    }
  },
  components: {
    UserMugShot
  }
};
</script>

<template>
  <RouterLink :to="`/activity/${activity.id}`" class="col text-decoration-none card-hover">
    <div class="bottom-frame-card">
      <div class="img-frame mb-3">
        <div class="outer-border custom-rectangle border border-card-border-width"></div>
        <div class="card custom-rectangle">
          <img
            :src="getMainImg(activity.imgs).img"
            class="card-img custom-rectangle img-cover"
            :alt="`[${activity.location.name}]${activity.title}`"
          />
          <div class="img-mask"></div>
          <div class="shadow py-1 card-img-overlay d-flex align-items-center text-body bg-darkPrimary bg-opacity-80">
            <UserMugShot :name="activity.user.name" :img="activity.user.img" :score="activity.score" :isShowRating="false" />
          </div>
        </div>
      </div>
      <h2 class="h5 mb-1 text-primary text-truncate-row-2 fw-bold">{{ activity.title }}</h2>
      <ul class="list-unstyled text-body lh-sm">
        <li>{{ activity.location.name }}</li>
        <li class="font-barlow">{{ dateFormat(activity.startDate) }} ~ {{ dateFormat(activity.endDate) }}</li>
      </ul>
    </div>
  </RouterLink>
</template>

<style lang="scss">
@import "../../assets/styles/bootstrap-custom-variables";
$img-frame-card-Spacing: 1rem;

.bottom-frame-card {
  margin-left: $img-frame-card-Spacing;
  margin-top: $img-frame-card-Spacing;

  .img-frame {
    position: relative;

    .outer-border {
      background-color: $bg-primary-10;
      position: absolute;
      top: -$img-frame-card-Spacing;
      left: -$img-frame-card-Spacing;
      width: 100%;
      height: 100%;
    }

    .card-img {
      height: 200px;

      @media (min-width: 576px) and (max-width: 767px) {
        height: 150px;
      }

      @media (min-width: 1200px) {
        height: 250px;
      }
    }
  }

  .card-img-overlay {
    width: 180px;
    height: 27%;
    top: unset;
    bottom: 0;
  }
}
</style>
