<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link" active-class="home-active">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
            Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Build' }" class="nav-link">
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Search' }" class="nav-link">
            Search
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link :to="{ name: 'Cart' }" class="nav-link">
            Cart
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
});
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style scoped lang="scss">
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.router-link-active {
  color: white;
}

.home-active {
  color: white;
  text-shadow: 2px 2px black;
}
</style>
