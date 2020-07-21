<template>
  <v-container>
    <v-row class="text-center">

      <v-col cols="12" class="white--text">
        <h1>Illustration</h1>
      </v-col>

      <v-col cols="12" class="white--text">
        <v-alert
          color="grey darken-3"
          dark
        >
        <h2>2020</h2>
        </v-alert>
      </v-col>

      <v-col
        v-for="item in items"
        :key="item"
        class="d-flex child-flex"
        cols="12"
        md="4"
        sm="6"
        xs="12"
      >
        <v-img
          :src=item
          :lazy-src=items
          class="grey lighten-3"
        >
        </v-img>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Profile',

    data: () => ({
      items: [
        require('../assets/キノコ採り.png'),
        require('../assets/ヘンゼルとグレーテル.png'),
        require('../assets/怪物お風呂.png'),
        require('../assets/甲冑バク.png'),
        require('../assets/日本画男性.png'),
      ],
    }),
  }
</script>
