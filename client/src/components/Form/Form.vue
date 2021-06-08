<script>
import axios from '../../myAxios';

export default {
  data: () => ({
    nameValue: '',
    emailValue: '',
    passwordValue: ''
  }),
  methods: {
    onFormSubmit() {
      const user = {
        name: this.nameValue,
        email: this.emailValue,
        password: this.passwordValue
      };
      axios
        .post('/users', user)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <div class="FormControl">
        <label for="name">Name</label>
        <input id="name" name="given-name" type="text" v-model="nameValue" />
      </div>
      <div class="FormControl">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="emailValue" />
      </div>
      <div class="FormControl">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="passwordValue"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  padding: 2rem;
}

.FormControl {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin: 0.5rem 0;
}

button {
  margin: 0.5rem 0;
  align-self: flex-end;
  width: 5rem;
  height: 2rem;
}
</style>
