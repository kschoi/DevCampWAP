<template>
  <div>
    <form>
      <label for="email">email :</label>
      <input id="email" type="text" v-model="email" />
      <label for="password">password :</label>
      <input id="password" type="password" v-model="password" />
      <button v-on:click.prevent="signInWithFirebase">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signInWithFirebase() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$router.push("/main");
        })
        .catch(error => {
          console.error(error);
          throw new Error(error);
        });
    }
  }
};
</script>

<style></style>
