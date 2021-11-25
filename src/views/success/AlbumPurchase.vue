<template>
  <div class="success-page">
      <h2 class="title">Thank you!</h2>
      <p class="pre-title">Your puchase was successfully processed.</p>
      <i class="fas fa-check"></i>
  </div>
</template>

<script>
  export default {
    name: 'AlbumPurchase',
    created() {
      const nav = document.querySelector('#navbar')

      nav.style.boxShadow = 'none'
      nav.style.MozBoxShadow = 'none'
      nav.style.webkitBoxShadow = 'none'
    }
  }
</script>

<style scoped>
#navbar {
  -webkit-box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: none;
  box-shadow: none;
}

.success-page {
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/');
  background-color: var(--main-color);
}

.fa-check {
  margin: 50px;
  font-size: 70px;
  color: green;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

.title {
  font-size: 70px;
  letter-spacing: 5px;
}

.subtitle {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
  text-align: center;
}


.pre-title {
  margin: 20px 0 0 0;
  letter-spacing: 2px;
}

.title, .subtitle, .pre-title {
  line-height: 125%;
  color: rgb(230, 230, 230);
}
</style>