<template>
  <div class="all c-1o1">
    <div class="wall c-1o2 m-1o1">
    </div>
    <div class="wall c-1o2 m-1o1">
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "Hello",
  data: function() {
    return {
      final: "Este é o final do começo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all {
  height: 100vh;
}
.wall {
  height: 100%;
  float: left;
  background-color: #171717;
  &:last-of-type {
    background-color: black;
  }
}
h3 {
  margin: 40px 0 0;
}
</style>
