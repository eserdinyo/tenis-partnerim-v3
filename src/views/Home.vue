<template>
    <div class="container home">
        <div class="row justify-content-start">
            <app-profil  v-for="user in users" :key="user.id" ></app-profil>
        </div>
    </div>
</template>



<script>
import { DB } from "@/firebase";
import AppProfil from "@/components/ProfilCard";

export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    AppProfil
  },
  computed: {},
  created() {
    DB.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users.push(doc.data());
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 30px;
}
</style>




