<template>
  <div class="w-full max-w-xs mx-auto pt-32">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="submitForm">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-grey text-xs">
      ©2018 Captain Pangyo. All rights reserved.
    </p>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    submitForm (event) {
      return fetch('https://jsonplaceholder.typicode.com/users/',
            {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, cors, *same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin", // include, *same-origin, omit
              headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  // "Content-Type": "application/x-www-form-urlencoded",
              },
              redirect: "follow", // manual, *follow, error
              referrer: "no-referrer", // no-referrer, *client
              body: JSON.stringify({
                name: this.username,
                password: this.password,
              }), // body data type must match "Content-Type" header
            })
            // .then(response => response.json()); // parses response to JSON            
            .then(response => console.log(response))
            .catch(error => console.log(error));

      // $.ajax({
      //   url: "https://jsonplaceholder.typicode.com/users/",
      //   method: "POST",
      //   dataType: "json",
      //   contentType: "application/json; charset=UTF-8",
      //   data: JSON.stringify({
      //     name: this.username,
      //     password: this.password,
      //   })
      // })
      // .then(response => console.log(response))
      // .catch(error => console.log(error));

      this.initForm();
    },
    initForm () {
        this.username='';
        this.password='';
    },
  },

  mounted() {
    // $(document).ready(function() {
      // $("form").on("submit", function(event) {
      // });
    // });
  }
};
</script>

<style></style>
