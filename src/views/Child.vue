<template>
    <p>Message from Parent: {{ dataName }}</p>
</template>

<script>
export default {
  props: {
    dataName: {
      type: String,
      required: true,
      // default: "Hi",
    }
  }
};
</script>





