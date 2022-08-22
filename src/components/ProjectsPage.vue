<template>
  <div class="main">
    <div class="blank"></div>
    <div class="projects">
      <h1>At Totus, we focus on the details…</h1>
    </div>

    <div class="container">
      <p class="projpara">
        We pride ourselves on providing a personal, professional service. Take a
        look at some of our favourite building projects and get a flavour of our
        work…
      </p>
    </div>
    <ProjectsGrid />
    <div clas="container" >
      <h1 class="find">Find Out How We Can Help You</h1>
      <!-- <p class="paras" style="padding: 20px 105px 20px 105px; font-size: 30px; color: grey"> -->
       <p class="paras" style="color:grey;padding:20px;font-size:20px">
        If you are right at the start of your building project, or already have
        plans and are raring to go – we can help!
      </p>
      <router-link :to="{ name: 'contact' }">
        <button type="button" class="btn btn-primary">Get In Touch</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProjectsGrid from "./ProjectsGrid.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectsGrid,
  },
 
};
</script>

<style scoped>
.projects {
  background-color: #7a8e8d;
  text-align: left;
  padding: 40px;
  margin-bottom: 40px;
}
.projects h1 {
  color: white;
}
.blank {
  padding: 60px;
}
.container p {
  padding: 20px 95px 20px 95px;
  font-size: 30px;
  color: grey;
}
.btn {
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
}
.find{
  margin-top:50px;
}
@media only screen and (max-width: 572px) {
    /* html {
        font-size: 80%;
    } */
   .container .projpara{
          padding: 10px;
    font-size: 18px;
    }
    .paras{
      font-size:0px;
    }
}
@media only screen and (max-width: 320px){
 .find{
    font-size: 19px;
 }
 .paras{
  padding:0;
  font-size:18px;
 }
}

</style>
