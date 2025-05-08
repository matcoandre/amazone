<script setup>
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

let books = ref([])

onMounted(function() {
  // axios.get('https://www.dbooks.org/api/recent')
  //   .then((response) => {
  //     books.value = response.data.books
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching books:', error)
  //   })

  axios.get('https://www.dbooks.org/api/recent')
    .then((response) => {
      response.data.books.slice(0, 3).map((book) => {
        axios.get(`https://www.dbooks.org/api/book/${book.id.replace('X', '')}`)
          .then((response) => {
            books.value.push(response.data)
          })
          .catch((error) => {
            console.error('Error fetching book details:', error)
          })
      })
    })
    .catch((error) => {
      console.error('Error fetching books:', error)
    })

 })
</script>

<template>
  <div>
    <h1 class="flex items-center justify-center p-5 font-bold md:justify-start">Latest releases</h1>
    <div class="flex flex-row">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full justify-center">
          <div class="card md:card-side bg-base-100 h-128 shadow-lg md:h-64">
            <figure v-if="books.length >0">
              <img v-bind:src="books[0].image" alt="Album">
            </figure>
            <span v-else class="loading loading-dots loading-sm"></span>
            <div class="card-body">
              <h2 v-if="books.length >0" class="card-title">
                {{ books[0].title }}
              </h2>
              <span v-else class="loading loading-dots loading-sm"></span>
              <h3 v-if="books.length >0" class="italic">
                {{ books[0].authors }}
              </h3>
              <span v-else class="loading loading-dots loading-sm"></span>
              <p v-if="books.length > 0" class="w-128">
                {{ books[0].description }}
              </p>
              <span v-else class="loading loading-dots loading-sm"></span>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div
            class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full justify-center">
          <div class="card md:card-side bg-base-100 h-128 shadow-lg md:h-64">
            <figure v-if="books.length >0">
              <img v-bind:src="books[1].image" alt="Album">
            </figure>
            <span v-else class="loading loading-dots loading-sm"></span>
            <div class="card-body">
              <h2 v-if="books.length >0" class="card-title">
                {{ books[1].title }}
              </h2>
              <span v-else class="loading loading-dots loading-sm"></span>
              <h3 v-if="books.length >0" class="italic">
                {{ books[1].authors }}
              </h3>
              <span v-else class="loading loading-dots loading-sm"></span>
              <p v-if="books.length > 0" class="w-128">
                {{ books[1].description }}
              </p>
              <span v-else class="loading loading-dots loading-sm"></span>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div
            class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full justify-center">
          <div class="card md:card-side bg-base-100 h-128 shadow-lg md:h-64">
            <figure v-if="books.length > 0">
              <img v-bind:src="books[2].image" alt="Album">
            </figure>
            <span v-else class="loading loading-dots loading-sm"></span>
            <div class="card-body">
              <h2 v-if="books.length > 0" class="card-title">
                {{ books[2].title }}
              </h2>
              <span v-else class="loading loading-dots loading-sm"></span>
              <h3 v-if="books.length > 0" class="italic">
                {{ books[2].authors }}
              </h3>
              <span v-else class="loading loading-dots loading-sm"></span>
              <p v-if="books.length > 0" class="w-128">
                {{ books[2].description }}
              </p>
              <span v-else class="loading loading-dots loading-sm"></span>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div
            class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
