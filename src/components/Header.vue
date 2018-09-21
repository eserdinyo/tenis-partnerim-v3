<template lang="pug">
.header
  .header__logo
    router-link.header__logo--link(to='/')
      img.header__logo--img(src='../assets/img/logo.png', alt='')
  .header__nav
    router-link.header__nav--link(
      v-if="!isLoggedIn",
      to='/login',
      ) Giriş
    router-link.header__nav--link(
      v-if="isLoggedIn",
      :to="{name: 'user', params:{username:currentUser}}"
      ) {{currentUser}}
    
    router-link.header__nav--link(
      v-if="!isLoggedIn",
      to='/register',
      ) Kayıt
    
    a.header__nav--link(
      v-if="isLoggedIn",
      href='#', 
      @click="logout") Çıkış

</template>

<script>
import { AUTH } from "@/firebase";

export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: ""
    };
  },
  methods: {
    async logout() {
      try {
        const res = await AUTH.signOut();
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    if (AUTH.currentUser) {
      this.isLoggedIn = true;
      this.currentUser = AUTH.currentUser.email;
    }
  }
};
</script>


<style lang="scss" scoped>
.header {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.288);

  &__nav {
    margin-left: 10px;
    color: #fff;

    &--link {
      color: #fff;
      margin-left: 20px;
      text-decoration: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0);
      padding-bottom: 5px;
      transition: all 0.2s;

      &:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }
}
</style>

