<template>
  <div class="product-list">
    <h1 class="product-list-heading">All Products</h1>
    <div v-if="loading" class="loading-message">
      <p>Loading products...</p>
    </div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
          <div class="product-card">
            <img class="product-thumbnail" :src="product.thumbnail" alt="Product Thumbnail" />
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-description">{{ product.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  mounted() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        this.loading = false;
      })
      .catch((err) => console.error(err.message));
  },
};
</script>

<style scoped>
.product-list-heading {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-message {
  text-align: center;
  width: 100%;
  margin-top: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
  width: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-thumbnail {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-description {
  font-size: 1rem;
  color: #666;
}
</style>
