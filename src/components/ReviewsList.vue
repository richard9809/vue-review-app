<template>
  <div>
    <p>No Reviews Yet</p>
    <div class="reviewList">
      <ReviewItem
        v-for="(item, i) in store.reviewsContent"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import ReviewItem from "./ReviewItem.vue";
import { useReviewsStore } from "@/stores/reviews";

const store = useReviewsStore();
</script>
