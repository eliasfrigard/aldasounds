<template>
  <div class="ui container contact">
    <div class="titles">
      <p class="pre-title">ALDA</p>
      <h2 class="title">CONTACT</h2>
      <h3 class="subtitle">Find contact, press and technical information below.</h3>
    </div>

    <div class="ui container divider-img"></div>

    <div class="contact-info">
      <div class="info">
        <h2>Contact Information</h2>
        <h3>Feel free to contact us with any questions you may have about our music or regarding booking!</h3>
        <h3 class="info-title">Band Mail</h3>
        <a href="mailto:info@aldasounds.com">info@aldasounds.com</a>
        <h3 class="info-title">Elias Frigård</h3>
        <a href="mailto:elias@aldasounds.com">elias@aldasounds.com</a>
        <p>+46(0)70-6691374</p>
        <h3 class="info-title">Veera Kuisma</h3>
        <a href="mailto:veera@aldasounds.com">veera@aldasounds.com</a>
        <p>+358(0)45-1107182</p>
        <h3 class="info-title">Timo Alakotila</h3>
        <a href="mailto:timoalakotila@gmail.com">timoalakotila@gmail.com</a>
        <p>+358(0)50-5116112</p>
      </div>
      <div class="form">
        <h2>Contact Form</h2>
        <form action="" method="post">
          <input type="text" name="name" id="" placeholder="Name" autofocus>
          <input type="tel" name="phone" id="" placeholder="Phone Number">
          <input type="email" name="email" id="" placeholder="E-Mail">
          <input type="text" name="subject" id="" placeholder="Subject">
          <textarea name="text" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="SUBMIT">
        </form>  
      </div>    
    </div>
    <div class="image" data-aos="fade-up"></div>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
.divider-img {
  margin: 25px 0 75px 0;
  height: 750px;
  border-radius: 4px;
  background-image: url("/P1110770.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
}

.image {
  height:85vh;
  width: 100vw;
  margin-top: 75px;
  background-image: url("/P1110998-sized.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 2s ease;
}

.contact {
  top: 8vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
  
.contact-info {
  display:flex;
  justify-content: space-between;
  width: 100%;
}

.info {
  width: 47%;
  height: 200px;
  text-align: center;
  display:flex;
  flex-direction: column;
}

.info p, .info a {
  line-height: 200%;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info h3 {
  font-size: 20px;
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  line-height: 175%;  
}

.form form {
  width: 47%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.form h2, .info h2 {
  font-size: 40px;
  font-family: 'Bad Script', cursive;
  letter-spacing: 5px;
  text-align: center;
}

input[type=text], input[type=tel], input[type=email] {
  width: 500px;
  height: 50px;
  margin: 15px;
  border: none;
  border-bottom: 2px solid #042e42;
  font-family: myriad-pro, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}

input[type=text]:focus, input[type=tel]:focus, input[type=email]:focus {
  outline: none;
  border-bottom: 4px solid #ec3c01;
}

textarea {
  height: 200px;
  width: 500px;
  margin: 15px;
  border: 2px solid #042e42;
  border-radius: 4px;
  resize: none;
  padding: 15px;
  font-family: myriad-pro, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}

textarea:focus {
  outline: none !important;
  border:4px solid #ec3c01;
}

input[type=submit] {
  width: 500px;
  margin: 15px;
  border: none;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  background-color: #042e42;
  color: rgb(230, 230, 230);
  padding: 15px 20px;
  transition: all .3s;
  cursor: pointer;
  font-family: myriad-pro, sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 20px;
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
  transition: all 0.1s ease;
}

input[type=submit]:hover {
  background-color: #ec3c01;
  transition: all 0.1s ease;
}

.news {
  margin: 50px 0;
  top: 8vh;
  width: 100%;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

.title {
  font-size: 70px;
  letter-spacing: 5px;
}

.subtitle {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
}


.pre-title {
  letter-spacing: 2px;
}

.title, .subtitle, .pre-title {
  line-height: 125%;
}
</style>