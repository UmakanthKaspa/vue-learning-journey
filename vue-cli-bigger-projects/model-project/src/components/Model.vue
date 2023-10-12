<template>
    <div class="backdrop" @click.self="closemodel">
        <!-- <div class="backdrop" @click="closemodel"> -->
        <div class="model" :class="{sale: theme==='sale'}">
            <!-- <h1>{{ header[0] }}</h1>
            <p>{{ header[1] }}</p>
            <p>{{text}}</p> -->
            
             <slot></slot>
             <div class="actions">
                <slot name="links"></slot>
             </div>
        </div>
    </div>
</template>
<script>

export default {
    props:['header','text',"theme"],
    methods:{
        closemodel(){
            this.$emit("close")
        }
    }
}

</script>

<style scoped>

h1{
    color: black;
}
.model {
    width: 200px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top:0;
    position:fixed;
    background: rgba((0), 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.sale{
background: pink;
}
</style>