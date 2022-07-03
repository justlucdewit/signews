<template>
  <div id="header">
    <img src="@/assets/logo.png" />
    <router-link to="/home">Home</router-link>
    <router-link to="/articles">Articles</router-link>

    <div id="search">
      <input type="text" placeholder="search" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#header {
  background: #111;
  text-align: left;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;

  img {
    width: 40px;
    margin: 0 10px;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 20px 10px;

    &:hover {
      background: #444;
    }
  }

  #search {
    float: right;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      border-bottom: 1px solid #999;
      position: absolute;
      right: 40px;
      color: white;
    }
  }
}
</style>
