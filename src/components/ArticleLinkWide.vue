<template>
  <div id="article-wrapper">
    <div id="article" class="tooltip">
      <img :src="banner" />
    </div>

    <div id="title">
      {{ title }}
    </div>
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
};
</script>

<style scoped lang="scss">
$shrink-size: 10;

.tooltiptext {
  bottom: 102% !important;
}

#article-wrapper {
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  margin-bottom: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: auto 1fr;

  &:hover {
    cursor: pointer;

    #article {
      filter: grayscale(0%);
    }
  }

  #article {
    filter: grayscale(25%);
    display: inline-block;

    img {
      height: 150px;
      object-fit: cover;
      opacity: 0.8;
    }
  }

  #title {
    padding: 10px;
    font-weight: bold;
    color: white;
    background: black;
    height: 130px;
    display: inline-block;
    text-align: center;
  }
}
</style>
