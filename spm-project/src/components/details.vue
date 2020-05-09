<template>
    <div class="details">
        <div class="container" v-for="(post,Pid) in posts" :key="Pid">
            <div v-if="proId == post.id">
            <h1 class="title">{{post.title}}</h1>
            </div>
            </div>
            </div>
</template>
<script>
import { postRef } from "../firebase-db"
export default {
  name:'detalis',
  data(){
      return{
        posts:[],
        proId:this.$route.params.Pid,    
        title:"details"
      }
  },
    firestore:{
      posts: postRef
  },  
  }  
</script>