<template>
  <div id="overview">

  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import axios from "axios";

@Component({
  async created() {
    await axios({
      method: "get",
      url: '/login',
    }).then().catch()
  }
})
export default class Overview extends Vue {
}

</script>
