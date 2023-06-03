<template>
  <div id="navbar">
    <!-- Page title. -->
    <h1 id="title" @click="reloadPage" data-aos="fade-in">{{ title }}</h1>

    <!-- Navigation items. -->
    <div class="nav">
      <router-link v-for="page in pages" :to="page.link" :key="page.title" @click="toggleMobileNav">{{
        page.title
      }}</router-link>
    </div>

    <!-- Social Media icons. -->
    <div class="social" data-aos="fade-in">
      <a v-for="social in media" :key="social.link" :href="social.link" target="_blank">
        <i :class="social.logo"></i>
      </a>
    </div>

    <!-- Mobile burger. -->
    <div class="burger" @click="toggleMobileNav" data-aos="fade-in">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      title: 'ALDA',
      logo: '',
      // Pages to appear in navigation.
      // Does not assure the existence of these pages.
      pages: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'About',
          link: '/about',
        },
        {
          title: 'News',
          link: '/news',
        },
        {
          title: 'Live',
          link: '/live',
        },
        {
          title: 'Contact',
          link: '/contact',
        },
      ],
      // Media links and logos by fontawesome.
      media: [
        {
          link: 'https://www.facebook.com/aldasounds',
          logo: 'fab fa-facebook-square fa-lg',
        },
        {
          link: 'https://www.youtube.com/channel/UC1CSzPlVfH7RYlWo-ulYDaw',
          logo: 'fab fa-youtube fa-lg',
        },
        {
          link: 'https://www.instagram.com/aldasounds/',
          logo: 'fab fa-instagram fa-lg',
        },
        {
          link: 'https://open.spotify.com/album/6ewLQQEhzrgIvEOXWtlYPV?si=rbuc5Ux3QTeIF5Cwxgh9_g&dl_branch=1',
          logo: 'fab fa-spotify fa-lg',
        },
      ],
    }
  },
  methods: {
    toggleMobileNav() {
      const nav = document.querySelector('.nav')
      nav.classList.toggle('nav-active')

      const navLinks = document.querySelectorAll('.nav a')
      const burger = document.querySelector('.burger')

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`
        }
      })

      burger.classList.toggle('toggle')
    },
    reloadPage() {
      window.location.href = '/'
    },
  },
}
</script>

<style scoped>
#navbar {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6.5vh;
  min-height: 50px;
  background-color: var(--main-color);
}

#title {
  color: rgb(230, 230, 230);
  letter-spacing: 5px;
  margin: 0px;
  width: 25%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
}

.nav {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 0 100px;
  margin-top: 7px;
}

.nav a {
  text-decoration: none;
  letter-spacing: 4px;
  font-weight: 500;
  font-size: 18px;
  color: rgb(230, 230, 230);
  font-family: 'Bad Script', cursive;
  font-weight: bold;
  padding-bottom: 4px;
}

.nav a:hover {
  font-weight: bold;
}

.nav a.router-link-exact-active {
  font-weight: bold;
  color: rgb(230, 230, 230);
  border-bottom: 2px solid rgb(230, 230, 230);
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}

.social i {
  margin: 15px;
  color: rgba(230, 230, 230, 0.6);
  opacity: 0.6;
}
.social i:hover {
  opacity: 1;
}

.social .fa-facebook-square:hover {
  color: rgb(49, 92, 177);
}

.social .fa-youtube:hover {
  color: rgb(255, 0, 0);
}

.social .fa-instagram:hover {
  color: rgb(251, 173, 80);
}

.social .fa-spotify:hover {
  color: rgb(30, 215, 96);
}

.social a {
  display: flex;
  align-items: center;
  font-size: 16px;
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

@media screen and (max-width: 768px) {
  .nav {
    position: absolute;
    right: 0px;
    height: calc(92vh - 75px);
    top: 8vh;
    background-color: var(--main-color);
    flex-direction: column;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.4s ease-in;
    align-items: center;
  }

  .burger {
    display: block;
  }

  .nav-active {
    transform: translateX(0%);
  }

  .social {
    display: none;
  }

  .to-top {
    display: none;
  }

  .nav a {
    font-size: 25px;
  }
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
