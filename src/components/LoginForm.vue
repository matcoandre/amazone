<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex items-center h-screen w-screen">
    <div class="w-screen h-screen">
      <img class="w-screen h-screen" src="https://picsum.photos/1920/1080/" alt="Background">
    </div>
    <div class="flex justify-end items-center w-md bg-base-100 h-screen">
      <div class="flex flex-col p-10">
        <div class="flex flex-col items-center justify-center space-y-5">
          <img src="/logo_white.png" class="w-40" />
            <h1 class="text-center text-2xl font-semibold dark:text-neutral-100">
              Welcome back! 👋
            </h1>
          <form class="space-y-3">
            <div>
              <label class="input validator">
                <Icon icon="lucide:user" class="h-[1em] opacity-50"></Icon>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  id="username"
                  v-model="username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="3"
                  maxlength="30"
                  title="Only letters, numbers or dash"
                />
              </label>
              <p class="validator-hint hidden">
                Must be 3 to 30 characters
                <br />containing only letters, numbers or dash
              </p>
            </div>
            <div>
              <label class="input validator">
                <Icon icon="lucide:key-round" class="h-[1em] opacity-50"></Icon>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p class="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
              </p>
            </div>
            <div class="flex justify-center items-center">
              <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-3" type="submit">Sign in</button>
            </div>
          </form>
          <div class="flex justify-center items-center">
            <p>
              First time?
              <RouterLink to="/register" class="link">
                    Sign up!
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
const d = new Date()
const hour = d.getHours()
var cheerText = ''
var cheerElement = document.getElementById('cheer')

if (hour >= 18 || hour < 0) cheerText = 'Buonasera! 👋🏻'
else if (hour >= 6 && hour < 12) cheerText = 'Buongiorno! ☀️'
else if (hour >= 12 && hour < 18) cheerText = 'Buon pomeriggio! 👋🏻'
else cheerText = 'Buonanotte! 😴'

cheerElement.innerText(cheerText)
</script> -->
