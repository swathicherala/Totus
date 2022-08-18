<template>
  <div class="main">
    <div class="container">
      <div class="category-nav">
    <label>
      <input type="radio" v-model="category" value="" id="allbtn" class="btn active"> All
    </label>
    <label>
      <input type="radio" v-model="category" value="Residential" class="btn"> Residential
    </label>
    <label>
      <input type="radio" v-model="category" value="Commercial" class="btn"> Commercial
    </label>
     <label>
      <input type="radio" v-model="category" value="Work-In-Progress" class="btn "> Work In Progress
    </label>
  </div>
    </div>
   <transition-group appear tag="ul" class="category-list">
    <li v-for="image in filterByCategory" :key="image.index">
        <div class="block-item">
        <a
          href="https://www.totus.construction/projects/carlton-gardens-ealing/"
        >
          <div class="over">
            <h5>
              {{image.text}}
              <i> {{image.category}} </i>
            </h5>
          </div>
                <img :src="image.src" alt="">
        </a>
      </div>

    </li>
  </transition-group>
  </div>
</template>

<script>
// import Gallery from "vuejs-image-gallery";
export default{
    name:'ProjectsGrid',
    data() {
        return {
            category: '',
            images: [{
                    index: 1,
                    src: require("../assets/projectsimages/image1.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 2,
                    src: require("../assets/projectsimages/image2.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 3,
                    src: require("../assets/projectsimages/image3.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Commercial'
                },
                {
                    index: 4,
                    src: require("../assets/projectsimages/image8.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Commercial'
                },
                {
                    index: 5,
                    src: require("../assets/projectsimages/image5.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 6,
                    src: require("../assets/projectsimages/image6.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 7,
                    src: require("../assets/projectsimages/image7.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Work-In-Progress'
                },
                {
                    index: 8,
                    src: require("../assets/projectsimages/image8.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Commercial'
                },
                {
                    index: 9,
                    src: require("../assets/projectsimages/image9.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Work-In-Progress'
                },
                {
                    index: 10,
                    src: require("../assets/projectsimages/image21.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Commercial'
                },
                {
                    index: 11,
                    src: require("../assets/projectsimages/image11.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Work-In-Progress'
                },
                {
                    index: 12,
                    src: require("../assets/projectsimages/image12.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 13,
                    src: require("../assets/projectsimages/image22.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 14,
                    src: require("../assets/projectsimages/image14.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Residential'
                },
                {
                    index: 15,
                    src: require("../assets/projectsimages/image15.jpg"),
                    text:'Carlton Gardens, Ealing W5',
                    category: 'Work-In-Progress'
                }
            ],
                   currentFilter: 'ALL',
        }

    },
     computed: {
    filterByCategory: function () {
      return this.images.filter(
        (image) => !image.category.indexOf(this.category)
      );
    },
    
  },
  methods(){
    var header = document.getElementsByClassName(".category-nav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  }
    
}
</script>

<style scoped>
/* .btn {
  background: #1f909c;
  padding: 20px 30px;
  border-radius: 0;
  margin-top: 20px;
  margin-right: 20px;
}
.btn:hover {
  border: 2px solid #1f909c;
  background: white;
  color: black;
} */
.category-nav {
  text-align: center;
  padding: 30px;
}

.category-nav label {
  background: #0bd;
  color: #fff;
  padding: 20px 30px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
}
/* .category-nav label:active{
     background: #003bb3 !important;
        color: #fff !important;
} */
.category-nav label:hover{
    border: 3px solid #1f909c;
  background: white;
  color: black;
}
.category-nav input[type="radio"] {
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.category-list {
  list-style: none; 
   display: flex;
  float: left;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 20px;
  position: relative;
  z-index: 100;
  width: 100%;
  overflow: hidden;
}
.category-list .block-item img {
  width: 410px;
  height: 100%;
  object-fit: cover;
  transition: 0.1s;
  background-size: cover;
  background-position: center center;
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
</style>
