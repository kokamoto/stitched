<style>
  .header {
    height: 2.3rem;
  }
  .page {
    margin-left: 2rem;
    margin-right: 2rem;
  }
</style>
<div class="header">
  <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
    <a class="pure-menu-heading" href="/">STITCHED</a>

    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="/" class="pure-menu-link">Home</a></li>
        <li class="pure-menu-item"><a href="/lab" class="pure-menu-link">Lab</a></li>
    </ul>
  </div>
</div>

<div class="page">
  <slot></slot>
</div>