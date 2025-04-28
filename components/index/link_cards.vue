
<script setup>
const props = defineProps(["texto","imagen"])

</script>

<template>
 
<div class="">

    <img :src="imagen" alt="imagen no encontrada">

    <div class="">
        <h1 class=""></h1>
        <p class="">{{texto}}</p>
    </div>

    <NuxtLink to="" class="">Visitar</NuxtLink>
    

</div>


</template>