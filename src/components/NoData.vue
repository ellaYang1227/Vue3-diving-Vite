<script>
export default {
    props: {
        text: {
            type: String,
            required: false,
            default: "找不到符合條件的資料"
        }
    }
};
</script>

<template>
    <p class="text-center opacity-75 mb-0">{{ text }}</p>
</template>

<style lang="scss"></style>
