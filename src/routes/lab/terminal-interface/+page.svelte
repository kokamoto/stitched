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

  import { type TerminalLine, TerminalLineType } from "$lib/terminal/types";

  let cmd = "";

  let history: string[] = [
    "foobar"
  ];
  let historyIndex = history.length - 1;

  let terminalLines: TerminalLine[] = [{
    text: 'This is a terminal',
    type: TerminalLineType.Output
  }, {
    text: 'foobar',
    type: TerminalLineType.Command
  }, {
    text: 'Not a valid command: foobar',
    type: TerminalLineType.Error
  }];

  function onCmdEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
      if (event.target.value === 'clear') {
        terminalLines = [];
      } else {
        terminalLines = [...terminalLines, {
          type: TerminalLineType.Command,
          text: event.target.value
        }];
        history = [...history, event.target.value];
      }
      cmd = "";
      historyIndex = history.length - 1;
    }
  }

</script>

<h1>Lab: Terminal Interface</h1>

<div class="terminal">
  {#each terminalLines as terminalLine}
  <div class="{terminalLine.type}">
    <span>{terminalLine.text}</span>
  </div>
  {/each}
  <div class="terminal-input">
    <input bind:value={cmd} on:keydown={onCmdEnter}/>
  </div>
</div>