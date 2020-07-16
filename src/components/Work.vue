<template>
  <v-container>
    <v-row class="text-center">

      <v-col cols="12" class="white--text">
        <h1>Work</h1>
      </v-col>

      <v-col cols="12" class="white--text">
        <v-alert
          color="grey darken-3"
          dark
        >
        <h2>2019</h2>
        </v-alert>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-img
          :src="require('../assets/2018graduate.png')"
          :lazy-src="require('../assets/2018graduate.png')"
          class="grey lighten-3"
          width="300px"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <p>
          神戸大学DTM作曲同好会 音見鶏のアルバム「OTOMIDORI GRADUATION ALUBUM 2018」のアートワークを担当しました。
          <a class="white--text" href="http://www.otomidori.at-ninja.jp/albums/2018graduate.html"></a>
        </p>
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
