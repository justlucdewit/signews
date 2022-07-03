<template>
  <div id="article" class="tooltip" @click="goToArticle">
    <img :src="banner" />
    <div id="title">
      {{ title }}
    </div>

    <div v-if="external" class="extern">External</div>

    <!-- <div class="tooltiptext">
      {{ title }}
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    goToArticle() {
      this.$router.push("/article/some-article-name");
    },
  },
};
</script>

<style scoped lang="scss">
$shrink-size: 10;

.extern {
  position: relative;
  top: -90px;
  left: 10px;
  font-weight: bold;
  color: white;
  background: red;
  width: fit-content;
  padding: 5px;
  border-radius: 10px 10px 0 0;
}

.tooltiptext {
  bottom: 102% !important;
}

#article {
  height: calc(100% - 5px);
  width: calc(100% - 5px);
  margin: 5px;
  text-align: left;
  filter: grayscale(60%);
  transition: all 0.3s;
  margin-top: -10px;
  margin-bottom: 0px;

  &:hover {
    height: 100%;
    width: 100%;
    margin: 0px;
    cursor: pointer;
    filter: drop-shadow(8px 8px 5px gray);

    img {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  #title {
    position: relative;
    bottom: 40px;
    padding: 10px;
    font-weight: bold;
    color: white;
    background: black;
    margin-bottom: -40px;
    height: 40px;
  }
}
</style>
