<template>
    <div>
      <div class="blank">
    
      </div>
        <div class="service">
          <h1>Start your building journey…</h1>
        </div>
        <div class="container division">
           <div class="row division1">
          <div class="col-md-6">
            <h1>
              Bespoke Build
            </h1>
            <p>
              Bespoke Build projects range from: property renovations, extensions, basement and loft conversions, new builds as well as commercial work.
            </p>
              <button type="button" class="btn btn-primary">
          Bespoke Build
        </button>
          </div>
           <div class="col-md-6">
             <img src="../assets/service1.jpg">
          </div>
        
        </div>
        <div class="row division1" style="margin-top:40px;">
          
           <div class="col-md-6">
             <img src="../assets/service2.jpg">
          </div>
          <div class="col-md-6">
            <h1>
              Design, Planning & Build
            </h1>
            <p>
              Design, Planning & Build services include: concept and design, detailed architectural drawings, planning, building regulations, party wall agreements, build and maintenance.
            </p>
            <button type="button" class="btn btn-primary">
          Design, Planning & Build
        </button>
          </div>
          
        </div>
        </div>
    <WelcomeLatest/>

    </div>
</template>

<script>
import WelcomeLatest from './WelcomeLatest.vue'
export default{
  name:'ServicesPage',
  components:{
    WelcomeLatest
  }
}
</script>

<style scoped>

.service{
  background-color: #7a8e8d;
  text-align: left;
  padding:80px;
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
</style>