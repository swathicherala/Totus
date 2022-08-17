<template>
  <div id="">

    <CarousalImage/>
    <WelcomePage/>

  </div>
</template>

<script>
// import NavigationPage from './NavigationPage.vue'
import CarousalImage from './CarousalImage.vue'
import WelcomePage from './WelcomePage.vue'
// import FooterPage from './FooterPage.vue'

export default {
  name: 'App',
  components: {
    // NavigationPage,
    CarousalImage,
    WelcomePage,
    // FooterPage
  }
}
</script>