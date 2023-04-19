<template>
  <header>
    <h1>Triskele Healing</h1>
    <nav>
      <router-link
        class="nav-item"
        v-for="page in navPages"
        :key="page.id"
        :to="page.slug"
      >
        <img :src="`/images/${page.image}.jpg`" :alt="page.alt" />
        <p>{{ page.name }}</p>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navPages: [
        {
          id: "A",
          slug: "/",
          image: "2019",
          name: "Home",
          alt: "Crown Chakra painting",
        },
        {
          id: "B",
          slug: "/treatments",
          image: "2015",
          name: "Treatments",
          alt: "Third Eye Chakra painting",
        },
        {
          id: "C",
          slug: "/courses",
          image: "2014",
          name: "Courses",
          alt: "Throat Chakra painting",
        },
        {
          id: "D",
          slug: "/links",
          image: "2013",
          name: "Links",
          alt: "Heart Chakra painting",
        },
        {
          id: "E",
          slug: "/contact",
          image: "2012",
          name: "Contact",
          alt: "Solar Plexus Chakra painting",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
header {
  background-color: white;
  display: block;
  height: 191px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}
img {
  width: 106px;
}
nav {
  height: 130px;
  margin: 0 auto;
  width: 540px;
}
.nav-item {
  display: inline;
  float: left;
  height: 128px;
  list-style-type: none;
  margin: 1px;
}
p {
  font-size: 1.2em;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
  width: 106px;
}
</style>
