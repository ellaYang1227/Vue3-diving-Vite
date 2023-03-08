<script setup>
import dateFormat from "../../handle-formats/dateFormat.js";
</script>

<script>
import * as bootstrap from "bootstrap";

export default {
    data() {
        return {
            commentModal: null
        }
    },
    props: {
        activity: {
            type: Object,
            required: true,
            validator(value) {
                const verifyKeys = ["id", "title", "imgs", "location", "startDate", "endDate", "user"];

                return propsValidator(value, verifyKeys);
            }
        }
    },
    components: {
    },
    mounted() {
        this.commentModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    },
    methods: {
        switchModal(method) {
            console.log(method)
        }
    },
};
</script>

<template>
    
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
