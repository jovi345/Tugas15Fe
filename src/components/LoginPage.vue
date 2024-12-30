<template>
  <div class="container">
    <form action="" class="login-form">
      <h2>Login</h2>
      <div class="input">
        <input type="email" placeholder="Email" />
      </div>
      <div class="input">
        <input type="password" placeholder="Password" />
      </div>

      <div class="center">
        <button>Log In</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post("/", data);
        console.log(response);
      } catch (error) {
        this.errorMessage = error;
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  border: 2px solid var(--sapphire);
  padding: 20px 44px;
  margin-top: 8%;
  border-radius: 10px;
  width: 22%;
}

input {
  padding: 12px 15px;
  margin-top: 12px;
  outline: none;
  border-radius: 4px;
  width: 95%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 6px;
  margin-top: 12px;
  color: white;
  background-color: #8839ef;
  font-weight: 700;
  outline: none;
}
</style>
