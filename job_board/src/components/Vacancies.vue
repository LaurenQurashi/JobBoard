<template>
  <div id="vacancies">
    <h2> Current Vacancies </h2>
    <ul>
      <li v-for="vacancy in vacancies" v-on:click="vacancy.show = !vacancy.show">
        <h2>{{vacancy.role}}</h2>
        <h3 v-show="vacancy.show">start date in: {{vacancy.opens}}</h3>
      </li>
    </ul>

    <form id="form">
      <p> Please enter your email along with the role you wish to apply for:</p>
      <p>
        <input type="text" placeholder="myname@email.com" v-model="email">
        {{email}}
      </p>
      <p>
        <select v-model="selected">
          <option>District Judge</option>
          <option>Tribunal Member</option>
          <option>Adjudicator</option>
        </select>
        {{selected}}
      </p>
      <p>
        <input type="submit" value="Submit">
      </p>
    </form><hr>
    <h2> Current Applicants </h2>
    <ul>
      <li v-for="applicant in applicants">
        <h2>{{applicant.email}} applied to: {{applicant.role}}</h2>
        <h3> Applied on: {{applicant.date}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    vacancies: {
      type: Array,
      required: true,
    },
    applicants: {
    type: Array,
    required: true,
  },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
#vacancies{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

#applicants{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
h2{
  text-align: center;
}
</style>
