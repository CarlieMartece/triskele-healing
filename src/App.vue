<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/treatments">Treatments</router-link> |
    <router-link to="/courses">Courses</router-link> |
    <router-link to="/links">Links</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>
