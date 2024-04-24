<template>
    <div >
    <div v-if="isLoading">
    <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
    <table class="table table-striped shadow">
    <thead>
    <tr>
        <th scope="col">Nom Catégorie</th>
        <th scope="col">Image Categorie</th>
    
    
    </tr>
    </thead>
    <tbody>
    <tr v-for="cat in categories" :key="cat.id">
        
        <td>{{ cat.nomcategorie }}</td>
        <td><img :src="cat.imagecategorie" width="70"
    height="80"/> </td>
    
    

    <td><button class="btn btn-outline-primary mx-2">
    <i class="fa-solid fa-pen-to-square"></i>
    Edit</button></td>

    <td><button class="btn btn-outline-danger mx-2"
    @click="deletecategorie(cat.id)">
    <i class="fa-solid fa-trash-can"></i>
    Delete
    </button></td>


    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </template>



    <script setup>
    import { ref,onMounted } from 'vue';
    import axios from 'axios';
    const categories=ref([])
    const isLoading=ref(true)
    const getcategories=async()=>{
    await axios.get("http://localhost:8000/api/categories")
    .then(res=>{
    categories.value=res.data
    isLoading.value=false
    })
    .catch(error=>{
    console.log(error)
    })
    }
    onMounted(() => {
    getcategories();
    });
    const deletecategorie=async(id)=>{
    try {
    3
    await axios.delete(`http://localhost:8000/api/categories/${id}`)
    getarticles()
    } catch (error) {
    console.log(error)
    }
    }
    </script>



    <style lang="scss" scoped>
    </style>