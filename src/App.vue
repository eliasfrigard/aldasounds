<template>
  <div id="navbar">
    <h1 id="title" @click="reloadPage" data-aos="fade-in">ALDA</h1>
    <div class="nav" data-aos="fade-in">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Story</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/music">Music</router-link>
      <router-link to="/live">Live</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="social" data-aos="fade-in">
      <a href="https://www.facebook.com/aldasounds" target="_blank">
        <i class="fab fa-facebook-square fa-lg"></i>
      </a>
      <a href="https://www.facebook.com/aldasounds" target="_blank">
        <i class="fab fa-youtube fa-lg"></i>
      </a>
      <a href="https://www.facebook.com/aldasounds" target="_blank">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a href="https://www.facebook.com/aldasounds" target="_blank">
        <i class="fab fa-spotify fa-lg"></i>
      </a>
    </div>

    <div class="burger" @click="openMobileNav" data-aos="fade-in">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>

  <router-view id="page-content" />
  <Footer class="footer" />
</template>


<script>
import Footer from '@/components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * @author Elias Frigård
 */
export default {
  name: 'App',
  components: {
    Footer
  },
  created () {
    AOS.init()
  },
  methods: {
    openMobileNav() {
      const nav = document.querySelector('.nav')
      const navLinks = document.querySelectorAll('.nav a')
      const burger = document.querySelector('.burger')

      nav.classList.toggle('nav-active')

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`
        }
      })

      burger.classList.toggle('toggle')
    },
    reloadPage() {
      window.location.href = "http://localhost:8080"
    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.header {
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  background-color: #042e42;
  color: rgb(230, 230, 230);
  padding: 15px 20px;
  width: 100%;
  border-radius: 2px;
  transition: all .3s;
  cursor: pointer;
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(4, 46, 66); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ec3c01; 
}

#app {
  font-family: myriad-pro, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #2c3e50;
}

#page-content {
  padding-top: 8vh;
}

#navbar {
  z-index: 1;
  position: fixed;
  top:_0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  background-color: rgb(4, 46, 66);
  -webkit-box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 19px 0px rgba(0,0,0,0.3);
}

#title {
  color: rgb(230, 230, 230);
  letter-spacing: 5px;
  margin:0px;
  width:25%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width:25%;
}

.social i {
  margin: 20px;
  color: rgba(230, 230, 230, 0.6);
}

.social i:hover {
  color: #ec3c01;
}

.social a {
  height: 60px;
}

.nav {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 0 100px;
}


.nav a {
  text-decoration: none;
  letter-spacing: 4px;
  font-weight: 500;
  font-size: 19px;
  color: rgb(230, 230, 230);
  font-family: 'Bad Script', cursive;
 }

 .nav a:hover {
  font-weight: bold;
}

.nav a.router-link-exact-active {
  font-weight: bold;
  color: rgb(230, 230, 230);
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: rgb(230, 230, 230);
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 1345px) {
  .nav {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  body, html {
    overflow-x: hidden;
  }
  .nav {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: rgb(4, 46, 66);
    flex-direction: column;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav a {
    opacity: 0;
  }

  .burger {
    display: block;
  }

  .nav-active {
    transform: translateX(0%);
  }
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px)
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px)
}
</style>
