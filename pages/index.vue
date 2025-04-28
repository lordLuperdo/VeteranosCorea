<script setup>
import heads from '~/components/header/header_G.vue'
import { useDataStore } from '~/store/data_store';
import link_cards from '~/components/index/link_cards.vue';
import reproductor_g from '~/components/index/reproductor_bajo.vue'

const DataStore = useDataStore()



</script>
<template>
    <reproductor_g></reproductor_g>
 <heads></heads>
 <main class=""></main>
 <section class=""></section>

 <article class="">
<h2 class=""> 
    ¿Dónde puedo conocer más?
</h2>

<div class="">
  <ul class="">
    <li class="" v-for="card in DataStore.redes_info" :key="card">
      <link_cards
      :imagen="card.photo"
      :text="card.texo"
    
      
      ></link_cards>
    </li>
  </ul>
</div>


 </article>

 <section class="">
<div class="">
    <h2 class="">CONOCE A LOS VETERANOS DE UNA MANERA <span> DIFERENTE </span> </h2>
    <p class=""> descarga la aplicación enfocada en realidad virtual en la
        cual conoceras la historia de cada veterano más una visualización del mismo.
    </p>
    <NuxtLink to="" class="">Descargar</NuxtLink>

</div>
<div class="">
    <img src="" alt="" class="">
</div>

 </section>



</template>