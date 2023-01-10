<script>
export default {
  name: 'HeaderElement',

  methods: {
    logout() {},
  },
}
</script>

<template>
  <v-app-bar fixed app elevation="3" height="90" color="white">
    <v-container class="header">
      <NuxtLink to="/" class="logo"
        ><span :style="{ color: '#333333' }">Do</span><span>it.</span></NuxtLink
      >
      <div class="user__block">
        <div>
          {{ $auth.user.email }}
          <v-btn
            elevation="0"
            class="text-capitalize logout__btn"
            color="#F49C17"
            width="85"
            height="32"
            tile
            @click="logout"
            >Logout</v-btn
          >
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  .logo {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #f49c17;
    text-decoration: none;
  }
  .user__block {
    display: flex;
    align-items: center;
    font-family: Regular;
    font-weight: bold;
    .logout__btn {
      font-size: 16px;
      color: white;
      margin-left: 3px;
      border-radius: 2px;
    }
  }
}
</style>
