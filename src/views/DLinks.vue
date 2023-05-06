<template>
  <main>
    <div class="upper-left">
      <figure>
        <img
          alt="Colourful drawing with triskele and synapse shapes"
          class="center"
          src="../assets/1009.jpg"
        />
      </figure>
    </div>
    <section class="upper-right">
      <h2>Site Design</h2>
      <p>
        All artworks used on this site, including navigation buttons and
        background images, are copyright property of Carlie Martece, and may not
        be reproduced without permission.
      </p>
      <p>
        See
        <a href="http://www.carliemartece.com/" target="_blank"
          >CarlieMartece.com</a
        >
        for full art portfolio.
      </p>
      <BreakBarSmall />
    </section>
    <div class="lower-split">
      <section class="lower-left">
        <h2>Links</h2>
        <h3>Memberships:</h3>
        <ul>
          <li>
            Complementary Therapists Association:
            <a href="http://www.ctha.com" target="_blank">www.ctha.com</a>
          </li>
          <li>
            Hands On Training:
            <a href="http://www.hands-on-training.net" target="_blank"
              >www.hands-on-training.net</a
            >
          </li>
        </ul>
        <BreakBar />
        <h2>Other holistic therapists:</h2>
        <ul>
          <li>
            Mary Dalgleish, London:
            <a href="http://www.head2toemassage.co.uk" target="_blank"
              >www.head2toemassage.co.uk</a
            >
          </li>
          <li>
            Barbara McAteer, Ireland:
            <a href="http://www.holistictherapiesireland.com" target="_blank"
              >www.holistictherapiesireland.com</a
            >
          </li>
          <BreakBarSmall />
        </ul>
      </section>
      <div class="lower-right">
        <figure>
          <img
            alt="Surreal art with strange cat and triskele moon"
            class="center"
            src="../assets/1010.jpg"
          />
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
import BreakBar from "../components/BreakBar.vue";
import BreakBarSmall from "../components/BreakBarSmall.vue";

export default {
  name: "LinksPage",
  components: {
    BreakBar,
    BreakBarSmall,
  },
};
</script>
