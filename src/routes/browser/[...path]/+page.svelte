<script>
  import { page } from "$app/stores";
  const fs = require("fs/promises");
  const path = require("path");

  $: basePath = `/${$page.params.path || ""}`;
  $: files = fs.readdir(basePath).then((files) =>
    Promise.all(
      files.map(async (file) => ({
        file,
        isDirectory: await fs
          .stat(`${basePath}/${file}`)
          .then((stat) => stat.isDirectory())
          .catch(() => false),
      })),
    ),
  );
</script>

<div class="container">
  <header>
    <a href="/">&larr;</a>
    <h1>File Browser</h1>
  </header>

  {#await files}
    <p>loading...</p>
  {:then files}
    <div class="files">
      <a class="folder" href="/browser/{path.join(basePath, '..')}">
        <span>🔙</span>
        ..
      </a>
      {#each files as { file, isDirectory }}
        {#if isDirectory}
          <a class="folder" href="/browser/{path.join(basePath, file)}">
            <span>📁</span>
            {file}
          </a>
        {:else}
          <span class="file">
            <span>📄</span>
            {file}
          </span>
        {/if}
      {/each}
    </div>
  {:catch error}
    <p>{error.message}</p>
  {/await}
</div>

<style>
  .container {
    padding: 0 2rem;
    margin-bottom: 1.75rem;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  header > a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  header > a:hover {
    background-color: #262626;
  }

  .files {
    display: flex;
    flex-direction: column;
  }

  .folder,
  .file {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
  }

  .file {
    cursor: not-allowed;
  }

  .folder:hover {
    background-color: #262626;
  }
</style>
