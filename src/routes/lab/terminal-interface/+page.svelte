<style>
  .terminal {
    font-family: monospace;
    border: 1px solid #333;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: text;
  }
  .terminal div {
    line-height: 1.5rem;
  }
  .terminal-input {
    display: flex;
  }
  .terminal-input input {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }

  .terminal-command::before {
    content: '$ ';
  }

  .terminal-input::before {
    content: '$ ';
    width: 1rem;
  }

  .terminal-error {
    color: darkred;
  }
</style>

<script lang="ts">
  let cmd = "";

  let commands: string[] = [
    "This is a terminal",
    "Foobar",
    "help"
  ]

  function onCmdEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
      if (event.target.value === 'clear') {
        commands = [];
      } else {
        commands = [...commands, event.target.value]
      }
      cmd = "";
    }
  }

</script>

<h1>Lab: Terminal Interface</h1>

<div class="terminal">
  <div class="terminal-output">
    <span><strong>This is a terminal!</strong></span>
  </div>
  <div class="terminal-command">
    <span>foobar</span>
  </div>
  <div class="terminal-error">
    <span>'foobar' not a valid command</span>
  </div>
  {#each commands as command}
  <div class="terminal-command">
    <span>{command}</span>
  </div>
  {/each}
  <div class="terminal-input">
    <input bind:value={cmd} on:keydown={onCmdEnter}/>
  </div>
</div>