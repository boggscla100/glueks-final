<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <div class="hero-box">
      <h1>Welcome to Gluek’s</h1>
      <p class="subtitle">
        Historic downtown Minneapolis beer hall serving German favorites, burgers,
        and live music.
      </p>


      <div class="buttons">
        <RouterLink to="/menu">View Menu</RouterLink>
        <RouterLink to="/hours">Hours</RouterLink>
        <RouterLink to="/live-events">Live Music &amp; Events</RouterLink>
      </div>
    </div>
  </section>

  <section class="home-photo">
    <img src="../assets/images/family.png" alt="Gluek's interior">
  </section>

</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
}

.hero-box {
  width: 100%;
  max-width: 1000px;
  background: #B5151AFF;
  color: white;
  border: 2px solid black;
  padding: 2rem 1.75rem;
  text-align: center;
}

.home-photo {
  margin-top: 2rem;
}

.home-photo img {
  width: 100%;
  max-width: 1100px;
  display: block;
  margin: 0 auto;
  border: 3px solid black;
}

.buttons {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.buttons a {
  border: 2px solid black;
  padding: 0.5rem 1.1rem;
  text-decoration: none;
  font-weight: 700;
  background: white;
  color: black;
  transition: 0.15s;
}

.buttons a:hover {
  background: #B5151AFF;
  color: white;
}

@media (min-width: 768px) {
  .buttons {
    flex-direction: row;
    justify-content: center;
  }
}
</style>

