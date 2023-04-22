<template>
  <main id="treatments">
    <div class="upper-left">
      <figure>
        <img
          alt="meditating figure with rainbow chakras"
          class="center"
          src="../assets/2016.jpg"
        />
      </figure>
    </div>

    <section class="upper-right">
      <h2>Treatments</h2>
      <nav id="nav-treatments">
        <ul>
          <li>
            <a href="#ayurvedic">Ayurvedic Kansa Vatki (KV) Foot Massage™</a>
          </li>
          <li><a href="#back-massage">Back Massage</a></li>
          <li><a href="#ear-candling">Ear Candling</a></li>
          <li><a href="#facial-rejuvenation">Facial Rejuvenation</a></li>
          <li><a href="#hot-stone-therapy">Hot Stone Therapy</a></li>
          <li><a href="#indian-head-massage">Indian Head Massage</a></li>
          <li><a href="#natural-facial">Natural Facial</a></li>
          <li><a href="#reflexology">Reflexology</a></li>
          <li><a href="#reiki">Reiki</a></li>
          <li><a href="#body-massage">Swedish Body Massage</a></li>
        </ul>
      </nav>
    </section>

    <section class="lower-full">
      <article id="special-offers">
        <ul id="offers-list">
          <li>
            <h3>Special Offer</h3>
            <p>Book a course of six treatments, get one free!</p>
            <p>Payment made when booking.</p>
          </li>
          <li>
            <h3>Gift Vouchers</h3>
            <p>
              The ideal gift! Treat your friends and family members to a
              treatment.
            </p>
          </li>
        </ul>
        <break-bar></break-bar>
      </article>

      <article
        v-for="treatment in treatments"
        :key="treatment.id"
        :id="treatment.name"
      >
        <h2>{{ treatment.title }}</h2>
        <h3>{{ treatment.price }}</h3>
        <p v-for="paragraph in treatment.details" :key="paragraph.no">
          {{ paragraph.info }}
        </p>
        <break-bar-small></break-bar-small>
      </article>

      <a class="link-top" href="treatments">Back to Top</a>
      <break-bar></break-bar>
    </section>
  </main>
</template>

<script>
import BreakBar from "../components/BreakBar.vue";
import BreakBarSmall from "../components/BreakBarSmall.vue";

