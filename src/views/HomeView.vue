<template>
  <div class="home">
    <div class="container">
      <!-- Reviews Form -->
      <ReviewsForm />
      <!-- Reviews Stats -->
      <ReviewStats />
      <!-- Reviews List -->
      <ReviewsList />
    </div>
  </div>
</template>

<script setup>
import ReviewsForm from '@/components/ReviewsForm.vue';
import ReviewStats from '@/components/ReviewStats.vue';
import ReviewsList from '@/components/ReviewsList.vue'
</script>
