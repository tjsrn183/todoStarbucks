<template>
  <button class="button" @click="$emit('toggle')">+</button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button {
  border-radius: 50%;
  background-color: var(--green-color);
  border:none;
  width: 100px;
  height: 100px;
  font-size: 50px;
  color: white;
}
</style>