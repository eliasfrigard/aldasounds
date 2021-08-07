<template>
  <div class="contact">
    <div class="contact-content">
      <div class="inform">
        <h2 class="contact-title">You can use the form below to contact us directly!</h2>
        <a class="mailto" href="mailto:info@aldasounds.com">Or you can send us an email.</a>
      </div>

      <div class="ui hidden divider"></div>

      <div id="contact" @submit.prevent="submitForm">
        <form class="ui form">

          <!-- Two Fields -->
          <div class="two fields">
            <!-- Name Field -->
            <div class="field">
              <label>Name</label>
              <input type="text" v-model="name" name="name" placeholder="Name">
            </div>
            <!-- Email Field -->
            <div class="field">
              <label>E-Mail</label>
              <input type="text" v-model="email" name="email" placeholder="E-Mail">
            </div>
          </div>

          <!-- Project Field -->
          <div class="field">
            <label>Type of Project</label>
            <input type="text" v-model="project" name="projectType" placeholder="Type of Project">
          </div>

          <!-- Information Field -->
          <div class="field">
            <label>Additional Information</label>
            <textarea type="text" v-model="information" name="information" placeholder="Additional Information"></textarea>
          </div>

          <!-- Submit Button -->
          <button class="ui fluid large blue button" type="submit">Submit</button>
        </form>
      </div>


    </div>

    <Footer />
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Contact',
    data() {
      return {
        name: null,
        email: null,
        project: null,
        information: null
      }
    },
    methods: {
      submitForm() {      
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Project: ${this.project}`);
        console.log(`Information: ${this.information}`);

        this.name = ''
        this.email = ''
        this.project = ''
        this.information = ''
      }
    },
    components: {
      Footer
    }
  }
</script>

<style scoped>
  * {
    color: rgb(230, 230, 230);
    letter-spacing: 2px;
  }

  a {
    font-family: 'Bad Script', cursive;
    font-size: 18px;
    letter-spacing: 3px;
  }

  .contact {
    z-index: 5;
  }

  .field label {
    padding-left: 4px;
    font-family: 'Bad Script', cursive;
  }

  .inform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

    #contact {
      padding: 40px;
      border-radius: 5px;
      width: 90%;
      max-width: 1000px;
      background-color: white;

      -webkit-box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
      -moz-box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
      box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
    }

    #contact-container {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50px;
      width: 100%;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(0,55,77,1) 40%);
    }

  .contact-content {
    height: 92vh;
    width: 100%;
    background-color: rgb(4, 46, 66);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>