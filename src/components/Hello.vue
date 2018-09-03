<template>
  <div class="all c-1o1">
    <div class="wall c-1o2 m-1o1">
      <div class="neon c-7o12">
        <h2>{{ final }}</h2>
      </div>
    </div>
    <div class="wall c-1o2 m-1o1">
      <div class="neon c-7o12 sec">
        <h2>{{ final }}</h2>
      </div>
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
.neon {
  margin: 20%;
  height: 60vh;
  border: 8px solid red;
  box-shadow: 0px 0px 70px rgba(255, 0, 0, 0.8),
    0px 0px 40px rgba(255, 0, 0, 0.9), 0px 0px 30px rgba(255, 0, 0, 1);
  font-size: 30px;
  text-align: justify;
  text-shadow: 0px 0px 70px black, 0px 0px 40px black, 0px 0px 30px black;
  border-radius: 3px;
  margin-top: 10vh;
  &.sec {
    margin-top: 20vh;
    overflow: hidden;
  }
}
h3 {
  margin: 40px 0 0;
}
</style>
