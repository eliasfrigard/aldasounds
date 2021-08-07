<template>
  <div class="music">
    <Player />
  </div>
</template>

<script>
  import Player from '@/components/Player.vue'

  export default {
    name: 'Music',
    data() {
      return {
        name: null,
        email: null,
        project: null,
        information: null
      }
    },
    methods: {

    },
    components: {
      Player
    }
  }
</script>

<style scoped>

</style>