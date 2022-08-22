<template>
  <div class="foot" style="margin-top:90px;">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 leftside">
            <p>
              <a
                class="link"
                href="https://www.facebook.com/totusconstruction?ref=ts&fref=ts"
              >
                <i class="fa-brands fa-facebook"></i> </a
              >|
              <a
                class="link"
                href="https://www.linkedin.com/company/totus-construction-ltd"
              >
                <i class="fa-brands fa-linkedin"></i> </a
              >|
              <a
                class="link"
                href="https://www.houzz.co.uk/pro/totusconstruction/totus-construction-ltd"
              >
                <i class="fa-solid fa-house"></i> </a
              >|
              <a
                class="link"
                href="https://www.instagram.com/totus_construction/"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <br />
              <span style="color:grey">Tel: <a href="tel:01932988500" style="color:black;text-decoration: none;">01932 988 500</a></span
              >|
              <span style="color:grey">Email: <a href="mailto:enquiries@totus.construction" style="color:black;text-decoration: none;">enquiries@totus.construction</a></span>
              <br />
              <span style="color:grey">© Copyright 2020 Totus Construction Ltd</span><br />
              <span style="font-weight: bold">Web Design Surrey</span> 
              <span style="color:grey"> by
              Preface Studios</span>
            </p>
          </div>
          <div class="col-md-6 rightside">
            <p style="text-align:left;color:grey">All our projects are certified by:</p>
            <div class="images owl-carousel owl-theme">
                <img src="../assets/footer1.jpg">
                <img src="../assets/footer2.png">
                <img src="../assets/footer3.png">
                <img src="../assets/footer4.png">
                <img src="../assets/footer5.png">
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>
/* .foot{
    position:absolute;
} */
.leftside{
    text-align: left;
}
.link{
    font-size:20px;
}
.link i{
    padding:10px;
    color:black
}
.images{
    display: flex;


}
.images img{
        width:20%
}
@media only screen and (max-width: 576px) {
    /* html {
        font-size: 80%;
    } */
 
}
@media only screen and (max-width: 991px){
     .leftside{
       padding-top: 20px;
      
    }
    .rightside{
      margin-top: 58px;
    }
    .row{
 padding-left:40px;
    }
}
@media only screen and (max-width: 1400px){
     /* .leftside{
       padding-top: 50px;
      
    }
    .row{
 padding-left:40px;
    } */
}
</style>
