<template>
  <div>
    <header>
      <nav class="p-4 bg-gray-100">
        <h1 class="text-xl font-bold">Nav</h1>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="p-4 mt-8 text-center text-gray-600">
      <p>&copy; 2025 My App</p>
      <p>footer</p>
    </footer>
  </div>
</template>

<script setup></script>
