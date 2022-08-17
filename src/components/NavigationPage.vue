<template>
  <div class="navigation">
      <b-nav align="right">
         <div class="brand">
        <img
          src="https://www.totus.construction/wp-content/uploads/2015/02/totus-logo.png"
          class="img-fluid"
        />
      </div>
 
   <b-nav-item active class="head" to="/">Home</b-nav-item>
        <b-nav-item class="head" to="/services">Services</b-nav-item>
        <b-nav-item class="head">Projects</b-nav-item>
        <b-nav-item class="head" to="/about">About Us</b-nav-item>
        <b-nav-item class="head">Architect's Hub</b-nav-item>
        <b-nav-item class="head">Contact Us</b-nav-item>
        <router-view />
      </b-nav>

  </div>
</template>

<script>
// import WelcomePage from './WelcomePage.vue'
import router from "../router/index";
export default {
  name: "NavigationPagePage",
  router: router,
  components: {
    // WelcomePage
  },
};
</script>

<style scoped>

 .navigation {
  background: transparent;
  color: black;
  z-index: 100;
  
}


.brand img {
  margin-right:274px;
}

.head a {
  color: black;
  text-transform: uppercase;
}

/* .navitem {
  display: flex;
  align-items: center;
  justify-content: center;
} */
.justify-content-end {
 
}
</style>
