<template>
  <div id="app">
    <nav class="navbar-expand-sm fixed-top navigation">
      <div class="row">
        <div class="col-md-2">
          <img
            src="https://www.totus.construction/wp-content/uploads/2015/02/totus-logo.png"
          />
        </div>
        <div class="col-md-10 navhead">
          <!-- <router-link to="/" class="navhead">getpage</router-link> |-->
          <router-link to="/" class="head">Home</router-link>
          <!-- <router-link :to="{ name: 'services'}" :style="{ backgroundColor: bgColor }" class="head">Services</router-link> -->
          <router-link to="/services" class="head" id="service">Services
          <router-link :to="{ name: 'bespoke'}" class="childhead">Bespoke Building Services</router-link>
          <router-link :to="{ name: 'design'}" class="childhead">Design, Planning and Build</router-link>
          </router-link>
          <router-link to="/project" class="head">Projects</router-link>
          <router-link to="/about" class="head">About Us</router-link>
          <router-link to="/architect" class="head"
            >Architect's Hub</router-link
          >
          <router-link to="/contact" class="head">Contact Us</router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  components: {
    FooterPage,
  },
  computed: {
      // navBarColor() {
      //    if (this.$route.path === "/services") { // if it is a dark route
      //       return "#ff0000"; // basically any light color you want
      //    }
      //    return "#000"; // the dark color of your choice.
      //   // return this.$route.meta.navBarColor
      // }
   }
  //  data() {
  //           return {
  //               bgColor: '#000'
  //           }
  //       }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigation {
  background: transparent;
  color: black;
  z-index: 100;
  position: absolute;
}
.childhead{
  display: none;
  /* display:block; */

}
#service:hover .childhead{
   display: block;
   color:black;
   text-decoration: none;
   bottom:50px;
   position:relative;
   top:0;
   
}
.navhead {
  padding-top: 50px;
  padding-left:80px;
}
.head {
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px;
}
.head:hover{
  color:black;
  text-decoration: underline;
}
</style>
