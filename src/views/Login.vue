<template>
    <div class="container">
        <div class="login-box">
            <div class="login-box__header">
                <p>Giriş</p>
            </div>
            <div class="login-box__content">
                            <input type="text" id="username" class="login-box__content--input" placeholder="Kullanıcı Adı">
                    
                            <input type="password" id="username" class="login-box__content--input" placeholder="Şifre">
                      
                        <a href="#" class="login-box__content--btn">Giriş</a>
                        <a href="#" class="login-box__content--forget">Şifremi unuttum</a>
                        <img class="login-box__content--nadal" src="../assets/img/nadal.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },
  methods: {
    
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
