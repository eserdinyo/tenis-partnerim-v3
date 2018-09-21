<template lang="pug">
  .header
    .container
      .header__content
        img.header__content--img(src="../assets/img/profil.jpg")
        p.header__content--name Rafa Nadal
        

</template>

<script>
import { DB } from "@/firebase";

export default {
  name: "Profil",
  data() {
    return {
      email: "",
      username: "",
      user_id: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    DB.collection("users")
      .where("email", "==", to.params.username)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.email = doc.data().email;
            vm.username = doc.data().username;
            vm.user_id = doc.data().user_id;
          });
        });
      });
  },
  methods: {
    fetchData() {
      DB.collection("users")
        .where("email", "==", this.$route.params.username)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.email = doc.data().email;
            this.username = doc.data().username;
            this.user_id = doc.data().user_id;
          });
        });
    }
  },
  watch: {
    $route: "fetchData"
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1));
  background-position: center;
  background-size: cover;
  position: relative;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;

    &--img {
      width: 100px;
      border-radius: 50%;
      border: 5px solid #333;
    }
    &--name {
      font-weight: 500;
    }
  }
}
</style>

