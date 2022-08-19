<template>
  <div class="info">
    <h1>Welcome to Totus</h1>
    <div class="description">
      <p>
        Totus is a family-run building company operating in London and the Home
        Counties. Every home is unique and should be perfectly built and
        designed to meet your needs. The Totus team is made up of talented and
        experienced building professionals who will discuss all the options
        available and work with you to develop the best solution for your home.
      </p>
    </div>

    <div class="" style="background-color: grey">
      <div class="container row intro">
        <div class="col-md-6">
          <p>
            When it comes to any building project, there is a wealth of
            information available and the options can be overwhelming. Whether
            you’re starting the process of working your way up the property
            ladder, remodelling your living space, or building a dream home, it
            can be tricky to know where to start. We are here to support you on
            every step of the journey.
          </p>
        </div>
        <div class="col-md-6">
          <img src="../assets/vehicle.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="container row intro reverse">
          <div class="col-md-6">
          <p>
            When it comes to any building project, there is a wealth of
            information available and the options can be overwhelming. Whether
            you’re starting the process of working your way up the property
            ladder, remodelling your living space, or building a dream home, it
            can be tricky to know where to start. We are here to support you on
            every step of the journey.
          </p>
        </div>
        <div class="col-md-6">
          <img src="../assets/vehicle2.jpg" class="img-fluid" />
        </div>
      
      </div>
    </div>

    <div class="container">
      <div class="row description1">
        <div class="col-md-6">
          <h1 class="ready">Ready To Go?</h1>
          <p class="paragraph">
            If you have architectural plans and are looking for professional
            builders, find out more about the Totus Bespoke Build service.
          </p>
          <router-link :to="{ name: 'bespoke' }">
            <button to="/bespoke" type="button" class="btn btn-primary">
              Bespoke Build
            </button>
          </router-link>
        </div>
        <div class="col-md-6">
          <h1 class="start" style="">Just Starting Out?</h1>
          <p class="start1">
            If you’re at the beginning of your journey and need someone to take
            care of everything, find out more about the Totus Design, Planning &
            Build service.
          </p>
          <router-link :to="{ name: 'design' }">
            <button type="button" class="btn btn-primary">
              Design, Planning & Build
            </button>
          </router-link>
        </div>
      </div>
    </div>



    <!-- hhh -->
    <div class="description2">
      <h1>Latest Projects</h1>
      <p>
        Interested? Take a look at some of our favourite projects and get a
        flavour of our work…
      </p>
      <div class="row m-0 list">
        <div class="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-0 block-item">
            <a href="https://www.totus.construction/projects/carlton-gardens-ealing/">
            <div class="over">
            <h5>
                Carlton Gardens, Ealing W5
                 <i>
                Residential
            </i>
            </h5>
           </div>
        <img src="../assets/list.jpg" class="img-fluid"/>
        </a>
        </div>
        
        <div class="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-0 block-item">
            <a href="https://www.totus.construction/projects/westgrove-walton-kt12-2-2/">
            <div class="over">
            <h5>
                West Grove, Walton on Thames KT12
                 <i>
                Residential
            </i>
            </h5>
           </div>
        <img src="../assets/list2.jpg" class="img-fluid"/>
        </a>
        </div>
         
         <div class="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-0 block-item">
            <a href="https://www.totus.construction/projects/clydesdalegardens/">
            <div class="over">
            <h5>
                Extension, Richmond TW10
                 <i>
                Residential
            </i>
            </h5>
           </div>
           <img src="../assets/list3.jpg" class="img-fluid"/>
        </a>
        </div>
         <div class="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-0 block-item">
            <a href="https://www.totus.construction/projects/flats-south-norwood/">
            <div class="over">
            <h5>
                12 Flats, Norwood SE25
                 <i>
                Residential, Commercial
            </i>
            </h5>
           </div>
        <img src="../assets/list4.png" class="img-fluid"/>
        </a>
        </div>

      </div>
    </div>
    <!-- hhh -->
   
   
   
    <!-- <WelcomeLatest /> -->
    <br>
    <div class="houzz">
      <h1>Best of Houzz</h1>
      <p>
        We’re proud to have been awarded the Best of Houzz Service award for the
        last five years!
      </p>
      <div class="container cards">
        <img
          src="../assets/best-of-houzz.png"
          class="img-fluid"
          style="width: 90%; margin: auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
