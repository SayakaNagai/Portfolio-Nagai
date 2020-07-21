<template>
  <v-app>
    <v-content>
      <Profile/>
    </v-content>

    <v-content>
      <Illustration/>
    </v-content>

    <v-content>
      <Work/>
    </v-content>
  </v-app>

</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Profile from './components/Profile';
import Illustration from './components/Illustration';
import Work from './components/Work';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Profile,
    Illustration,
    Work
  },

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
  },
};
</script>
