<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hello-world'
}
</script>

<style>
.content {
  background-color: hsla(0, 0%, 32%, 0.2);
  color: hsla(0, 0%, 32%, 1);
  padding: 45px;
  text-align: center;
  font-family: Lato, sans-serif;
}
</style>
