<template>
<div class="main" style="background-color: #f9f9f9;">
    <div class="blank">
    
      </div>
    <div class="design">
      <h1>Design, Planning & Build</h1>
    </div>
    <div class="container">
     <div>
        <h1>
        What We Do
      </h1>
      <p class="introduction">
        If you are at the beginning of your development journey we offer an end-to-end, stress-free package, which includes design, planning and build. The Totus specialist team can help smooth the way with:
      </p>
     </div>
    <div class="row">
       <div class="col-md-6">
        <img src="../assets/design1.jpg"/>
       </div>
       <div class="col-md-6 texts">
         <h1>
           Concept and Design
         </h1>
         <p>
           It’s simple – give us your brief and we’ll come up with a variety of inspirational, functional and practical concepts to suit your budget and needs.
         </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
       </div>
    </div>

    <div class="row">
      <div class="col-md-6 texts">
         <h1>
           Local Authority’s Planning Permission

         </h1>
         <p>
  The Totus team is at hand to submit detailed plans and ensure the legal process for property development is adhered to.
         </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
       </div>
       <div class="col-md-6">
        <img src="../assets/design2.jpg"/>
       </div>
       
    </div>
    
     <div class="row">
       <div class="col-md-6">
        <img src="../assets/design3.jpg"/>
       </div>
      <div class="col-md-6 texts">
         <h1>
           Party Wall Agreements

         </h1>
         <p>
          We make sure your closest neighbours are happy with the work you propose. Our experienced surveyors will take care of all the necessary party wall notices.
         </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
       </div>
       
       
    </div>

     <div class="row">
      <div class="col-md-6 texts">
         <h1>
           Build

         </h1>
         <p>
            And now our large team of skilled builders will turn your plans into reality.
         </p>
         <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
       </div>
       <div class="col-md-6">
        <img src="../assets/design4.jpg"/>
       </div>
       
    </div>

     <div class="row">
       <div class="col-md-6">
        <img src="../assets/bespoke5.jpg"/>
       </div>
      <div class="col-md-6 texts">
         <h1>
           Commercial
         </h1>
         <p>
           We have extensive experience in retail, restaurant and office fit-outs – main high street brands, prestige airport lounges, business centres. Please get in touch for details.
         </p>
         <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
       </div>
       
       
    </div>

    </div>
  </div>
</template>

<style scoped>
.design {
  background-color: #80b692;
  text-align: left;
  padding: 80px;
  margin-bottom: 40px;
}
.design h1 {
  color: white;
}
.blank{
  padding:60px;
}
.container{
  margin-top:80px;
}
.container h1{
 font-size:30px;
}
.container .introduction{
padding:20px 150px 120px 150px;
font-size:25px;
color:grey;
}
.row{
  margin-bottom: 20px;
}
.row img{
  width:100%;
}
.row .texts{
  margin-top:40px;
}
.row .texts h1,p{
  text-align: left;
}
.row .texts h1{
  padding-bottom: 20px;
}
.row .texts p{
  font-size:25px;
  color:grey
}
.btn {
  background: #1f909c;
  border-radius: 0;
  padding: 20px 15px;
  margin: 50px 0 90px 0;
  margin-right: 380px;
}
.btn:hover {
  border: 2px solid #1f909c;
  background: white;
  color: black;
}
</style>