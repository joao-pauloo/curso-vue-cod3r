<template>
  <button class="display">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Display",
  props: ['value']
}
</script>

<style>
  .display {
    grid-column: span 4;
    background-color: #0004;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #FFFFFF;
    padding: 20px;
    font-size: 2.1em;
    overflow: hidden;
  }
</style>