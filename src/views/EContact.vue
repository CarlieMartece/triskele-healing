<template>
  <main>
    <div class="upper-left">
      <h2>Contact Details</h2>
      <ul>
        <li>Landline: 01724 732531</li>
        <li>Mobile: 07949 626787</li>
        <li>
          Or use the contact <span id="form"></span>, and I will respond as soon
          as possible.
        </li>
      </ul>
      <BreakBarSmall />
    </div>
    <div class="upper-right">
      <h2>Contact Form</h2>
      <form @submit.prevent="sendEmail">
        <ul id="contact-form">
          <li>
            <label class="question" for="from_name">Full Name:</label>
            <input
              class="answer"
              id="name"
              maxLength="80"
              name="from_name"
              placeholder=" Your Name"
              size="35"
              type="text"
              v-model="from_name"
            />
          </li>
          <li>
            <label class="question" for="email">Email Address:</label>
            <input
              class="answer"
              id="email"
              maxLength="100"
              name="email"
              placeholder=" Your Email"
              size="35"
              type="text"
              v-model="email"
            />
          </li>
          <li>
            <label class="question" for="message">Your Message:</label>
            <textarea
              class="message"
              id="message"
              maxLength="1000"
              name="message"
              placeholder=" Message"
              v-model="message"
            >
            </textarea>
          </li>
          <li>
            <input class="submit" type="submit" value="Submit Form" />
          </li>
        </ul>
      </form>
    </div>
    <div class="lower-full">
      <figure>
        <img alt="Peaceful waterlily painting." src="../assets/2009.jpg" />
      </figure>
    </div>
  </main>
</template>

<script>
import emailjs from "emailjs-com";
import BreakBarSmall from "../components/BreakBarSmall.vue";

export default {
  name: "ContactUs",
  data() {
    return {
      from_name: "",
      email: "",
      message: "",
    };
  },
  components: {
    BreakBarSmall,
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_dpwcxj8",
          "template_1tf80b7",
          e.target,
          "KKtKItSH5MAGuXiRI",
          {
            name: this.from_name,
            email: this.email,
            message: this.meessage,
          }
        );
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      // Reset form field
      this.from_name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
#form:after {
  content: "form below";
}
@media screen and (min-width: 650px) {
  #form:after {
    content: "form on the right";
  }
}
</style>
