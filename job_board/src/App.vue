<template>
  <!-- Page layout goes here  -->
  <div>
    <app-header></app-header>
    <app-vacancies v-bind:vacancies="vacancies"></app-vacancies>
    <app-footer></app-footer>
  </div>
</template>

<script>
// The data from the page goes here.

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Vacancies from './components/Vacancies.vue';
export default{
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-vacancies': Vacancies
  },
  data(){
    return{
      vacancies: [
        {role: 'District Judge', opens:'30 days', show:false},
        {role: 'Tribunal Member', opens:'60 days', show:false},
        {role: 'Adjudicator', opens:'65 days', show:false}
      ]
    }
  }
}
</script>

<style scoped>
/* The page styling goes here. */
</style>
