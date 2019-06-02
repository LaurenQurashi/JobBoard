<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright for the Judicial Appointments Commission, June 2019',
    };
  },
};
</script>

<style scoped>
  footer{
    background: black;
    padding: 6px;
  }
  p{
    color: white;
    text-align: center;
  }
</style>
