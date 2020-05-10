<template>
    <div>
      <input class="search" type="text" v-model="search" placeholder="Search"/>
      <div class="grid-container">
        <article  v-for="post in filteredPosts" :key="post.id">
          <div class="allOfAll">
          <div class="all" @click="goTodetail(post.id)">
        <img :src="post.image" alt />
        <h3>{{post.title}}</h3>
        <p>{{post.description}}</p>
        <button v-on:click="deletePost(post)">delete</button>
        </div>
        </div>
        <div class="displayNow">
        </div>
        </article>
        </div>
    </div>
</template>

<script>
import { postRef } from "../firebase-db"
export default {
  data(){
      return{
          posts:[],
          search:''
   }
  },
  firestore:{
      posts: postRef
  },

  methods:{
  deletePost(post){
  postRef.doc(post.id).delete();
  },
  goTodetail(postId){
    this.$router.push({name:'details',params:{Pid:postId}})
  }
  },
  computed:{
   filteredPosts: function(){
    return this.posts.filter((post)=>{
     return post.title.match(this.search) 
    });
   } 
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

</style>
