<template>
  <Card>
    <form @submit.prevent="handleSubmit">
      <h2>How would you rate your service with us?</h2>
      <!-- Rating Component -->
      <RatingSelect :rating="rating" @setRating="setRating"></RatingSelect>
      <div class="input-group">
        <input type="text" placeholder="Write a review" v-model="text" />
        <button type="submit" class="btn btn-primary" :disabled="btnDisabled">
          Send
        </button>
      </div>
      <div class="message">Text must be at least 10 characters</div>
    </form>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import Card from "./shared/Card.vue";
import RatingSelect from "./RatingSelect.vue";
import { useReviewsStore } from "@/stores/reviews";

const store = useReviewsStore();
const text = ref("");
const btnDisabled = ref(false);
const message = ref("");
const rating = ref(8);

const handleSubmit = () => {
  const newReview = {
    text: text.value,
    rating: rating.value,
  };
  store.addReview(newReview);
};

const setRating = (val) => {
  rating.value = val;
  console.log(val);
};
</script>
