<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-btn large @click="goUser()">NameChange</v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goUser() {
        this.$router.push({ name: 'Home', params: { userID: 'paramShiva' }})
        // this.$router.push({ path: '/', query: { userID: 'QueryShiva' }})
      },
    }
  }
</script>
