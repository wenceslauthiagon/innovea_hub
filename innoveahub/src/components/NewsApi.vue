<template>
    <div class="table">
        <thead>
            <tr>
                <th>Autores</th>
                <th>Título</th>
                <th>Descriçao</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(article, key) in articles" :key="key">
               <td>{{ article.author ? article.author : 'Artigo sem autoria.' }}</td>
               <td> {{ article.title }} </td>
               <td>{{ article.description }}</td>
           </tr>
        </tbody>

    </div>
</template>

<script>

    export default {
        props: { articles: { type: Object, required: true}},
    }

</script>

<style scoped>

</style>
