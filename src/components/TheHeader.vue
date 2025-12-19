<template>
  <header class="site-header">
    <div class="header-inner">
      <h1 class="logo-text">Gluek's</h1>

      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/hours">Hours</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
        <RouterLink to="/live-events">Live Events</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.site-header {
  background: black;
  border-bottom: 4px solid #B5151AFF;
  color: white;
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-family: "Times New Roman", Georgia, serif;
  color: white;
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.main-nav a {
  font-weight: 600;
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  padding-bottom: 2px;
}

.main-nav a.router-link-active {
  border-bottom: 2px solid #B5151AFF;
}
</style>