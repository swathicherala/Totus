<template>
  <div id="app">
    <nav class="navbar-expand-sm fixed-top navigation">
      <div class="row">
        <div class="col-md-2">
           <router-link to='/'>
                <img
            src="https://www.totus.construction/wp-content/uploads/2015/02/totus-logo.png"
           style="padding-left: 80px;" />
          </router-link>

        </div>
        <div class="col-md-10 navhead">
          <!-- <router-link to="/" class="navhead">getpage</router-link> |-->
          <router-link to="/" class="head">Home</router-link>
          <!-- <router-link :to="{ name: 'services'}" :style="{ backgroundColor: bgColor }" class="head">Services</router-link> -->
          <router-link to="/services" class="head" id="service"
            >Services
            <div class="childhead">
              <router-link to="/bespoke" id="child"
                >Bespoke Building Services</router-link
              >
              <router-link to="/design" id="child"
                >Design, Planning and Build</router-link
              >
            </div>
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
  },
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
.childhead {
  display: none;
  background-color: white;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: 40%;
  top: 90%;
  text-align: left;
  padding: 50px 30px 22px 22px;
  margin-top: -10px;
  margin-left: -50px;
  /* border-top: none; */
  width: 100px;
  z-index: 9999;
  transition-property: width;
  transition-duration: 5s;
  transition-delay: 2s;
}
.childhead #child {
  display: block;
  color: grey;
  text-decoration: none;
  font-size: 12px;
  padding: 12px 12px 12px 0;
}
.childhead #child:hover{
  color:black;
}

#service:hover .childhead {
  display: block;
  width: 220px;
}
.navhead {
  padding-top: 50px;
  padding-left: 80px;
}
.head {
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  margin-left:40px;
  padding: 0 0 47px 0;
}
.head:hover {
  color: black;
  /* text-decoration: underline; */
  border-bottom: 4px solid black;
}
</style>
