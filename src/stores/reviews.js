import { defineStore } from "pinia";

export const useReviewsStore = defineStore("reviews", {
  state: () => ({
    reviews: [],
    editedData: {
      editable: false,
      item: null,
    },
  }),
  getters: {
    averageRating(state) {
      let temp =
        state.reviews.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0) / state.reviews.length;

      temp = temp.toFixed(1).replace(/[.,]0$/, "");
      return temp;
    },
    reviewsCount() {
      return this.reviews.length;
    },
    reviewsContent() {
      return this.reviews;
    },
  },
  actions: {
    async addReview(review) {
      const response = await fetch(`http://localhost:5001/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      const newReview = await response.json();
      console.log(newReview);
      this.reviews = [newReview, ...this.reviews];
    },
    async fetchReviews() {
      try {
        const reviews = await fetch(
          `http://localhost:5001/reviews?_sort=id&_order=desc`
        );
        const data = await reviews.json();
        this.reviews = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
