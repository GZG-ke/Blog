<template>
  <div>
    <a-button @click="fetchData">获取数据</a-button>
    <div v-if="data">{{ data.message }}</div>
  </div>
</template>

<script>
import api from "@/apis/info.js";

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    fetchData() {
      api.get('/user/info')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>