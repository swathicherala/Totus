<template>
    <div class="car">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators move">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active imageslider">        
            <img src="../assets/bg1.jpg" class="img-fluid" alt="...">
            <p class="para">Bespoke Build</p>
          </div>
          <div class="carousel-item imageslider">
            <img src="../assets/bg2.jpg" class="img-fluid" alt="...">
            <p class="para">Design, Planning & Build</p>
          </div>
          <div class="carousel-item imageslider">
            <img src="../assets/bg3.jpg" class="img-fluid" alt="...">
           <p class="para">Project Management</p>
          </div>
           <div class="carousel-item imageslider">
            <img src="../assets/bg4.jpg" class="img-fluid" alt="...">
           <p class="para">Large All-Trades Team</p>
          </div>
         
        </div>
      </div>
    </div>
</template>

<script>



</script>

<style scoped>
/* .car{

    position: absolute;
    top: 0;

} */
.para{ 
  position: absolute;
  text-align: center;
  top: 29%;
  width: 100%;
  font-size:80px;
  font-weight: bold;
  color:rgb(7, 7, 7);
  /* padding: 0px 200px;
    background: rgba(0,0,0,0.7); */
}
.carousel {
    /* position: absolute; */
    top: 0;
    width:100%;
  
}
.carousel .imageslider img{
  opacity: 0.8;
}
/* .carousel img{
  height:20%;
} */
.imageslider img{
  height:100%;
}
@media only screen and (max-width: 320px){
   .para{
    font-size: 23px;
   }
}
@media only screen and (max-width: 572px) {
    /* html {
        font-size: 80%;
    } */
    /* .para{
      font-size:35px;
    } */
}
@media only screen and (max-width: 991px){
 .para{
      font-size:35px;
    }
}
</style>