export default {
  name: "App",
  components: {
    BreakBar,
    BreakBarSmall,
  },
  data() {
    return {
      treatments: [
        {
          id: 1,
          name: "ayurvedic",
          title: "Ayurvedic Kansa Vatki (KV) Foot Massage™",
          price: "50 minutes, £28",
          details: [
            {
              no: 1,
              info: "Kansa Vatki (KV) Foot Massage™ with marma therapy (Indian acupressure) is an ancient Ayurvedic health-care modality, which balances the body, mind and spirit. This unique treatment, steeped in centuries of ceremony, involves the use of ghee (clarified butter) or oils. The massage is deeply revitalising for tired feet and legs and, as the feet contain key energy and nerve endings relating to internal organs, a Kansa Vatki treatment also helps to rebalance the doshas (Vata, Pitta and Kapha energies).",
            },
            {
              no: 2,
              info: "The treatment begins by cleansing the feet, followed by some relaxing foot and leg moves. Slowly and methodically the toes, feet, ankles and calves are helped to relax. The treatment continues with special moves performed with the small 3-metal Kansa Vatki bowl. This is followed by a re-balancing sequence of marma massage (Indian acupressure).",
            },
            {
              no: 3,
              info: "All this special attention helps to detoxify and balance the body's energies leaving you feeling refreshed and relaxed. This treatment is good for everyone and ideal for those who spend long hours on their feet.",
            },
          ],
        },
        {
          id: 2,
          name: "back-massage",
          title: "Back Massage",
          price: "30 minutes, £20",
        },
        {
          id: 3,
          name: "ear-candling",
          title: "Ear Candling",
          price: "45 minutes, £25",
          details: [
            {
              no: 1,
              info: "Hopi ear candles are named after the Native American Indians who first introduced this gentle therapy to the modern age. The Hopi people are renowned for their extensive knowledge of healing and their spiritual lifestyle. Ear candles are still made today on the basis of their old traditional formula with ingredients including beeswax, honey and sage.",
            },
            {
              no: 2,
              info: "Ear Candling relieves pressure and pain, mainly in the ear and head area. It is soothing and helpful for conditions such as headache, compacted ear wax, sinus problems, tinnitus and more, and is a very relaxing therapy in its own right. An ear candling treatment includes a massage of the face, ears, neck and scalp.",
            },
          ],
        },
        {
          id: 4,
          name: "facial-rejuvenation",
          title: "Facial Rejuvenation",
          price: "45 minutes, £28",
          details: [
            {
              no: 1,
              info: "Facial Rejuvenation is a natural facelift with massage. It is designed to be a gentle non-invasive approach to looking younger. It works primarily by freeing constrictions both within the facial muscles and in the connective tissue. Tension can build up within our facial muscles from the pressures of everyday life without us realising it. It can be easy for certain thoughts and emotions to become habitual, locking them into expressions on our face. Under such conditions muscles can actually 'dry up' and contract, inhibiting freedom of expression. This can encourage the formation of wrinkles as the face loses its muscle tone and elasticity and begins to sag.",
            },
            {
              no: 2,
              info: "Through a combination of gentle massage of the face, energy balancing and facial exercises, the facial muscles are given a new lease of life. Although it is difficult to stave off the ageing process, Facial Rejuvenation can do much to extend the appearance of youth and beauty and help us to take care of the assets we possess.",
            },
          ],
        },
        {
          id: 5,
          name: "hot-stone-therapy",
          title: "Hot Stone Therapy",
          price: "1 hour, £35",
          details: [
            {
              no: 1,
              info: "The application of water-heated basalt stones, hot stone therapy targets key points on the body, giving a deep massage and creating sensations of comfort and warmth. The direct heat that hot stone therapy provides, relaxes muscles allowing manipulation of a greater intensity than with regular massage. A Hot Stone therapy massage expands the blood vessels and pushes blood and unwanted waste materials through the body. This has a sedative effect on the nervous system. The stones are put on the chakra points of the body along the spine. The chakra points are the body's energy center. It is believed to vitalize the physical body. When stimulated, it balances energy flow throughout the body.",
            },
          ],
        },
        {
          id: 6,
          name: "indian-head-massage",
          title: "Indian Head Massage",
          price: "40 minutes, £25",
          details: [
            {
              no: 1,
              info: "Indian Head Massage is based on the traditional form of head massage practiced in India for over 1,000 years. This therapy is sometimes referred to as 'Champissage', a Hindi word meaning 'Head Massage' from which the word 'shampoo' is derived.",
            },
            {
              no: 2,
              info: "It includes massage of the upper back, arms, neck, shoulders, scalp and face. It requires no undressing or use of oil, so it can even be performed in the workplace without having to leave your chair.",
            },
          ],
        },
        {
          id: 7,
          name: "natural-facial",
          title: "Natural Facial",
          price: "45 minutes, £30",
          details: [
            {
              no: 1,
              info: "The Natural Facial uses a combination of massage techniques with the application of nature's storehouse- flower waters and carrier oils from trees, shrubs, flowers, fruits, nuts and seeds.",
            },
            {
              no: 2,
              info: "The face is cleansed and toned using natural products. A warm compress is applied to open pores and aid absorption of oils into the skin. Then a natural mask is applied to draw out any impurities. The treatment is finished by a gentle massage to the face and neck using carrier oils selected to suit the client's skin type.",
            },
          ],
        },
        {
          id: 8,
          name: "reflexology",
          title: "Reflexology",
          price: "1 hour, £30",
          details: [
            {
              no: 1,
              info: "Reflexology is an ancient art, which works on the principle that there are reflex points on the feet that correspond and connect to all the glands, organs and parts of the body. By using gentle pressure techniques to stimulate these reflexes, the body is encouraged to heal itself naturally, often counteracting a lifetime of misuse.",
            },
            {
              no: 2,
              info: "Following illness, stress, injury or disease, the body is in a state of imbalance and vital energy pathways are blocked, preventing the body from functioning effectively. Reflexology can help by restoring the energy flow, eliminating toxins, improving blood circulation, relieving tension and inducing a deep state of relaxation.",
            },
          ],
        },
        {
          id: 9,
          name: "reiki",
          title: "Reiki",
          price: "1 hour, £30",
        },
        {
          id: 10,
          name: "body-massage",
          title: "Swedish Body Massage",
          price: "1 hour, £30",
          details: [
            {
              no: 1,
              info: "A deep, relaxing massage. The full body includes back, neck, shoulders, legs, feet, arms, hands, plus some pressure point treatment to the face and skull. This massage is excellent for easing aching muscles; improving circulation; lymphatic drainage; increasing the body's metabolic rate and generally giving a sense of deep relaxation and well-being.",
            },
          ],
        },
      ],
    };
  },
};
</script>
