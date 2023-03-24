<script>
const { VITE_COMPANY_NAME } = import.meta.env;

export default {
  data() {
    return {
      VITE_COMPANY_NAME
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    enTitle: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="container py-4 py-md-5">
    <div class="row justify-content-center">
      <div class="col-md-11 col-lg-10" :class="enTitle === 'signup' ? 'col-xxl-8' : 'col-xxl-10'">
        <div class="form-card card">
          <div class="form-img-box position-relative d-flex justify-content-center">
            <img
              :src="img"
              class="form-img card-img-top border border-card-border-width login-img img-cover shadow"
              :alt="`${VITE_COMPANY_NAME}-${title}`"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-end align-items-end opacity-80 text-shadow">
              <h5 class="card-title fw-bold fs-4 mb-0">{{ title }}</h5>
              <span class="font-barlow text-uppercase fw-normal ms-1">{{ enTitle }}</span>
            </div>
          </div>
          <div class="card-body pt-4 pt-md-5">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
.form-card {
  margin-top: $card-spacer-x;

  .form-img-box {
    height: 180px;

    @media (max-width: 375px) {
      height: 150px;
    }

    .card-img-overlay {
      margin-left: $card-spacer-x;
      margin-right: $card-spacer-x;
    }

    .form-img {
      @media (min-width: 768px) {
        position: absolute;
        height: calc(100% + $card-spacer-x * 1);
      }

      width: calc(100% - $card-spacer-x * 2);
      margin-top: -$card-spacer-x;
    }
  }
}
</style>
