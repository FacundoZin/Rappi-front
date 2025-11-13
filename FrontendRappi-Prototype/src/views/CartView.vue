<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🛒 Carrito de compras</h1>
    <div v-if="store.cart.length === 0" class="text-gray-500">Tu carrito está vacío</div> <!-- Si el carrito está vacío, muestra un mensaje -->
    <div v-else class="space-y-3"> <!-- Si el carrito tiene productos, muestra la lista -->
      <div v-for="item in store.cart" :key="item.id" class="flex justify-between items-center bg-white p-3 rounded shadow"> <!-- Recorre todos los elementos del carrito, v-for crea un bloque por cada producto dentro de store.cart, :key="item.id" ayuda a Vue a identificar cada elemento -->
        <div>
          <h2 class="font-semibold">{{ item.name }}</h2>  <!-- Muestra nombre del producto -->
          <p class="text-gray-500 text-sm">{{ item.category }}</p> <!-- Muestra la categoría del producto -->
        </div>
        <div class="flex items-center gap-2"> <!-- Controles para modificar la cantidad -->
          <button @click="store.removeFromCart(item)" class="bg-gray-200 px-2 rounded">-</button> <!-- Botón para disminuir cantidad, Al hacer clic, llama a la función removeFromCart del store -->
          <span>{{ item.qty }}</span> <!-- Muestra la cantidad actual del producto -->
          <button @click="store.addToCart(item)" class="bg-red-500 text-white px-2 rounded">+</button> <!-- Botón para aumentar cantidad, Llama a addToCart del store -->
        </div>
      </div>
      <button class="mt-4 bg-green-600 text-white px-4 py-2 rounded">Confirmar compra</button> <!-- Botón final para confirmar la compra -->
    </div>
  </div>
</template>

<script setup>
import { store } from '../main.js' /*Importamos el 'store' desde main.js*/
</script>