<template>
  <Catalog/>
</template>

<script>
import Catalog from '@/views/Catalog'

export default {
  name: 'App',
  components: {
    Catalog
  }
}
</script>

<style lang="scss">
@import 'assets/styles/variables.scss';
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  background: $background-gray;
  margin: 0;
  padding: 0;
}
</style>
