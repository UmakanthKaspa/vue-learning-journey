<template>
  <div class="home">
    <p ref="p">my name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">age +1</button>
    <input type="text" v-model="name">

    <br>
    <h1>Refs</h1>
    <p>{{ninjaOne.name}}-{{ninjaOne.age}}</p>
    <button @click="updateNinjaOne" >update ninja one</button>
    <h1>Reactive</h1>
    <p>{{ninjaTwo.name}}-{{ninjaTwo.age}}-{{testnimja}}</p>
    <button @click="updateNinjaTwo" >update ninja one</button>






<h1>composition api with computed priperties</h1>
<input type="text" v-model="search"/>
<div v-for="name in matchingNames" :key="name">
{{ name }}
</div>

<h1>Using Props in setup</h1>
<Postlist :posts="posts"/>
  </div>
</template>

<script>
import Postlist from '../components/Postlist.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue';


export default {
  name: 'HomeView',
  components:{Postlist},
  setup() {
    console.log(this)
    const p = ref(null);
    console.log("setup");
    const name = ref('umakanth')
    const age = ref(24)
    // return {name:name, age:age}
    const handleClick = () => {
      console.log(p.value);
      p.value.classList.add("test");
      name.value = 'vamshi'
    }

    const ninjaOne = ref({name:"umakanth", age:24})
    const ninjaTwo = reactive({name:"vamshi", age:20})
    let testnimja = reactive("umakanth")

    const updateNinjaOne = ()=>{
      ninjaOne.value.age = 20
    }
    const updateNinjaTwo = ()=>{
      ninjaTwo.age = 18
      testnimja = 'vamshi'//will not update as reactive will not work for Primitive data types
    }




    const search = ref("")
    const computedNames = ref(['umakanth', 'vamshi','harish','sanjay','anudeep'])
    const stopwatch = watch(search,()=>{
      console.log("watching names")
    })
    const stopWatchEffect = watchEffect(()=>{
      console.log("watchEffecr",search.value)
    })
    const matchingNames = computed(()=>{
      return computedNames.value.filter((name)=> name.includes(search.value))
    })
    const handleClick1 =()=>{
      stopwatch();
      stopWatchEffect()
    }


    const posts = ref([
      {title:"test item",id:1},
      {title:"test item2",id:2},
      
    ])
    return { name, age, handleClick,p, ninjaOne,updateNinjaOne ,ninjaTwo,updateNinjaTwo,testnimja,computedNames,search,matchingNames,posts}



  },
  // created(){
  //   console.log("created");
  // },
  // mounted(){
  //   console.log("mounted");

  // }

}
</script>
<style scoped>
.test {
  color: blue;
}
</style>