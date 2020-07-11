<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="white--text">
        <h1>Profile</h1>
      </v-col>

      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="mb-3"
          contain
          height="200"
        />
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
           key nagashima
        </h2>
        <p class="white--text">
          京都精華大学マンガ学部マンガ学科カートゥーンコース所属。<br>
          一度社会人を経験したのち、イラストに興味を持ち、大学に入る。<br>
          アナログを得意とし、最近デジタルアートも手掛ける。<br>
          女性だけでなく、男性、老人、モンスターなど、幅広い対象を描ける。
        </p>

        <v-row justify="center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Profile',

    data: () => ({
      icons: [
      'mdi-facebook',
      //'mdi-twitter',
      'mdi-instagram',
      ],
    }),
  }
</script>
