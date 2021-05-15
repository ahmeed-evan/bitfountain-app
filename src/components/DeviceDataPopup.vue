<template>
  <div class="device-data">
    <v-card>
      <div class="blue-grey lighten-3">
        <v-card-title align="center" class="font-weight-light justify-center">
          Model's information
        </v-card-title>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6">
            <v-card-text>
              <span>Brand: </span>
            </v-card-text>
            <v-card-text>
              <span>Name: </span>
            </v-card-text>
            <v-card-text>
              <span>Description: </span>
            </v-card-text>
            <v-card-text>
              <span>GroupId: </span>
            </v-card-text>
            <v-card-text >
              <span >DataType: </span>
              <v-chip
                  class="ma-2"
                  color="blue-grey lighten-3"
                  outlined>
                S
              </v-chip>
            </v-card-text>


          </v-col>
          <v-col>
            <v-card-text>
              <span>Model: </span>
            </v-card-text>
            <v-card-text>
              <span>DisplayName: </span>
            </v-card-text>
            <v-card-text>
              <span>Status: </span>
            </v-card-text>
            <v-card-text>
              <span>ProtocolOrder: </span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class DeviceDataPopup extends Vue {

}
</script>

<style scoped>

</style>