<script setup>
import items from '../data/items.js'
</script>

<template>
  <section>
    <h1 class="section-title">Lunch &amp; Dinner Menu</h1>

    <div class="glueks-card">
      <ul class="menu-list">
        <li v-for="item in items" :key="item.id" class="menu-item">
          <div class="menu-line">
            <span class="name">{{ item.name }}</span>
            <span class="dots"></span>
            <span class="price">\${{ item.price.toFixed(2) }}</span>
          </div>
          <p class="desc">{{ item.description }}</p>
          <p class="meta">
            <span>{{ item.category }}</span>
            <span v-if="item.isVegetarian"> • Vegetarian</span>
            <span v-if="item.isSpicy"> • Spicy</span>
            <span> • {{ item.calories }} cal</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Times New Roman", serif;
  text-transform: uppercase;
  color: #B5151AFF;
  letter-spacing: 0.05em;
  font-size: 1.4rem;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item + .menu-item {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 2px solid black;
}

.menu-line {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.name {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: black;
}

.dots {
  flex: 1;
  border-bottom: 1px dotted black;
  margin: 0 0.5rem;
}

.price {
  font-weight: 700;
  color: #B5151AFF;
}

.desc {
  margin: 0.25rem 0 0.125rem;
  color: var(--brand-black);
}

.meta {
  font-size: 0.8rem;
  color: #555;
}
</style>