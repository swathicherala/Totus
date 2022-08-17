<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators move">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
.para{ 
  position: absolute;
  text-align: center;
  top: 40%;
  width: 100%;
  font-size:80px;
  font-weight: bold;
  color:white;
}
.carousel {
    /* position: absolute; */
    top: 0;
    width:100%;
  
}
.carousel img{
  height:20%;
}
.imageslider img{
  height:100%;
}
</style>