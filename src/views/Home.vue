<template>
    <div class="container home">
        <div class="row justify-content-start">
            <app-profil :user=user v-for="user in users" :key="user.id" ></app-profil>
        </div>
    </div>
</template>



<script>
import { DB, STORAGE } from "@/firebase";
import AppProfil from "@/components/ProfilCard";
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      user: {
        user_id: "",
        username: "",
        profilImg: "",
        email: "",
        level: "",
        town: "",
        city: ""
      }
    };
  },
  components: {
    AppProfil
  },
  methods: {
    async getUsers() {
      const query = await DB.collection("users").get();

      query.forEach(doc => {
        this.user = {};
        this.user.user_id = doc.data().user_id;
        this.user.username = doc.data().username;
        this.user.email = doc.data().email;
        this.user.level = doc.data().level;
        this.user.town = doc.data().town;
        this.user.city = doc.data().city;
        this.users.push(this.user);
      });

      query.forEach(doc => {
        const pathRef = STORAGE.ref("profil_photos/" + doc.data().profilImgName);
        this.user.profilImg = await pathRef.getDownloadURL();
      })

      console.log(this.users);
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 30px;
}
</style>




