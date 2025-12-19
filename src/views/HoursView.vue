<template>
  <section class="hours-page">

    <h1>Hours</h1>

    <div class="hours-layout">

      <div class="hours-box">
        <p><strong>Monday–Thursday:</strong> 11:00am – 11:00pm</p>
        <p><strong>Friday–Saturday:</strong> 11:00am – 1:00am</p>
        <p><strong>Sunday:</strong> Closed</p>
      </div>

      <img class="building" src="../assets/images/building.png" alt="Restaurant interior">

    </div>



  </section>
</template>

<style scoped>
.hours { display: flex; flex-direction: column; gap: 1rem; }
.card {
  border: 20px solid #b5151a;
  padding: 1rem;
  background: white;
}
.note { font-size: 0.9rem; color: black; }

.hours-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.5rem;
}

.hours-box {
  background: white;
  border: 15px solid #B5151AFF;
  padding: 3rem 1.75rem;
  max-width: 320px;
  height: 300px;
}

.building {
  width: 200px;
  border: 3px solid black;
  box-shadow: 0 4px 0 black;
}


</style>