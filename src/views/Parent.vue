<template>
  <child-component :dataName="msg"></child-component>
</template>

<script>
import ChildComponent from "./Child";
export default {
  data() {
    return {
      msg: "Hello From Parent"
    };
  },
  components: {
    ChildComponent
  }
};
</script>



