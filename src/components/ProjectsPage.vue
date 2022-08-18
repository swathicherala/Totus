<template>
  <div class="main">
<<<<<<< HEAD
    <div class="blank"></div>
=======
    <div class="blank">
    
      </div>
>>>>>>> 728f09fcf042cf6930bbc14c536984d874227aa4
    <div class="projects">
      <h1>At Totus, we focus on the details…</h1>
    </div>

    <div class="container">
<<<<<<< HEAD
      <p>
        We pride ourselves on providing a personal, professional service. Take a
        look at some of our favourite building projects and get a flavour of our
        work…
      </p>
    </div>
    <ProjectsGrid />
    <div clas="container" style="margin-top: 20px">
      <h1>Find Out How We Can Help You</h1>
      <p style="padding: 20px 105px 20px 105px; font-size: 30px; color: grey">
        If you are right at the start of your building project, or already have
        plans and are raring to go – we can help!
      </p>
      <router-link :to="{ name: 'contact' }">
        <button type="button" class="btn btn-primary">Get In Touch</button>
      </router-link>
=======
        <p>
            We pride ourselves on providing a personal, professional service. Take a look at some of our favourite building projects and get a flavour of our work…
        </p>
        <div class="buttons">
            <button type="button" class="btn btn-primary">
          All
        </button>
        <button type="button" class="btn btn-primary">
          Residential
        </button>
        <button type="button" class="btn btn-primary">
          Commercial
        </button>
        <button type="button" class="btn btn-primary">
          Work In Progress
        </button>
        </div>
    </div>

    <div clas="container" style="margin-top:20px">
       <h1>
        Find Out How We Can Help You
       </h1>
       <p style="padding:20px 105px 20px 105px;
    font-size:30px;
    color:grey;">
        If you are right at the start of your building project, or already have plans and are raring to go – we can help!
       </p>
         <button type="button" class="btn btn-primary">
          Get In Touch
        </button>
>>>>>>> 728f09fcf042cf6930bbc14c536984d874227aa4
    </div>
  </div>
</template>

<<<<<<< HEAD
<script>
import ProjectsGrid from "./ProjectsGrid.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectsGrid,
  },
 
};
</script>

=======
>>>>>>> 728f09fcf042cf6930bbc14c536984d874227aa4
<style scoped>
.projects {
  background-color: #7a8e8d;
  text-align: left;
  padding: 80px;
  margin-bottom: 40px;
}
.projects h1 {
  color: white;
}
<<<<<<< HEAD
.blank {
  padding: 60px;
}
.container p {
  padding: 20px 95px 20px 95px;
  font-size: 30px;
  color: grey;
=======
.blank{
  padding:60px;
}
.container p{
    padding:20px 95px 20px 95px;
    font-size:30px;
    color:grey;
>>>>>>> 728f09fcf042cf6930bbc14c536984d874227aa4
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
</style>
