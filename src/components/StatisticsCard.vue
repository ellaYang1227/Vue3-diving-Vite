<script setup>
</script>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        imgName: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="row row-cols-2 g-2">
                <div class="col"><img :src="imgName" :alt="title" /></div>
                <div class="col">{{ value }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/bootstrap-custom-variables";
</style>
