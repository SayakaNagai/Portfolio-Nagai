<template>
  <v-app>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        height="400px"
        continuous=false
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <!-- header -->
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div style="margin-left: auto; margin-right: auto;">
        <v-img
          alt="Logo"
          class="shrink mr-2 my-4 mr-12"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="130"
        />
      </div>
      <!-- Humberger menu -->
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        color="grey darken-4"
        class="white--text"
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Profile">
              <v-list-item-title>PROFILE</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Illustration">
              <v-list-item-title>ILLUSTRATION</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Work">
              <v-list-item-title>WORK</v-list-item-title>
            </v-list-item>
            <v-list-item to="/Contact">
              <v-list-item-title>CONTACT</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

    <router-view></router-view>

    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; key nagashima {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          src: require('./assets/キノコ採り.png'),
        },
        {
          src: require('./assets/ヘンゼルとグレーテル.png'),
        },
        {
          src: require('./assets/怪物お風呂.png'),
        },
      ],
    }
  }
};
</script>
