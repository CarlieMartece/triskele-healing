<template>
  <h1>Triskele Healing</h1>
  <nav>
    <router-link
      class="nav-item"
      v-for="page in navPages"
      :key="page.id"
      :to="page.slug"
    >
      <img :src="`/images/${page.image}.jpg`" :alt="page.name" />
      <p>{{ page.name }}</p>
    </router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
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
        },
        {
          id: "B",
          slug: "/treatments",
          image: "2015",
          name: "Treatments",
        },
        {
          id: "C",
          slug: "/courses",
          image: "2014",
          name: "Courses",
        },
        {
          id: "D",
          slug: "/links",
          image: "2013",
          name: "Links",
        },
        {
          id: "E",
          slug: "/contact",
          image: "2012",
          name: "Contact",
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
img {
  width: 66px;
}
nav {
  height: 90px;
  margin: 0 auto;
  width: 340px;
}
.nav-item {
  display: inline;
  float: left;
  height: 88px;
  list-style-type: none;
  margin: 1px;
}
p {
  font-size: 0.8em;
  font-weight: bold;
  line-height: 5px;
  text-align: center;
  width: 66px;
}
</style>
