<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Judicial Appointments Commission',
    };
  },
};
</script>

<style scoped>
header{
  background: LightSlateGrey;
  padding: 10px
}
h1{
  color: black;
  text-align: center;
}
</style>
