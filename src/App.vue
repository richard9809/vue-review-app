<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useReviewsStore } from "@/stores/reviews";

const store = useReviewsStore();
onMounted(() => {
  store.fetchReviews();
});
</script>

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>
