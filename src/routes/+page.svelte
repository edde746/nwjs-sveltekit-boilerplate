<script lang="ts">
  // ESM imports will result in Vite trying to externalize them.
  const fs = require("fs/promises");
  const os = require("os");

  var menu = new nw.Menu();

  menu.append(
    new nw.MenuItem({
      label: "Item A",
      click: function () {
        alert('You have clicked at "Item A"');
      },
    })
  );
  menu.append(new nw.MenuItem({ label: "Item B" }));
  menu.append(new nw.MenuItem({ type: "separator" }));
  menu.append(new nw.MenuItem({ label: "Item C" }));
</script>

<svelte:document
  on:contextmenu|preventDefault|stopPropagation={({ x, y }) => menu.popup(x, y)}
/>

<h1>Welcome to SvelteKit</h1>
<p>
  You are on {os.platform()} and you are using {os.arch()} architecture.
</p>

<a href="/test">Go to a second page</a>

<button
  on:click={() => {
    fs.writeFile("test.txt", "Hello world!");
  }}
>
  Create a file
</button>
