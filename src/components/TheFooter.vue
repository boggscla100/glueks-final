<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p>Gluek's Bar &amp; Restaurant · 16 N 6th St · Minneapolis, MN 55403</p>
      <p>party@glueks.com · 612.338.6621</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.site-footer {
  background: black;
  border-top: 4px solid #B5151AFF;
  color: white;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.25rem 1.75rem;
  text-align: center;
  font-size: 0.85rem;
}

.footer-inner p {
  margin: 0.2rem 0;
}
</style>