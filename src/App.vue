<template>
  <div id="app">
    <div id="font-imp">
      <nav class="navbar navbar-expand-lg navigation">
        <div class="container">
          <div class="myclass">
            <!-- ACE Logo start -->
            <a href="#top" class="navbar-brand linkss" to="/">
              <img
                src="https://www.totus.construction/wp-content/uploads/2015/02/totus-logo.png"
                class="logo-svg ace-logo"
                alt=""
              />
            </a>
            <!-- ACE Logo End -->
            <!-- respo button start-->
            <div class="data">
              <button
                class="navbar-toggler navbarbtn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <!-- respo button end -->
            <!-- links starts -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                class="navbar-change navbar-nav ms-auto myul text-start mb-2 mb-lg-0"
              >
                <li class="nav-item space">
                  <router-link class="list" aria-current="page" to="/"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item space" id="service">
                  <router-link class="list" aria-current="page" to="/services"
                    >Services</router-link
                  >
               
                  <ul class="childhead">
                    <li class="nav-item space" id="child">
                  <router-link class="list" aria-current="page" to="/about" id="child"
                    >Bespoke Building Services</router-link
                  >
                </li>
                <li class="nav-item space" id="child">
                  <router-link class="list" aria-current="page" id="child" to="/contact" 
                    >Design, Planning and Build</router-link
                  >
                </li>
                  </ul>
                 </li>
                <li class="nav-item space">
                  <router-link class="list" aria-current="page" to="/project"
                    >Projects</router-link
                  >
                </li>
                <li class="nav-item space">
                  <router-link class="list" aria-current="page" to="/about"
                    >About Us</router-link
                  >
                </li>
                <li class="nav-item space">
                  <router-link class="list" aria-current="page" to="/architect"
                    >Architect's Hub</router-link
                  >
                </li>
                <li class="nav-item space">
                  <router-link class="list" aria-current="page" to="/contact"
                    >Contact Us</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- links ends -->
            <!-- div tag -->
          </div>
          <!-- end -->
        </div>
     
      
      </nav>
      
      <router-view></router-view>
    </div>
    <!-- <router-view /> -->
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  components: {
    FooterPage
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

<style scoped>
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
  left: 38%;
  top: 80%;
  text-align: left;
  /* padding: 20px 30px 22px 22px; */
  margin-top: -10px;
  padding-left: -50px;
  /* border-top: none; */
  width: 100px;
  z-index: 9999;
  transition: transform 0.2s;
}
.childhead #child {
  display: block;
  color: grey;
  text-decoration: none;
  font-size: 12px;
  padding: 15px;
}
.childhead #child:hover {
  color: black;
}

#service:hover .childhead {
  display: block;
  width: 220px;
}
.myclass {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  z-index: 100;
  position: fixed;
   padding-top: 50px;
  padding-left: 80px;
}
.myul {
 padding-top: 10px;

}
.myul .space{
 padding-right: 28px;
 color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}
.myul .space .list{
 text-transform: uppercase;
  text-decoration: none;
}
.list{
  /* font-size:10px !important; */
  }
/* .head {
  color: black;
  font-weight: bold;
  padding: 0 0 47px 0;
} */
.head:hover {
  color: black;
  /* text-decoration: underline; */
  border-bottom: 4px solid black;
}

.main-ele {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#font-imp {
  /* font-family: "Roboto Slab", serif;
  position: relative; */
  /* background: black; */
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: grey;
}
nav a.router-link-exact-active {
  color: black;
  border: none;
}
@media only screen and (max-width: 320px) {
   .logo-svg{
    width:100px;
   }  
}
@media only screen and (max-width: 991px) {
    html {
        font-size: 55%;
    }
    .navbar{
      width:100%;
    }
    .navbar, .container{
      padding:0 !important;
    }
    .myclass {
        display: contents;
    }
    .navbar-change {
        transition: 0.9s ease-in linear !important;
        /* padding-left: 20px; */
        padding-top: 25px !important;
         background: black;
         width:100%;
         text-align:center;
    }
   .navbar-brand{
    padding-left:20px;
   }
   .data{
    padding-right:20px;
   }
  .navhead .head{
    display: block;
    color:white
  }
  .myul .space a{
    padding:10px;
    color:white;
  }
}
@media only screen and (max-width: 580px) {
    /* html {
        font-size: 80%;
    } */
    .navbar-brand{
    padding-left:20px;
   }
   .data{
    padding-right:20px;
   }
   
}
@media only screen and (max-width: 1200px){
}
/* .navigation{
  background: white;
} */
</style>
