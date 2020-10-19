<template>
  <div class="card mb-3 image-card">
    <img :src="picSumUrl+'/id/'+imageData.id+'/300/200'" class="card-img-top" />
    <div class="card-body">
      body
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayImage",
  props: ["imageData"],
  data() { 
    return {
      picSumUrl: process.env.VUE_APP_PICSUM_API
    }
  }
};
</script>

<style scoped>
.image-card img {
    max-width: 100%;
}
</style>