<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <user></user>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import User from '../components/User.vue';

  export default {
    name: 'App',
    components: {
        User,
    },
    data: () => ({
      //
    }),
    created() {
        // console.log(this.$route.query.userID);
        console.log(this.$route.params.userID);
    }
  };
</script>