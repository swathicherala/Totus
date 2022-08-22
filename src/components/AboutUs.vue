<template>
  <div class="main">
    <div class="blank">
    
      </div>
    <div class="about">
      <h1>Outstanding quality, competitive costs, fast completion…</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 choose">
          <h3>Why Choose Totus?</h3>
          <p>
            Totus is a family-run company that has grown organically into a
            large professional team of skilled tradesmen. We maintain the
            highest quality of work by only using our own team and partnering
            with leading London and Surrey architectural, surveyor, design and
            engineering companies.
          </p>
        </div>
        <div class="col-md-6">
          <p class="choose1">
            Most of our work comes through customer and professional referrals.
            This is due to a combination of making sure we truly understand
            clients’ needs, whilst providing the finest finish through attention
            to detail and quality workmanship. Every project is personally
            managed by our directors Andrew or Terry who collaborate with all
            parties involved to ensure progress is being made until successful
            and timely completion.
          </p>
        </div>
      </div>

      <div class="row threediv">
        <div class="col-md-4 firstdiv">
          <span>
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
          <div class="division">
            <h5>QUALITY</h5>
          <p>
            We understand any building development is a huge financial
            investment for you. That’s why we have strict quality controls in
            place, which allows our experienced team of professionals to deliver
            top quality results that will increase property value.
          </p>
          </div>
        </div>
        <div class="col-md-4 seconddiv">
          <span>
            <i class="fa-solid fa-sterling-sign"></i>
          </span>
          <div class="division">
            <h5>COSTS</h5>
          <p>
            We provide clear detailed quotations that allow you to make informed
            decisions. Our efficient resource management, build management and
            innovative building techniques and technology enable us to pass
            savings on to clients. And this means we are competitive on price.
          </p>
          </div>
        </div>
        <div class="col-md-4 thirddiv">
          <span>
            <i class="fa-solid fa-clock-rotate-left"></i>
          </span>
          <div class="division">
                <h5>TIME</h5>
          <p>
            Any building work can be stressful for busy people – especially when
            you are juggling work and family commitments. Project continuity is
            vital. Effective project management combined with our committed,
            all-trades team allows us to deliver – fast!
          </p>
          </div>
          
        </div>
      </div>
      
      <div class="des">
          <div class="row des1">
            <div class="col-md-6">
               <p class="full">
                Totus is fully insured for all our work. We provide a defects and structural guarantee on all new installations. And we’ll also sort the paperwork – you’ll get full Building Control approval and other necessary completion certificates. We use only industry standard contracts, with no hidden suprises. We do make sure that you have a clarity and confidence in what you will recieve from Totus.
               </p>
            </div>
            <div class="col-md-6">
                <img src="../assets/about1.jpg">
            </div>
          </div>

           <div class="row des2 reverse">
             <div class="col-md-6 teams">
                <h1 class="team">
                    The Team
                </h1>
               <p>
                Totus is run by brothers, Andrew and Terry, who have a joint passion for building, design and architecture. They share 20 years’ experience in the building industry, bachelor and masters degrees, construction management and trade qualifications. Over the years they have gained significant experience working for leading construction and blue chip companies.
               </p>
               <!-- <br> -->
               <p>
                Today Totus is stronger than ever thanks to Andrew and Terry’s vision of providing high quality workmanship combined with outstanding personal service and care.
               </p>
            </div>
            <div class="col-md-6">
               <img src="../assets/about2.jpg">
            </div>
           
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #7a8e8d;
  text-align: left;
  padding: 40px;
  margin-bottom: 40px;
}
.about h1 {
  color: white;
}
.blank{
  padding:60px;
}
.main {
  display: block;
}
.choose{
    text-align: left;
}
.choose h3{
    padding:50px 0
}
.choose p{
      font-size: 25px;
    color:grey
}
.choose1{
    text-align: left;
    padding:142px 0 0 0;
    font-size: 25px;
    color:grey
}
.threediv{
    margin:120px 0;
}
.threediv span{
        position: relative;
    display: inline-block;
    width: 5em;
    height: 5em;
    line-height: 2em;
    vertical-align: middle;
        border-radius: 8em;
  
}
.threediv span i{
      color: #1f909c;
          font-size: 2em;
          position: absolute;
          top:20px;
    left: 0;
    width: 100%;
    text-align: center;
}
.threediv span:hover{
    background-color:#1f909c ;

     transition: all 0.1s linear;
}
.threediv span i:hover{
    color:white
}
.division{
       text-align: left;
}
.division h5{
    margin:40px 0;
} 
.division p{
    
    color:grey
}
.des1{
    margin-bottom:30px;
}
.des1 img{
    width:100%
}
.des1 p{
    text-align: left;
    font-size: 26px;
    color:grey;
    padding-top:30px;
}
.des2 {
     text-align: left;
}
.des2 img{
    width:100%
}
.des2 p{
    font-size: 24px;
    color:grey;
    padding-top:30px;
}
.reverse{
  display:flex;
  flex-direction: row-reverse;
}
/* .team{
margin-top:-10px;
} */
@media only screen and (max-width: 425px) {
.team{
     width: 100%;
    margin-top: 26%;
  }  
  .seconddiv{
    padding-top: 20%;
  } 
  .thirddiv{
        padding-top: 20%;
  }
}
@media only screen and (max-width: 768px) {
  .des1 .full{
        font-size: 20px;
  }
  .teams p{
        font-size: 18px;
  }
  
}
</style>
