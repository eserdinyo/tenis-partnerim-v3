<template lang="pug">
    .container
      .login-box
        .login-box__header
          p Giriş
        .login-box__content
          input.login-box__content--input(
            v-model="email",
            type='email', 
            placeholder='Email')
          
          input.login-box__content--input(
            v-model="password"
            type='password', 
            placeholder='Şifre')
          
          a.login-box__content--btn(
            href='#',
            @click="login") Giriş
          a.login-box__content--forget(href='#') Şifremi unuttum
          img.login-box__content--nadal(src='../assets/img/nadal.png', alt='')
</template>

<script>
import firebase from "firebase";
import { AUTH, FIRESTORE } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login(e) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.$router.push("/");
        e.preventDefault();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  background: rgba(255, 255, 255, 0.99);
  height: 400px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  color: #333;
  &__header {
    border-bottom: 1px solid #bbb;
    padding: 10px 20px;
    display: flex;
    justify-content: center;

    p {
      font-size: 20px;
      display: contents;
    }
  }

  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--input {
      margin-bottom: 20px;
      width: 100%;
      padding: 10px 0px;
      border: none;
      border-bottom: 1px solid #ccc;
      background: none;
      outline: none;
      transition: all 0.2s;
      color: #333;
      width: 80%;

      &::placeholder {
        font-size: 14px;
        color: #ccc;
      }

      &:focus {
        border-bottom: 1px solid #333;
      }
    }

    &--btn {
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid #333;
      padding: 5px 10px;
      border-radius: 1px;
      color: #333;
      margin-top: 10px;
      transition: all 0.2s;

      &:hover {
        background: #333;
        color: #fff;
      }
    }

    &--forget {
      position: absolute;
      bottom: 3%;
      left: 3%;
      text-decoration: none;
      font-size: 14px;
      color: #333;
    }

    &--nadal {
      width: 50%;
      position: absolute;
      right: -1%;
      bottom: 0;
      z-index: -1;
    }
  }
}
</style>
