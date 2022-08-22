<template>
    <div>
      <div class="blank">
    
      </div>
        <div class="service">
          <h1>Start your building journey…</h1>
        </div>
        <div class="container division">
           <div class="row division1">
          <div class="col-md-6 bd">
            <h1>
              Bespoke Build
            </h1>
            <p>
              Bespoke Build projects range from: property renovations, extensions, basement and loft conversions, new builds as well as commercial work.
            </p>
              <router-link :to="{ name: 'bespoke' }">
          <button to="/bespoke" type="button" class="btn btn-primary">
           Bespoke Build
            </button>
</router-link>
          </div>
           <div class="col-md-6">
             <img src="../assets/service1.jpg">
          </div>
        
        </div>
        <div class="row division1 reverse" style="margin-top:40px;">
           <div class="col-md-6 bd">
            <h1>
              Design, Planning & Build
            </h1>
            <p>
              Design, Planning & Build services include: concept and design, detailed architectural drawings, planning, building regulations, party wall agreements, build and maintenance.
            </p>
           <router-link :to="{ name: 'design' }">
            <button type="button" class="btn btn-primary">
              Design, Planning & Build
            </button>
          </router-link>
          </div>
           <div class="col-md-6">
             <img src="../assets/service2.jpg">
          </div>
         
          
        </div>
        </div>
    <!-- <WelcomeLatest/> -->
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

    </div>
</template>

<script>
// // import WelcomeLatest from './WelcomeLatest.vue'
export default{
  name:'ServicesPage',
  components:{
    // WelcomeLatest
  }
}
</script>

<style scoped>

.service{
  background-color: #7a8e8d;
  text-align: left;
  padding:40px;
  margin-bottom:40px;
 
}
.service h1 {
  color: white;
}
.blank{
  padding:60px;
}

.division{
  text-align: left;
  margin-bottom:80px;

}
.division img{
  width:100%
}
.btn {
  background: #1f909c;
  padding: 20px 30px;
  border-radius: 0;
  margin-top: 20px;
  margin-right: 150px;
}
.btn:hover {
  border: 2px solid #1f909c;
  background: white;
  color: black;
}
.reverse{
  display:flex;
  flex-direction: row-reverse;
}
.description2 p{
  color:grey;
    font-size:25px;  
}

.list {
  display: flex;

}

/* .list img:hover {
  transform: scale(1.1);

} */

.block-item{
    float: left;
    overflow: hidden;
    box-sizing: border-box;
}

.block-item a{
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    outline: 0;
}
.block-item a .over{
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

.block-item a .over h5{
     color: #f1ebeb;
     top:0;
    left: 0;
    margin-top: 55px;
     height: 30px;
    line-height: 30px;
    letter-spacing: 4px;
    width: 100%;
    text-transform: uppercase;
    z-index: 3;
}

.block-item a .over h5 i{
       
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

.block-item a img{
    width: 100%;
    height: 100%;
    transition: 0.1s;
}
.block-item a .over:hover{
 opacity: 5;
 height: 100%;
 width: 100%;
  color:white;
  left: 0px;
    bottom: 0px;
    right: 0px;
    top:0px;
}
@media only screen and (max-width: 425px) {
  
  .btn{
        margin: 0px;
    padding: 12px;
    font-size: 15px;
    width: 100%;
   }
   .bd h1{
        margin-top: 40px;
   }
   

}

@media only screen and (max-width: 572px) {
    /* html {
        font-size: 80%;
    } */
 
}
@media only screen and (max-width: 991px){
     .bd{
       padding-bottom: 50px;
    }
}
</style>