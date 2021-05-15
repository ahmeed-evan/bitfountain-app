<template>
  <div id="navbar">
    <nav>
      <v-app-bar flat app color="blue-grey lighten-5">
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-container>
          <v-row no-gutters align="center">
            <h1 class="font-weight-thin">Bit Fountain</h1>
            <v-spacer></v-spacer>
            <v-btn v-if="!true" outlined width="150px"><span class="font-weight-light">Login</span></v-btn>
            <v-btn v-if="true" outlined width="150px"><span class="font-weight-light">Logout</span></v-btn>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item v-for="item in links" :key="item.title" router :to="item.route">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  drawer: boolean = false
  links: Array<object> = [
    {icon: " mdi-devices", title: "Overview", route: "/"},
    {icon: " mdi-plus", title: "Add Device", route: "/add-device"}
  ]
}
</script>

<style scoped>

</style>