// // import WelcomeLatest from "./WelcomeLatest.vue";
export default {
  name: "WelcomePage",
  components: {
    // WelcomeLatest,
  },
};
</script>

<style scoped>
.info {
  margin-top: 120px;
}
.info h1 {
  font-size: 30px;
}
.description{
  padding: 15px 250px 60px 250px;
  font-size: 28px;
  color: grey;
}
.btn {
  background: #1f909c;
  padding: 11px 20px;
  border-radius: 0;
  margin-top: 20px;
  margin-right: 150px;
}
.btn:hover {
  border: 2px solid #1f909c;
  background: white;
  color: black;
}
.description1 {
  margin: 80px 0 80px 0;
  text-align: left;
}
.description1 p {
  color: grey;
  font-size: 25px;
  padding: 18px 0 18px 0;
}
.description2 p {
  color: grey;
  font-size: 25px;
}

.list {
  display: flex;
}
/* .list img:hover {
  transform: scale(1.1);

} */
.reverse{
  display:flex;
  flex-direction: row-reverse;
}
.block-item {
  float: left;
  overflow: hidden;
  box-sizing: border-box;
}

.block-item a {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  outline: 0;
}
.block-item a .over {
  position: absolute;
  top: 24px;
  left: 24px;
  bottom: 50px;
  right: 24px;
  width: auto;
  height: auto;
  z-index: 2;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease-in-out 0.1s;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
}

.block-item a .over h5 {
  color: #f1ebeb;
  top: 0;
  left: 0;
  margin-top: 55px;
  height: 30px;
  line-height: 30px;
  letter-spacing: 4px;
  width: 100%;
  text-transform: uppercase;
  z-index: 3;
}

.block-item a .over h5 i {
  width: 100%;
  display: block;
  left: 0;
  /* bottom: -20px; */
  font-style: normal;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #f1ebeb;
  letter-spacing: 2px;
  transition: all 0.3s, transform 0.4s;
  transform: translateY(24px);
}

.block-item a img {
  width: 100%;
  height: 100%;
  transition: 0.1s;
}
.block-item a .over:hover {
  opacity: 5;
  height: 100%;
  width: 100%;
  color: white;
  left: 0px;
  bottom: 0px;
  right: 0px;
  top: 0px;
}
/* .block-item a h5:hover{
    opacity: 5;
   
} */

.houzz {
  margin-top: 80px;
}

.houzz p {
  font-size: 28px;
  color: grey;
}
.cards {
  display: flex;
}
.intro {
  padding: 40px 0px 40px 0;
  color: white;
  font-size: 23px;
  text-align: left;
  letter-spacing: 0.05em;
  margin: 0 auto;
}
.intro img {
  width: 100%;
}
@media only screen and (max-width: 320px) {
   .info{
    margin-top:30px;
   }
   .description{
        padding: 12px 22px 10px;
   }
   .intro p{
    text-align:center;
   }
   .intro img{
    margin:0 auto
   }
   .description1 .ready{
        padding: 0;
    text-align: left;
   }
   .description1 .paragraph{
        font-size: 18px;
   }
   .description1 .btn{
    /* margin-top: -10px;
    padding:14px 8px; */
        margin: 0px;
    padding: 12px;
    font-size: 15px;
    width: 100%;
   }
   .description1 .start{
    margin-top: 50px;
    text-align: center;
    padding: 0;
    font-size: 25px !important;
   }
   .description1 p{
    margin-top: 30px;
    padding: 0;
    font-size: 16px !important;
   }
   .start1{
        text-align: center;
    font-size: 20px;
   }

}

@media only screen and (max-width: 572px) {
    /* html {
        font-size: 80%;
    } */
    .description{
      padding:30px;
      text-align: center;
      font-size:20px;
    }
     .btn{
      margin-bottom:20px;
    }
    .houzz h1{
       padding-top:40px;
    }
    .houzz p{
      font-size:18px;
    }
    .houzz img{
      margin:0 auto;
    }
}
@media only screen and (max-width: 991px){
   .info h1{
    /* padding:0 30px */
   }
   .description{
      /* padding:40px 100px 40px 100px; */
      text-align: center;
      font-size:18px;
    }
    .intro p{
      font-size:15px;
    }
   
}
</style>
