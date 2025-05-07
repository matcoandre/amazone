<template>
  <div>
    <main
      class="animate__animated animate__zoomIn animate__faster w-full max-w-lg rounded-xl bg-white shadow-xl drop-shadow-xl duration-100 dark:bg-neutral-900"
      x-transition
    >
      <div x-data="{ currentView: 'all' }" class="flex flex-col items-center justify-center p-10">
        <div
          x-show="currentView == 'all'"
          class="flex flex-col items-center justify-center transition"
        >
          <img src="" class="mb-5 hidden w-40 dark:inline-block" />
          <img src="" class="mb-5 w-40 dark:hidden" />
          <h1
            id="cheer"
            class="text-center text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
          >
            <!-- Gestito dalla funzione JS/jQuery -->
          </h1>
          <h3 class="text-xl text-neutral-600 dark:text-neutral-300">Accedi per continuare</h3>
          <form id="login" class="flex flex-col" onsubmit="return event.preventDefault()">
            <div class="flex flex-col items-center justify-center space-y-2 text-xl">
              <input
                id="user"
                type="text"
                name="email"
                class="mt-2 rounded-lg border-slate-500 px-1"
                placeholder="Nome utente"
                required
              />
              <input
                id="pw"
                type="password"
                name="pw"
                class="mt-1 rounded-lg border-slate-500 px-1"
                placeholder="Password"
                required
              />
            </div>
            <div class="flex flex-grow items-center justify-center space-x-2">
              <button
                id="submit"
                type="submit"
                name="submit"
                class="mx-auto mt-4 w-40 min-w-max rounded-lg border-2 px-1"
                onclick="pasuser(this.form)"
              >
                Accedi
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const d = new Date()
const hour = d.getHours()
var cheerText = ''
var cheerElement = document.getElementById('cheer')

if (hour >= 18 || hour < 0) cheerText = 'Buonasera! 👋🏻'
else if (hour >= 6 && hour < 12) cheerText = 'Buongiorno! ☀️'
else if (hour >= 12 && hour < 18) cheerText = 'Buon pomeriggio! 👋🏻'
else cheerText = 'Buonanotte! 😴'

cheerElement.innerText(cheerText)
</script>
