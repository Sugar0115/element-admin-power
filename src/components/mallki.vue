<template>
  <div class="mallki.vue">
    <a :href="href" class="link-mallki">
      {{ text }}
      <span :data-letters="text"></span>
      <span :data-letters="text"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "mallki.vue",
  props: {
    href: {
      type: String
    },
    text: {
      type: String
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
body {
  background: black;
}

a {
  display: inline-block;
  font-size: 60px;
  margin: 30px 0 20px;
}

[class*="link-"] {
  outline: none;
  text-decoration: none;
  position: relative;
  line-height: 1;
  display: inline-block;
}

.link-mallki {
  color: black;
  -webkit-transition: color 0.5s 0.25s;
  transition: color 0.5s 0.25s;
  overflow: hidden;
}

.link-mallki:hover {
  -webkit-transition: none;
  transition: none;
  color: transparent;
}

.link-mallki::before {
  content: "";
  width: 100%;
  height: 2px;
  margin: -3px 0 0 0;
  background: black;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.link-mallki:hover::before {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.link-mallki span {
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

.link-mallki span::before {
  content: attr(data-letters);
  color: red;
  position: absolute;
  left: 0;
  width: 100%;
  color: black;
  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
}

.link-mallki span:nth-child(2) {
  top: 50%;
}

.link-mallki span:first-child::before {
  top: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.link-mallki span:nth-child(2)::before {
  bottom: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.link-mallki:hover span::before {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
</style>
