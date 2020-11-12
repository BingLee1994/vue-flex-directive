<template>
  <div v-flex.wrap.toTop.toCenter>
    <div v-flex.toLeft class="container">
      <code>v-flex.toLeft</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div v-flex.toCenter class="container">
      <code>v-flex.toCenter</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div v-flex.toRight class="container">
      <code>v-flex.toRight</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div style="flex-basis: 100%"></div>
    <div v-flex.toTop class="container">
      <code>v-flex.toTop</code>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div v-flex.toMiddle class="container">
      <code>v-flex.toMiddle</code>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div v-flex.toBottom class="container">
      <code>v-flex.toBottom</code>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div style="flex-basis: 100%"></div>
    <div v-flex.toTop.spaceBetween class="container">
      <code>v-flex.toTop.spaceBetween</code>
      <div class="block">1</div>
      <div class="block">2</div>
    </div>
    <div v-flex.toBottom.spaceAround class="container">
      <code>v-flex.toBottom.spaceAround</code>
      <div class="block">1</div>
      <div class="block">2</div>
    </div>
    <div v-flex.toBottomRight class="container">
      <code>v-flex.toBottomRight</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div style="flex-basis: 100%"></div>
    <div v-flex.center class="container">
      <code>v-flex.center</code>
      <div class="block"></div>
    </div>
    <div v-flex.toMiddleRight class="container">
      <code>v-flex.toMiddleRight</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div v-flex.toBottomLeft class="container">
      <code>v-flex.toBottomLeft</code>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div style="flex-basis: 100%"></div>
    <div v-flex.toLeft.reverse class="container">
      <code>v-flex.toLeft.reverse</code>
      <div class="block">1</div>
      <div class="block">2</div>
    </div>
    <div v-flex.column.toLeft.reverse class="container">
      <code>v-flex.column.toLeft.reverse</code>
      <div class="block">1</div>
      <div class="block">2</div>
    </div>
    <div style="flex-basis: 100%"></div>
  </div>
</template>

<style>
body {
  margin: 0;
}
.container {
  width: 340px;
  height: 240px;
  border: 1px solid  rgba(0, 0, 0, 0.3);
  margin: 10px;
  position: relative;
}
.container code {
  position: absolute;
  left: 2px;
  top: 2px;
  font-family: 'Roboto Mono', Monaco, courier, monospace;
  padding: 2px 5px;
  color: #FF5616;
  background: #f8f8f8;
  margin: 0 1px;
  border: 1px solid currentColor;
  border-radius: 2px;
}
.block {
  width: 100px;
  height: 100px;
  border: 10px solid transparent;
  background-color: rgb(182, 181, 181);
  background-clip: content-box;
  box-sizing: initial;
  color: white;
  font-size: 13px;
}
.block ~ .block {
  border-left: none;
}
</style>