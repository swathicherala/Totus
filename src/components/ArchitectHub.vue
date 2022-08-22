<template>
  <div class="main">
    <div class="blank"></div>
    <div class="architect">
      <h1>Delivering excellence in partnership with architects…</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Looking for a Building Partner?</h3>
          <p>
            Collaboration is the key to success for any building project. If you
            are a professional architect or designer that requires an in-house
            building team to deliver on your client’s project, the Totus team
            will partner with you to bring your architectural designs to life –
            on time and on budget.
          </p>
        </div>
        <div class="col-md-6">
          <img src="../assets/architect1.jpg" />
        </div>
      </div>
      <div class="row reverse">
        
        <div class="col-md-6">
          <h3>Track Record</h3>
          <p>
            We have an extensive proven track record of successfully delivering
            many building projects – of varying requirements and sizes – from
            dream homes to commercial developments. We can work within clearly
            defined specification or be flexible, depending on the scope of the
            work. We provide clear, detailed competitive pricing during
            quotation and at each of the fulfilment stages.
          </p>
        </div>
        <div class="col-md-6">
          <img src="../assets/architect2.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>The Totus Team</h3>
          <p style="margin-bottom: 35px; font-size: 23px">
            For all the work we use our large in-house team of skilled
            personnel. This ensures consistency of work and quality. We have
            in-house bricklayers, electricians, plumbers, carpenters, roofers,
            plasterers and decorators. This is supported with strict and
            efficient project management systems and reinforced by
            qualifications and industry experience. These include:
          </p>
          <span class="post"> PMs/Directors</span> –
          <span class="post1"
            >BSs Hons/ NEBOSH / Prince2 / NVQ level 6/ SMSTS</span
          ><br />
          <span class="post"> Site managers </span>–
          <span class="post1">SSSTS / NVQ level 4-6 / First Aid</span><br />
          <span class="post"> General trades </span>–
          <span class="post1">NVQ level 2-5 / CSCS</span><br />
          <span class="post"> M&E </span>–
          <span class="post1">NICEIC / GasSafe / ACRIB</span>
   
        </div>
        <div class="col-md-6">
          <img src="../assets/architect3.jpg" />
        </div>
               <router-link :to="{ name: 'contact' }">
            <button type="button" class="btn btn-primary">Find Out More</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.architect {
  background-color: #7a8e8d;
  text-align: left;
  padding: 40px;
  margin-bottom: 40px;
}
.architect h1 {
  color: white;
}
.blank {
  padding: 60px;
}
.container img {
  width: 100%;
}
.container {
  text-align: left;
}
.container h3 {
  padding-top: 20px;
}
.container p {
  color: grey;
  padding-top: 40px;
  font-size: 25px;
}
.container .row {
  margin-bottom: 80px;
}
.post {
  color: #8c8c8c;
  font-weight: bold;
}
.post1 {
  color: grey;
}
.btn {
  background: #1f909c;
  padding: 20px 30px;
  border-radius: 0;
  margin-top: 40px;
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
@media only screen and (max-width: 325px){
  .btn{
        margin: 10px;
    padding: 12px;
    font-size: 15px;
    width: 100%;
  }
   
}
@media only screen and (max-width: 991px){
  .row p{
    font-size:20px;
  }
   
}

@media only screen and (max-width: 1024px){

}
</style>
