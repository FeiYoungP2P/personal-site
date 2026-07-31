<script setup lang="ts">
useSeoMeta({
  title: '个人技术主页｜电气自动化与软件开发',
  description: '电气自动化工程师，曾从事Java及Vue开发，关注PLC、AGV和工业软件开发。',
  ogTitle: '个人技术主页',
  ogDescription: '电气自动化、PLC、AGV及软件开发项目展示',
  ogType: 'website'
})
</script>

<template>
  <div>
    <HeroSection />
    <SkillsSection />

    <section id="projects" class="py-20">
      <UContainer>
        <h2 class="mb-8 text-3xl font-bold">
          项目经历
        </h2>

        <ProjectList />
      </UContainer>
    </section>

    <section id="contact" class="py-20 bg-elevated">
      <UContainer class="max-w-3xl">
        <h2 class="mb-8 text-3xl font-bold">
          联系我
        </h2>

        <ContactForm />
      </UContainer>
    </section>
  </div>
</template>
