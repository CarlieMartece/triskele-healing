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
      <form
        name="contactformlite"
        method="post"
        action="../lite_process.php"
        onsubmit="return validate.check(this)"
      >
        <ul id="contact-form">
          <li>
            <label for="name">Full Name:</label>
            <input id="name" maxLength="80" name="name" size="35" type="text" />
          </li>
          <li>
            <label for="email">Email Address:</label>
            <input
              id="email"
              maxLength="100"
              name="email"
              size="35"
              type="text"
            />
          </li>
          <li>
            <label for="message">Your Message:</label>
            <textarea
              id="message"
              maxLength="1000"
              name="message"
              style="width: 242px; height: 120px"
            >
            </textarea>
          </li>
          <li>
            <input type="submit" value="Submit Form" />
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
import BreakBarSmall from "../components/BreakBarSmall.vue";

export default {
  components: {
    BreakBarSmall,
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
