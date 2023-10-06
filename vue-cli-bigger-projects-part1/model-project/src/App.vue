<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name" class="input-field" placeholder="Enter your name" />
  <button @click="handleClick" class="btn">Click Me</button>
  <Model/>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Model from './components/Model.vue'

export default {
  name: 'App',
  data (){
    return{
      "title": "My First Vue App  :)",
    }
  },
  methods:{
    handleClick(){
// console.log(this.$refs.name)
// this.$refs.name.focus();
// this.$refs.name.classList.add("active")
 const nameInput = this.$refs.name;
nameInput.classList.add("active");
nameInput.focus();
alert("hello "+nameInput.value);
    }
  }
,
  components: {
    Model
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
h1{
  font-size: 24px;
  color: #007BFF;
}
.input-field {
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field.active {
  border-color: #007BFF;
}

.btn {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
