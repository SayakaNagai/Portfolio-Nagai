<template>
  <v-app>
    <v-content>
      <Profile/>
    </v-content>
  </v-app>

</template>

<script>
import Profile from './components/Profile';

export default {
  name: 'App',

  components: {
    Profile,
  }
};
</script>
