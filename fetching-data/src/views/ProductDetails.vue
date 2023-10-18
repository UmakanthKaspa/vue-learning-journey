<template>
  <div class="product-details">
    <button @click="redirect" class="action-button">Go to All Products</button>
    <button @click="back" class="action-button">Go Back</button>
    <button @click="forward" class="action-button">Go Forward</button>
  
    <h1 class="product-title">Product Details</h1>
    <div v-if="product">
      <div class="product-card">
        <img class="product-thumbnail" :src="product.thumbnail" alt="Product Thumbnail" />
        <p><strong>Title:</strong> {{ product.title }}</p>
        <p><strong>Description:</strong> {{ product.description }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/products/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      })
      .catch((err) => console.error(err));
  },
  methods:{
    redirect(){
      this.$router.push({ name: "home" }); // Change the route name to your home route name.
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.action-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.product-title {
  font-size: 1.5rem;
  margin: 20px 0;
}

.product-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.product-thumbnail {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.product-card p {
  font-size: 1.2rem;
  margin: 10px 0;
}
</style>
