<template>
  <!-- Navigation -->
  <Navigation />

  <!-- Page Content -->
  <router-view id="page-content" v-slot="{ Component }" class="ui component"> 
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- Footer -->
  <Footer class="footer" />

  <!-- Audio Player (absolute)-->
  <Player class="audio-player" @close-player="closePlayer" />

  <!-- To Top Button. -->
  <div class="to-top">
    <button class="action-btn-big" @click="toTop">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>


<script>
import Footer from '@/components/Footer.vue'
import Player from '@/components/Player.vue'
import Navigation from '@/components/Navigation.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * @author Elias Frigård
 */
export default {
  name: 'App',
  components: {
    Footer,
    Player,
    Navigation
  },
  data() {
    return {
      playerIsActive: true
    }
  },
  created () {
    AOS.init()
  },
  computed: {
    mobile() {
      return screen.width < 992
    }
  },
  methods: {
    reloadPage() {
      window.location.href = "/"
    },
    closePlayer() {
      document.querySelector('.audio-player').remove()
      document.querySelector('.to-top').style.bottom = '25px'
      this.playerIsActive = false

      if (this.mobile) {
        const nav = document.querySelector('.nav')

        nav.style.height = "92vh"
      }
    },
    toTop() {
      window.scrollTo(0, 0)
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

::selection {
  background-color: rgb(4, 46, 66);
  color: white;
}

#page-content {
  padding-top:8vh;
}

body {
  overflow-x: hidden;
}

.header, .header-disabled {
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: rgb(230, 230, 230);
  padding: 15px 20px;
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
}

.header {
  background-color: #042e42;
}

.header-disabled {
    background-color: #3b3d3d;
    cursor:default;
    opacity: 0.8;
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

.to-top {
  position: fixed;
  bottom:  100px;
  left: 44px;
  height: 50px;
  width: 50px;
  background-color: rgb(4, 46, 66);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 5px;
}

.action-btn-big {
  background-color: transparent;
  border: 0;
  font-size: 30px;
  color: rgb(230, 230, 230);
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
}

@media screen and (max-width: 1345px) {
  .nav {
    padding: 0;
  }

  .title {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .to-top {
    display: none;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
