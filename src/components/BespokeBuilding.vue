<template>
  <div class="main1" style="">
    <div class="blank"></div>
    <div class="bespoke">
      <h1>Bespoke Build</h1>
    </div>
    <div class="container">
      <div class="question">
        <h1 class="questionhead">What We Do</h1>
        <p class="introduction">
          If you already have your building concept, architectural drawings and
          planning permission, you need a trustworthy building company that
          offers great service and value to turn your plans into reality. We
          have a vast experience of all sizes of projects and a specialist,
          all-trades in-house team. Bespoke building services include…
        </p>
      </div>

       <div class="row">
        <div class="col-md-6">
          <img src="../assets/bespoke1.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-6 texts">
          <h1>Complete Property Renovations</h1>
          <p>
            One of the best ways of creating your dream home and maximising its
            value is to find a property and renovate it to suit your individual
            needs. Many of our renovations involve taking the house back to its
            shell and completely remodelling.
          </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
        </div>
      </div>

      <div class="row reverse">
         <div class="col-md-6">
          <img src="../assets/bespoke2.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-6 texts">
          <h1>New Builds</h1>
          <p>
            A new build home is the perfect way to create a one-off house,
            tailored to your specific lifestyle and requirements.
          </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
        </div>
       
      </div>

      <div class="row">
        <div class="col-md-6">
          <img src="../assets/bespoke3.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-6 texts">
          <h1>House Extensions</h1>
          <p>
            Maximise your living space without having to move house by building
            double or single storey, rear or front, kitchen or side return
            extensions. Not only will this increase the footprint of your home,
            it will add value too
          </p>
          <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
        </div>
      </div>


     <div class="row reverse">
         <div class="col-md-6">
          <img src="../assets/bespoke4.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-6 texts">
          <h1>Basement Conversions</h1>
          <p>
            Join the underground revolution. The latest in basement conversions
            are light, airy and spacious. Basement conversions are becoming
            increasingly popular as a clever way of making the most efficient
            use of the square footage you have.
          </p>
           <router-link :to="{ name: 'project' }">
            <button type="button" class="btn btn-primary">
              See Our Projects
            </button>
          </router-link>
        </div>
     
      </div>

      <div class="row">
        <div class="col-md-6">
          <img src="../assets/bespoke5.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-6 texts">
          <h1>Commercial</h1>
          <p>
            We have extensive experience in retail, restaurant and office
            fit-outs – main high street brands, prestige airport lounges,
            business centres. Please get in touch for details.
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
.bespoke {
  background-color: #be7757;
  text-align: left;
  padding: 40px;
  margin-bottom: 40px;
}
.bespoke h1 {
  color: white;
}
.blank {
  padding: 60px;
}
.container {
  margin-top: 80px;
}
.container h1 {
  font-size: 30px;
}
.container .introduction {
  padding: 20px 150px 120px 150px;
  font-size: 25px;
  color: grey;
}
.row {
  margin-bottom: 20px;
}
.row img {
  width: 100%;
}
.row .texts {
  margin-top: 40px;
}
.row .texts h1,
p {
  text-align: left;
}
.row .texts h1 {
  padding-bottom: 20px;
}
.row .texts p {
  font-size: 25px;
  color: grey;
}
.btn {
  background: #1f909c;
  padding: 20px 15px;
  border-radius: 0;
  margin: 20px 161px 90px 0;
  /* text-align: left; */
  /* margin-right: 380px; */
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
@media only screen and (max-width: 320px) {
  
 .btn{
         margin-bottom: 35px;
    padding: 12px;
    font-size: 15px;
    width: 50%;
   
 }
}
@media only screen and (max-width: 1440px) {
  
 .questionhead{
  font-size: 20px;
 }
  .container .introduction{
       padding: 0px 0px 120px 0px;
    font-size: 20px;
    text-align: center;
  } 
   

}

</style>
