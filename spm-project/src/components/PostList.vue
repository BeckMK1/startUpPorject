<template>
    <div class="grid-container">
        <article v-for="post in posts" :key="post.id">
          <div class="all" v-bind:class="{display: display}">
        <img v-on:click="display = !display" :src="post.image" alt />
        <h3>{{post.title}}</h3>
        <p>{{post.description}}</p>
        <p>{{post.id}}</p>
        </div>
        <div class="single" v-bind:class="{display: !display}">
         <img v-on:click="display = display" :src="post.image" alt />
        <p>{{post.id.description}}</p>
        </div>
        </article>
    </div>
</template>

<script>
import { postRef } from "../firebase-db"
export default {
  data(){
      return{
          posts:[],
          display:true,
   }
  },
  firestore:{
      posts: postRef
  },
  methods:{
  }
}
</script>
<style>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container > article {
  text-align: center;
  padding: 10px;
}

.grid-container > article img {
  max-width: 300px;
  width: 100%;
}

.grid-container > article h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
.detailed{
display: none;
}
.test-box{
width: 50px;
height: 50px;
background: black;
}
.all{
display: none;
}
.all.display{
display: block;
}
.single{
  display: none;
}
.single.display{
  display: block;
}
</style>
