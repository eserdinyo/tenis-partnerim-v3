<template lang="pug">
  .header
    .container
      .header__content
        img.header__content--img(src="../assets/img/profil.jpg")
        p.header__content--name {{username}}
        
        .header__content--location  
          i.fas.fa-map-marker-alt
          p {{town}} / {{city.toUpperCase()}}
        

</template>

<script>
import { DB } from "@/firebase";

export default {
  name: "Profil",
  data() {
    return {
      email: "",
      username: "",
      user_id: "",
      city: "",
      town: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    DB.collection("users")
      .where("username", "==", to.params.username)
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
        .where("username", "==", this.$route.params.username)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.email = doc.data().email;
            this.username = doc.data().username;
            this.user_id = doc.data().user_id;
            this.city = doc.data().city;
            this.town = doc.data().town;
          });
        });
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1));
  padding-bottom: 20px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &--img {
      width: 200px;
      border-radius: 50%;
      border: 5px solid #ecf0f1;
    }
    &--name {
      font-weight: 500;
      font-size: 100px;
      margin-left: 20px;
      line-height: 0;
    }
    &--location {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }
}
</style>

