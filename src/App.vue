<template>
  <div id="app">
    <div id="font-imp">
      <nav class="navbar navbar-expand-lg navigation" id="navbar" style="padding:0">
        <div class="container" style="padding:0">
          <div class="myclass" id="navcolor" v-show="myStyle">
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
                  <router-link class="list" aria-current="page" to="/bespoke" id="child"
                    >Bespoke Building Services</router-link
                  >
                </li>
                <li class="nav-item space" id="child">
                  <router-link class="list" aria-current="page" id="child" to="/design" 
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
  data () {
    return {
      scrollValue:'',
       myStyle:{
            backgroundColor:"#16a085" 
            },
            // colorchange:''
    }
  },
mounted(){
  // this.changeBag()
  window.addEventListener('scroll',this.changeBag)
},
methods:{
   changeBag(){
    // var navbar=document.getElementById('navcolor')
    var scrollvalue=window.scrollY
    this.scrollValue=scrollvalue
    console.log(scrollvalue)
    if(scrollvalue < 150){
      // navbar.classList.add('bgcolor')
      this.myStyle=true
    }else{
      // navbar.classList.remove('bgcolor')
      this.myStyle=false
    }
  }

},
       
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
.myclass .colorChange{
  background: green;
}
body {
  height:300vh;
  background:    
    linear-gradient(#fff,#fff) 0 100px/100% 100% no-repeat navbar,
    linear-gradient(to bottom, blue 300px, red 0) center/100% 100%;
}
.navigation {
  background: transparent;
  color: black;
  z-index: 100;
  position: absolute;
}
.bgcolor{
  background: white;
  color:black;
  transition:all 1s;
}
.navbarbtn{
  background: white;
}
.navbar-brand{
      padding-left: 34px;
}
.childhead {
  display: none;
  background-color: white;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: 45%;
  top: 80%;
  text-align: left;
  /* padding: 20px 30px 22px 22px; */
  margin-top: -10px;
  padding-left: -50px;
  /* border-top: none; */
  width: 100%;
  z-index: 9999;
  transition: transform 0.2s;
}
#navcolor{
  /* background: rgba(72 122 180 / .5); */
}
.childhead #child {
  display: block;
  color: grey;
  text-decoration: none;
  font-size: 12px;
  padding: 10px 0 5px 5px;
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
  background: grey;
  z-index: 100;
  position: fixed;
   padding-top: 72px;
  /* padding-left: 80px; */
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
  color: black;
}
nav a.router-link-exact-active {
  color: black;
  border: none;
}

@media only screen and (max-width: 425px) {
   .logo-svg{
    width:100px;
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
    .childhead{
    left:25%;
    top:55%;
  }
   
}

@media only screen and (max-width:768px){
   .childhead{
    left:15%;
    top:55%;
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
        /* padding-top: 25px !important; */
         background: black;
         /* padding:20px; */
         width:100%;
         text-align:center;
    }

    .navbar-change .nav-item .list{
      padding-bottom:20px;
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
    color:white;
  }
}

@media only screen and (max-width: 1200px){
  .list{
    padding:10px
  }
 
}
/* .navigation{
  background: white;
} */
</style>
