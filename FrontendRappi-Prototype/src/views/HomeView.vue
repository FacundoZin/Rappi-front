<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Restaurantes</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <!-- Grid responsivo con columnas (2 en pantallas chicas, 4 en grandes) -->
      <!-- v-for recorre cada restaurante del arreglo filteredRestaurants -->
      <!-- :key ayuda a Vue a identificar cada elemento del bucle -->
      <div 
        v-for="r in filteredRestaurants"
        :key="r.id"
        class="border rounded-lg bg-white shadow hover:shadow-lg transition p-3"
      >
        <img :src="r.image" alt="Restaurante" class="w-full h-32 object-cover rounded mb-2" /> <!-- Imagen del restaurante -->
        <h2 class="font-semibold">{{ r.name }}</h2> <!-- Nombre del restaurante -->
        <p class="text-gray-600 text-sm">{{ r.category }}</p> <!-- Categoría (por ejemplo: Pizzería, Vegano, etc.) -->
        <p class="text-gray-500 text-xs">{{ r.city }}</p> <!-- Ciudad donde se encuentra el restaurante -->
        <!-- Enlace que lleva a la vista del menú del restaurante -->
        <!-- Usa Vue Router para navegar dinámicamente a /restaurant/:id -->
        <router-link
          :to="'/restaurant/' + r.id"
          class="text-red-600 font-medium mt-2 inline-block hover:underline"
        >
          Ver menú
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue' /*Importamos 'computed' desde Vue, que se usa para crear propiedades reactivas que se recalculan automáticamente cuando cambian sus dependencias.*/
const props = defineProps({ searchParams: Object }) /*Definimos las props (propiedades) que recibe este componente desde el padre (App.vue).En este caso, 'searchParams' es un objeto que contiene:- text: el texto que el usuario busca- type: el tipo de filtro (nombre, ciudad o categoría)*/

const restaurants = [ /*Arreglo estático de restaurantes.Cada restaurante tiene un id, nombre, ciudad, categoría e imagen.En una aplicación real, estos datos normalmente vendrían de una API.*/
  {
    id: 1,
    name: 'Resto Central',
    city: 'Buenos Aires',
    category: 'Comida rápida',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600'
  },
  {
    id: 2,
    name: 'Pizza House',
    city: 'Rosario',
    category: 'Pizzería',
    image: 'https://images.rappi.com.ar/restaurants_background/4-1737062648691.jpg?e=webp&d=700x100&q=10'
  },
  {
    id: 3,
    name: 'GreenBowl',
    city: 'Córdoba',
    category: 'Vegano',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600'
  },
  {
    id: 4,
    name: 'Sushi Zen',
    city: 'Mendoza',
    category: 'Japonesa',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7f/2a/eb/sushi-zen.jpg?w=900&h=500&s=1'
  }
]
/*
  'filteredRestaurants' es una propiedad computada (reactiva).
  Se actualiza automáticamente cuando cambian los valores de searchParams.
  Su función es filtrar la lista de restaurantes según lo que el usuario escribió en la barra de búsqueda.
*/
const filteredRestaurants = computed(() => {
  const q = props.searchParams?.text?.toLowerCase() || '' // Extrae el texto de búsqueda y lo pasa a minúsculas (para que no distinga mayúsculas/minúsculas)
  const type = props.searchParams?.type || 'name' // Obtiene el tipo de filtro seleccionado (name, city o category)
  if (!q) return restaurants // Si no hay texto de búsqueda, muestra todos los restaurantes
  return restaurants.filter(r => r[type].toLowerCase().includes(q)) // Filtra los restaurantes cuyo campo (nombre, ciudad o categoría) contenga el texto buscado
})
</script>