<script lang="ts">
  // ESM imports will result in Vite trying to externalize them.
  const fs = require("fs/promises");
  const os = require("os");

  var menu = new nw.Menu();

  const menuItems = [
    {
      label: "Item A",
      click: function () {
        alert('You have clicked at "Item A"');
      }
    },
    { label: "Item B" },
    { type: "separator" },
    { label: "Item C" }
  ];

  if (process.versions['nw-flavor'] === 'sdk') {
    menuItems.push({
      label: "Open Dev Tools",
      click: function () {
        nw.Window.get().showDevTools();
      }
    });
  }

  menuItems.forEach(function (item) {
    menu.append(new nw.MenuItem(item));
  });
</script>

<svelte:document on:contextmenu|preventDefault|stopPropagation={({ x, y }) => menu.popup(x, y)} />

<div class="main">
  <div class="icons">
    <img src="/svelte.svg" alt="SvelteKit" />
    <span>+</span>
    <img src="/nwjs.png" alt="NW.js" />
  </div>

  <h1>SvelteKit + NW.js Boilerplate</h1>
  <p>
    Your operating system is {os.platform()}, running on a {os.arch()} architecture.
    <br />You are currently utilizing NW.js version {process.versions.nw} and Node.js version {process.versions.node}.
  </p>

  <a href="/browser/">File Browser Example</a>
</div>

<style>
  .main {
    height: 100vh;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
  }

  .icons img {
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }

  h1 {
    margin-bottom: 0;
  }

  a {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: #fe3f00;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
  }
</style>
