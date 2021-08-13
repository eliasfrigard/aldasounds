<template>
  <div class="ui container contact">
    <div class="titles">
      <h2 class="title">CONTACT</h2>
      <h3 class="subtitle">Find contact-, press- and technical information below.</h3>
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
        <form>
          <input type="text" name="name" id="" placeholder="Name" autofocus v-model="name" required>
          <input type="tel" name="phone" id="" placeholder="Phone Number" v-model="phone">
          <input type="email" name="email" id="" placeholder="E-Mail" v-model="email" required>
          <input type="text" name="subject" id="" placeholder="Subject" v-model="subject" required>
          <textarea name="text" id="" cols="30" rows="10" placeholder="Your Message" v-model="message" required></textarea>
          <input type="submit" value="SUBMIT" @click.prevent="submitForm">
          <h2 id="success-message" v-if="messageSent === true">Success! Message has been recieved!</h2>
          <h2 id="fail-message" v-else-if="messageSent === false">Sorry! We could not send your message.</h2>
        </form>  
      </div>    
    </div>


    <div class="ui container contact-downloads">
      <h2 class="title downloads-title">DOWNLOADS</h2>
      <div class="download-item">
        <i class="fas fa-download"></i>
        <h4 class="download-item-text">Download Presskit</h4>
      </div>
      <div class="download-item">
        <i class="fas fa-download"></i>
        <h4 class="download-item-text">Download Technical Rider</h4>
      </div>
      <div class="download-item">
        <i class="fas fa-download"></i>
        <h4 class="download-item-text">Download Full Resolution Images</h4>
      </div>
      <div class="download-item">
        <i class="fas fa-download"></i>
        <h4 class="download-item-text">Download Audio</h4>
      </div>
    </div>

    <div class="image" data-aos="fade-up"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      messageSent: null
    }
  },
  methods: {
    submitForm() {
      this.messageSent = null

      const url = `${process.env.VUE_APP_BACKEND_ADDRESS}`
      
      const params = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message,
        key: process.env.VUE_APP_BACKEND_KEY
      }

      axios.post(url, params)
        .then(response => {
          this.messageSent = true
          console.log(response.data)
        })
        .catch(error => {
          this.messageSent = false
          console.error("There was an error!", error);
        })

      this.name = ''
      this.email = ''
      this.phone = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.divider-img {
  margin: 25px 0 75px 0;
  height: 750px;
  border-radius: 4px;
  background-image: url("/P1110770-sized-cropped.webp");
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
  width: 45%;
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

.form {
  width: 45%;
}

.form form {
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

.contact-downloads {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 100px 0 50px 0;
}

.fa-download {
  font-size: 30px;
  padding-bottom: 6px;
  margin-right: 30px;
}

.downloads-title {
  width: 100%;
  text-align: center;
  margin: 0 0 50px 0;
}

.download-item {
  height: 100px;
  margin: 20px 0;
  width: 47.5%;
  border: 3px solid rgb(4, 46, 66);
  border-radius: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);

}

.download-item:hover {
  border: 4px solid #ec3c01;
  cursor: pointer;
  transform: scale(1.025);
}

.download-item-text {
  font-size: 22px;
  text-align: center;
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  margin:0;
}

#success-message {
  color: green;
  font-size: 18px;

}

#fail-message {
  color:#ec3c01;
  font-size: 18px;
}

@media screen and (max-width: 992px) {
  .download-item {
    width: 100%;
  }

  .contact-info {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }

  .form {
    width: 100%;
  }

  .form form {
    width: 100%;
  }

  .divider-img {
    display: none;
  }

  .titles {
    margin-bottom: 15px;
  }

  .subtitle {
    display: none;
  }

  .info {
    width: 100%;
    margin-top: 50px;
  }
}
</style>