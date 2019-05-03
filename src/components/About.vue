<template>
  <div class="about">
    <h1>Hello {{name}}, this is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: this.$route.params.name
    }
  }
}
</script>