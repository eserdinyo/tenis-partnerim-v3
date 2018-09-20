<template>
    <div class="container">
        <div class="row justify-content-start">
            <app-profil  v-for="n in 10" :key="n.id" ></app-profil>
        </div>
    </div>
</template>



<script>
import AppProfil from "@/components/Profil";

export default {
  data() {
    return {
      username: ""
    };
  },
  components: {
    AppProfil
  },
  computed: {},
  created() {}
};
</script>




