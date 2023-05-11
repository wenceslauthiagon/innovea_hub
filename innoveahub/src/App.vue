<template>
  <div class="container grid-lg my-2 py-2 text-dark">
    <div class="card">
      <div class="card-header">
        <div class="h4">Lista de Artigos</div>
      </div>

      <div class="card-body">
        <NewsApi :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>

import NewsApi from './components/NewsApi.vue'

import api from '@/services/api'
import { onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'App',
  components: {
    NewsApi
  },

setup() {
    const data = reactive ({
      articles: { },
    })
    onMounted( async() => {
      const response = await api.getNews()
      data.articles = response.data.articles
    })

    return { ...toRefs(data) }
  }

}
</script>

<style>
.h4 {
  text-align: center;
  margin-bottom: 10px;
}

.card {
  box-shadow: inset 0 0 1em gray, 0 0 1em black;
}
</style>
