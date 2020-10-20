<template>
  <div class="card mb-3 image-card">
    <img
      :src="picSumUrl + '/id/' + imageData.id + '/300/200'"
      class="card-img-top"
    />
    <div class="card-body">
      <div>
        <a target="_blank" :href="imageData.url">{{ imageData.author }}</a>
        <a target="_blank" :href="imageData.download_url" class="pull-right"><i class="fas fa-cloud-download-alt"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayImage",
  props: ["imageData"],
  data() {
    return {
      picSumUrl: process.env.VUE_APP_PICSUM_API,
    };
  },
};
</script>

<style scoped>
.image-card img {
  max-width: 100%;
}
</style>
