<template>
  <div class="main-page">
    <main-header />
    <main-body />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "../components/Main/MainHeader/MainHeader";
import MainBody from "../components/Main/MainBody/MainBody";
import MainFooter from "../components/Main/MainFooter/MainFooter";

export default {
  layout: '',
  components: {
    MainFooter,
    MainBody,
    MainHeader
  }
}
</script>

<style scoped>
  .main-page {
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }
</style>
