<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <p>
      Widget Wonderlab<br>
      Home of Wonderwidgets, Coming Soon!
      

      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://cafefred.cafepurr.com" target="_blank" rel="noopener">Cafe Fred</a></li>
      <li><a href="https://lola.purrsalon.com" target="_blank" rel="noopener">Cafe Lola</a></li>
      <li><a href="https://github.com/silasfelinus/serendipity" target="_blank" rel="noopener">Serendipity Github</a></li>
      <li><a href="https://github.com/silasfelinus/wonderlab" target="_blank" rel="noopener">Wonderlab Github</a></li>
      <li><a href="https://chat.openai.com/chat?model=gpt-4" target="_blank" rel="noopener">chatGPT</a></li>
      <li><a href="https://github.com/silasfelinus/wonderlab" target="_blank" rel="noopener">Wonderlab Github</a></li>
      <li><a href="https://github.com/silasfelinus/serendipity" target="_blank" rel="noopener">Serendipity Github</a></li>
      <li><a href="https://github.com/silasfelinus/wonderlab" target="_blank" rel="noopener">Wonderlab Github</a></li>
    </ul>
    <h3>Wonderwidgets</h3>
    <ul>
      <li><a href="https://github.com/silasfelinus/wonderlab" target="_blank" rel="noopener">Wonderlab Github</a></li>
      <li><a href="https://github.com/silasfelinus/serendipity" target="_blank" rel="noopener">Serendipity Github</a></li>
      <li><a href="https://github.com/silasfelinus/wonderlab" target="_blank" rel="noopener">Wonderlab Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
