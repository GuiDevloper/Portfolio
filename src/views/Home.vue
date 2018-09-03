<template>
  <div class="home">
    <Hello/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'home',
  components: {
    Hello
  }
}
</script>
