<template>
  <div class="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased">
    <!-- 統一 Header（品牌識別 + 導覽列） -->
    <LayoutNewsNavBar />

    <!-- 主內容區 -->
    <main role="main" class="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-6">
      <slot />
    </main>

    <!-- 頁面 footer -->
    <LayoutPageFooter />
  </div>
</template>
