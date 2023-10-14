<template>
    <div>
      <p class="reaction-time">Reaction Time: {{ score }} ms</p>
      <p :class="rankClass">{{ rank }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["score"],
    computed: {
      rank() {
        if (this.score < 250) {
          return "Ninja Fingers";
        } else if (this.score < 400) {
          return "Rapid Reflexes";
        } else {
          return "Snail Pace...";
        }
      },
      rankClass() {
        if (this.score < 250) {
          return "green-text";
        } else if (this.score < 400) {
          return "orange-text";
        } else {
          return "red-text";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .reaction-time {
    font-size: 1.2em;
    color: #333; 
    font-weight: bold;
  }
  
  .green-text {
    font-size: 1.4em;
    color: green;
    font-weight: bold;
  }
  
  .orange-text {
    font-size: 1.4em;
    color: orange;
    font-weight: bold;
  }
  
  .red-text {
    font-size: 1.4em;
    color: red;
    font-weight: bold;
  }
  </style>
  