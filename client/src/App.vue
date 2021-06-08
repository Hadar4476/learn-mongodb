<script>
import axios from './myAxios';

import FormVue from './components/Form/Form.vue';

export default {
  components: {
    appForm: FormVue
  },
  methods: {
    onGetUsers() {
      axios
        .get('/users')
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }
};
</script>

<template>
  <div>
    <app-form></app-form>
    <button @click="onGetUsers">Get Users</button>
  </div>
</template>
