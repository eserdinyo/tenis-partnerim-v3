<template lang="pug">
    .container
      .login-box
        .login-box__header
          p Kayıt
        .login-box__content
          form.Form(@submit.prevent="submitForm")
            .Form-item
              input.login-box__content--input(
                name="email",
                v-model="email",
                v-validate="'required|email'",
                placeholder='Email')

              p.Form-item__error(
                v-show="errors.has('email')"
              ) Geçerli bir email girin.
            
            .Form-item  
              input.login-box__content--input(
                type='text', 
                placeholder='Username', 
                v-model="username",
                name="username"
                v-validate="'min:5'")

              p.Form-item__error(
                v-show="errors.first('username')"
              ) En az 5 karakter girin.
            
            .Form-item
              input.login-box__content--input(
                type='password', 
                placeholder='Şifre',
                v-model="password",
                name="password",
                v-validate="'confirmed:pw_confirm|min_value:8'")

              p.Form-item__error(
                v-show="errors.has('password')"
              ) Şifreler en az 8 karakter olmalı.

            .Form-item
              input.login-box__content--input(
                type='password', 
                placeholder='Tekrar Şifre',
                name="confirm",
                ref="pw_confirm")

              p.Form-item__error(
                v-show="errors.has('password')"
              ) Şifreler aynı olmalı.
            
            .Form-item
              button.login-box__content--btn(
                type="submit") Kayıt Ol
          
          a.login-box__content--forget(href='#') Şifremi unuttum
          img.login-box__content--nadal(src='../assets/img/djokovic.png', alt='')
      .Modal(:class="{ openModal: isActive }")
        .Modal__header
          h4 Email Adresinizi Onaylayın
          a.Modal__header--btn(href="#", @click="closeModal") &times;
        .Modal__body
          p A confirmation email has been sent to muhammetesdasdaer29@gmail.com. Click on the confirmation link in the email to activate your account.

</template>

<script>
import { AUTH, DB } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      isActive: false
    };
  },
  methods: {
    async submitForm() {
      try {
        const user = await AUTH.createUserWithEmailAndPassword(
          this.email,
          this.password
        );

        DB.collection("users").add({
          user_id: user.user.uid,
          username: this.username,
          email: this.email
        });

        console.log(user.user.uid);

        /* AUTH.onAuthStateChanged(user => {
          user.sendEmailVerification();
        }); */
        this.isActive = true;
      } catch (err) {
        console.log(err.message);
      }
    },
    closeModal() {
      //this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.Form {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  &-item {
    margin-bottom: 10px;
    &__error {
      color: #ff3860;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }
  }
}
.login-box {
  background: rgba(255, 255, 255, 0.99);
  min-height: 440px;
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
      background: none;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 1px;
      color: #333;
      margin-top: 10px;
      transition: all 0.2s;
      outline: none;

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
      right: -10%;
      bottom: 0;
      z-index: -1;
    }
  }
}

.Modal {
  width: 600px;
  background-color: #191919;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 0 20px;

    &--btn {
      color: #fff;
      font-size: 20px;
      text-decoration: none;
    }
  }

  &__body {
    padding: 20px;
    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
}

.openModal {
  display: unset;
  opacity: 1;
}
</style>
