<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <h1 class="flex items-center justify-center p-5 font-bold md:justify-start">Ultime uscite</h1>
    <div class="flex flex-row">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full justify-center">
          <div class="card md:card-side bg-base-100 h-128 shadow-lg md:h-64">
            <figure>
              <img src="https://www.ibs.it/images/9788804766520_0_0_536_0_75.jpg" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Il libro dei risvolti</h2>
              <h3 class="italic">Italo Calvino</h3>
              <p>Un libro di merda, terribile. Veramente pessimo, scritto coi piedi.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Aggiungi al carrello
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
            <figure>
              <img
                src="https://cdn.shortpixel.ai/spai11/q_lossy+w_1019+to_auto+ret_img/blogs.youcanprint.it/wp-content/uploads/2022/05/61xSNpivMML.jpeg"
                alt="Album"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Dante</h2>
              <h3 class="italic">Alessandro Barbero</h3>
              <p>Altro libro terribile. 0/10. Barbero, succhiami il pisnelo.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Aggiungi al carrello
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
            <figure>
              <img src="/public/sos.jpg" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Il bosco di merda</h2>
              <h3 class="italic">D. Ocane</h3>
              <p>Tu sai cosa si nasconde nella foresta di Bergamo? Yara Gambirasio. (spoiler)</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Icon icon="lucide:shopping-cart" class="h-5 w-5" />
                  Aggiungi al carrello
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
