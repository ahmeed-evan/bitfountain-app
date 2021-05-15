<template>
  <div id="login">
    <v-container>
      <v-row align-center justify="center">
        <v-col sm="8" md="8" lg="8">
          <v-card class="elevation-12 lime lighten-5">
            <v-toolbar dark class="blue lighten-1">
              <v-toolbar-title class="font-weight-light">Sign In</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    v-model="userdata.email"
                    prepend-icon=" mdi-mail"
                    name="login"
                    class="font-weight-light"
                    color="blue lighten-1"
                    label="Email"
                    type="text"
                ></v-text-field>
                <v-text-field
                    v-model="userdata.password"
                    prepend-icon="mdi-lock"
                    name="password"
                    class="font-weight-light"
                    color="blue lighten-1"
                    label="Password"
                    type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="login" width="150px" class="mr-2 blue lighten-1 font-weight-light" dark>Sign In</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import axios from "axios";

@Component
export default class Login extends Vue {

  private userdata: object = {
    email: "",
    password: ""
  }

  login() {
    axios({
          method: "post",
          url: "/login",
          data: this.userdata,
        }
    ).then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      console.log(localStorage.getItem("access_token"));
      this.$router.push('/')
    }).catch(err => alert(err.message));
  }
}
</script>

<style scoped>

</style>