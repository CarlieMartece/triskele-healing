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
      <form>
        <ul id="contact-form">
          <li>
            <label class="question" for="from_name">Full Name:</label>
            <input
              class="answer"
              id="name"
              maxLength="80"
              name="from_name"
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
              v-model="message"
            >
            </textarea>
          </li>
          <li>
            <input
              class="submit"
              type="submit"
              value="Submit Form"
              v-on:click="sendForm"
            />
          </li>
        </ul>
      </form>
      <p>{{ from_name }}{{ email }}{{ message }}</p>
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
    sendForm(event) {
      event.preventDefault();
      emailjs.send("service_dpwcxj8", "template_1tf80b7", "KKtKItSH5MAGuXiRI", {
        from_name: this.from_name,
        email: this.email,
        message: this.message,
      });
    },
    // sendEmail(e) {
    //   try {
    //     emailjs.send(
    //       "service_dpwcxj8",
    //       "template_1tf80b7",
    //       e.target,
    //       "TnWB9bKN3Svj84-Fw",
    //       {
    //         from_name: this.from_name,
    //         email: this.email,
    //         message: this.message,
    //       }
    //     );
    //   } catch (error) {
    //     console.log({ error });
    //   }
    // Reset form field
    // this.from_name = "";
    // this.email = "";
    // this.message = "";
    //},
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
