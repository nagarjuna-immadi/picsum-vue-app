<template>
  <div class="gallery mb-5">
    <div class="row mb-3">
      <div class="col-6 mt-1">
        <div class="form-group">
          <span>Showing </span>
          <select v-model="perPage" v-on:change="getImages()" class="per-page">
            <option
              v-for="(value, index) in perPageOptions"
              v-bind:value="value"
              v-bind:key="index"
            >
              {{ value }}
            </option>
          </select>
          <span> images per page</span>
        </div>
      </div>
      <div class="col-6 text-right">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-outline-primary"
            v-bind:disabled="enablePrev"
            v-on:click="getImagesByUrl(prevUrl, 'prev')"
          >
            <i class="fas fa-long-arrow-alt-left"></i> Prev
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-bind:disabled="enableNext"
            v-on:click="getImagesByUrl(nextUrl, 'next')"
          >
            Next <i class="fas fa-long-arrow-alt-right"></i>
          </button>
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
      prevUrl: "",
      nextUrl: "",
      currentPage: 1,
    };
  },
  methods: {
    getImages() {
      picSum
        .getImages(this.currentPage, this.perPage)
        .then((response) => {
          this.images = response.data;
          let vm = this;
          this.updateNavUrls(vm, response.headers);
        })
        .catch(() => {
          this.showError();
        });
    },
    updateNavUrls(vm, headers) {
      let navUrls = this.getNavUrls(headers.link);
      vm.nextUrl = navUrls.next ? navUrls.next : "";
      vm.prevUrl = navUrls.prev ? navUrls.prev : "";
    },
    getNavUrls(link) {
      let linkSegments = link.split(",");
      if (!linkSegments.length) {
        return;
      }

      let urls = {};
      linkSegments.forEach((segment) => {
        let segmentArr = segment.split(";");
        let url = segmentArr[0].trim().slice(1, -1);
        if (segment.indexOf("next") > -1) {
          urls.next = url;
        } else if (segment.indexOf("prev") > -1) {
          urls.prev = url;
        }
      });
      return urls;
    },
    getImagesByUrl(url, type) {
      if (!url) {
        return;
      }

      if (type == "next") {
        this.currentPage++;
      } else if (type == "prev") {
        this.currentPage--;
      }

      let vm = this;
      picSum
        .getImagesByUrl(url)
        .then((response) => {
          this.images = response.data;
          this.updateNavUrls(vm, response.headers);
        })
        .catch(() => {
          this.showError();
        });
    },
    showError() {
      alert("Something gone wrong! Please try after sometime.");
    },
  },
  created: function() {
    this.getImages();
  },
  computed: {
    enableNext() {
      return this.nextUrl ? false : this.nextUrl;
    },
    enablePrev() {
      return this.prevUrl ? false : this.prevUrl;
    },
  },
};
</script>

<style scoped>
select.per-page {
  display: inline-block;
  width: auto;
}
</style>
