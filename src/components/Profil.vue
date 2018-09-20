<template>
    <div class="profil" >
        <div class="profil__top">
            <div class="profil__top--msg">
                <a href=""><i class="profil__top--msg--icon far fa-envelope"></i></a>
            </div>
            <div class="profil__top--box">
                <img class="profil__top--img" src="../assets/img/profil.jpg" alt="Profil Image">
            </div>
            <div class="profil__top--name">Rafael Nadal</div>
            <div class="profil__top--location"> <i class="fas fa-map-marker-alt"></i> Istanbul</div>
        </div>
        <div class="profil__bottom">
            <div class="profil__bottom--level">Seviye</div>
            <div class="profil__bottom--desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ea dolor nesciunt deserunt vero sit consequuntur.</div>
        </div>
    </div>   
</template>

<style lang="scss" scoped>
.profil {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(#fff, 0.95);
  padding-top: 40px;
  width: 23%;
  margin-right: 22px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 10px 40px rgba(black, 0.3);
  position: relative;

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;

    &--msg {
      position: absolute;
      top: 3%;
      left: 90%;

      &--icon {
        font-size: 20px;
        color: #000;
      }
    }
    &--img {
      border-radius: 50%;
      box-shadow: 10px 10px 40px rgba(#000, 0.3);
      margin-bottom: 10px;
    }
    &--name {
      color: #000;
      font-weight: 700;
      margin-bottom: 5px;
    }

    &--location {
      color: #000;
      font-weight: 700;
      font-size: 13px;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(rgba(black, 0.7), rgba(black, 0.7)),
      url("../assets/img/profil_back.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &--level {
      margin-bottom: 10px;
      font-family: sans-serif;
    }

    &--desc {
      font-family: sans-serif;
      font-style: italic;
      text-align: center;
      color: #ccc;
    }
  }
}
</style>

