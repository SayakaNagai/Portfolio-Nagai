<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="white--text text-center">
        <h1>Work</h1>
      </v-col>

      <v-col cols="12" class="white--text text-center">
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
          class="grey lighten-3"
          width="300px"
          style="margin-left: auto; margin-right: auto;"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <p>
          神戸大学DTM作曲同好会 音見鶏のアルバム「OTOMIDORI GRADUATION ALUBUM 2018」のアートワークを担当しました。
        </p>
        <p>
          <a class="white--text" target="_blank" href="http://www.otomidori.at-ninja.jp/albums/2018graduate.html">LINK</a>
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>
