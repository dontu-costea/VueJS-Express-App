<script>
export default {
  name: 'FooterElement',
}
</script>

<template>
  <v-footer color="white" height="100px">
    <v-container>
      <div class="footer">&copy; {{ new Date().getFullYear() }}</div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  text-align: center;
}
</style>
