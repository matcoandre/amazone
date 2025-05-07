<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex items-center h-screen w-screen justify-center">
    <div class="w-screen h-screen hidden md:inline">
      <img class="w-screen h-screen" src="https://picsum.photos/1920/1080/" alt="Background">
    </div>
    <div class="flex md:justify-center justify-end items-center w-md bg-base-100 h-screen">
      <div class="flex flex-col p-10">
        <div class="flex flex-col items-center justify-center space-y-5">
          <img src="/public/logo_white.png" class="w-40" />
            <h1 class="text-center text-2xl font-semibold dark:text-neutral-100">
              Welcome! 👋
            </h1>
          <form class="space-y-3 flex flex-col">
            <div class="flex flex-row space-x-1">
                <input type="text" class="input" placeholder="Name" />
                <input type="text" class="input" placeholder="Surname" />
            </div>
            <div>
            <label class="input validator">
                <Icon icon="lucide:user" class="h-[1em] opacity-50" />
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
            <label class="input validator">
              <Icon icon="lucide:mail" class="h-[1em] opacity-50"/>
              <input type="email" placeholder="mail@example.com" required />
            </label>
            <div class="validator-hint hidden">Enter valid email address</div>
            <div>
              <label class="input validator">
                <Icon icon="lucide:key-round" class="h-[1em] opacity-50" />
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
            <div>
              <label class="input validator">
                <Icon icon="lucide:key-round" class="h-[1em] opacity-50" />
                <input
                  type="password"
                  required
                  placeholder="Confirm password"
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
              <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-3" type="submit">Sign up</button>
            </div>
          </form>
          <div class="flex justify-center items-center">
            <p>
              Already have an account?
              <RouterLink to="/login" class="link">
                    Sign in!
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
