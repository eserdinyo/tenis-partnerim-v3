<template>
  <div class="header">
           <div class="header__logo">
               
               <router-link class="header__logo--link" to="/"><img src="../assets/img/logo.png" alt="" class="header__logo--img"></router-link>

           </div>
           <div class="header__nav">
               <router-link class="header__nav--link" to="/login">Giriş</router-link>
               <router-link class="header__nav--link" to="/register">Kayıt</router-link>
           </div>
       </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello You"
    };
  },
  methods: {}
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
  margin-bottom: 50px;

  &__nav {
    margin-left: 10px;
    color: #fff;

    &--link {
      color: #fff;
      margin-left: 20px;
      text-decoration: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0);
      padding-bottom: 5px;
      transition: all .2s;

      &:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }
}
</style>

