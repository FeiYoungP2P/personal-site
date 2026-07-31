<template>
  <div class="min-h-screen bg-default text-highlighted">
    <AppHeader />

    <main>
      <slot />
    </main>

    <footer class="border-t border-default py-8">
      <UContainer class="text-center text-sm text-muted">
        © {{ new Date().getFullYear() }} 个人技术主页
      </UContainer>
    </footer>
  </div>
</template>
