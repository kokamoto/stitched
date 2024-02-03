<script lang="ts">
  import Header from "$lib/Header.svelte";

  let fill = "red";
</script>

<Header/>

<h1>The Lab: Experiments with SVG</h1>


<label for="fill-color">Fill color:</label>
<select bind:value={fill} id="fill-color">
  <option value="blue">blue</option>
  <option value="red">red</option>
  <option value="green">green</option>
</select>

<br/>

<svg width="300" height="100">
  <title>Attribute Animation with SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="{fill}" stroke="black" stroke-width="1">
    <title>A {fill} circle</title>
    <animate
      attributeName="cx"
      from="0"
      to="500"
      dur="8s"
      repeatCount="indefinite" />
  </circle>
</svg>