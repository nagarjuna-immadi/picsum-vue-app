<template>
  <div class="dashboard">
    <button type="button" v-on:click="updateRandomPic" class="btn btn-outline-primary btn-lg btn-block"><i class="fas fa-random"></i> Load Another Pic</button>
    <br />
    <img v-bind:src="getRandomPic" class="random-pic" />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      randomNum: Math.random()
    }
  },
  methods: {
    updateRandomPic() {
      this.randomNum = Math.random();
    }
  },
  computed: {
    getRandomPic() {
      return `${process.env.VUE_APP_PICSUM_API}/768/400?random=${this.randomNum}`;
    }
  }
}
</script>

<style scoped>
.random-pic {
  border-radius: 5px;
  box-shadow: 0px 0px 5px #000000;
}
</style>
