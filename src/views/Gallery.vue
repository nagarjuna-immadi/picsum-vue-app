<template>
  <div class="gallery mb-5">
    <div class="row mb-3">
      <div class="col-6 mt-1">
        <div class="form-group">
          <label>Images per page: </label> &nbsp;&nbsp;
          <select v-model="perPage" class="form-control">
            <option
              v-for="(value, index) in perPageOptions"
              v-bind:value="value"
              v-bind:key="index"
            >
              {{ value }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6 text-right">
        <div class="btn-group">
          <button type="button" class="btn btn-outline-primary" :disabled="prevUrl"><i class="fas fa-long-arrow-alt-left"></i> Prev</button>
          <button type="button" class="btn btn-outline-primary" :disabled="nextUrl">Next <i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="(image, i) in images" :key="i">
        <display-image v-bind:image-data="image"></display-image>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayImage from "@/components/DisplayImage";
import * as picSum from "../services/picSumService";

export default {
  name: "Gallery",
  components: {
    DisplayImage,
  },
  data() {
    return {
      images: [],
      perPageOptions: [12, 24, 36],
      perPage: 12,
      prevUrl: '',
      nextUrl: ''
    };
  },
  methods: {
    getImages() {
      picSum
        .getImages(this.perPage)
        .then((response) => {
          this.images = response.data;
          let headers = response.headers;
          console.log(headers);
          let navUrls = this.getNavUrls(headers.link);
          console.log(navUrls);
        });
    },
    getNavUrls(link) {
      let urls = link.split(',');
      console.log(urls);
    }
  },
  created: function() {
    this.getImages();
  },
};
</script>

<style scoped>
select.form-control {
  display: inline;
  width: auto;
}

</style>
