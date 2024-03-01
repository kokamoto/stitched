<style>
  .terminal {
    font-family: monospace;
  }
  .terminal div {
    line-height: 1.5rem;
  }
  .terminal .prompt {
    opacity: 0.7;
  }
  .prompt.blink {
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
  }
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
</style>
<h1>Lab: Terminal Interface</h1>

<div class="terminal">
  <div class="terminal-output">
    <span>This is a terminal!</span>
  </div>
  <div class="terminal-command">
    <span>foobar</span>
  </div>
  <div class="terminal-error">
    <span>'foobar' not a valid command</span>
  </div>
  <div class="terminal-command">
    <span>help</span>
  </div>
  <div class="terminal-input">
    <span></span>
    <span class="prompt blink">&#9608;</span>
  </div>
</div>