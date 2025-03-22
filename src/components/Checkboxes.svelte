<script>
  let distro = $state("apt");
  let packages = $state([""]);

  let data = ./arch.json;

  let categories = data.map((item) => {
    let categoryName = Object.keys(item)[0];
    let programs = item[categoryName];
    return { categoryName, programs };
  });
  function join(packages) {
    if (packages.length === 1) return packages[0];
    return `${packages.join(" ")}`;
  }
</script>

<h2>Distro</h2>

<label>
  <input type="radio" bind:group={distro} value={"apt"} />
  Ubuntu/Debian
</label>

<label>
  <input type="radio" bind:group={distro} value={"dnf"} />
  Fedora
</label>

<label>
  <input type="radio" bind:group={distro} value={"pacman"} />
  Arch
</label>

<h2>Packages</h2>

{#each categories as category}
  {#if Object.keys(category.programs).length > 0}
    <div class="category">{category.categoryName}</div>
    <ul>
      {#each Object.entries(category.programs) as [name, details]}
        <li>
          <label>
            <input
              type="checkbox"
              bind:group={packages}
              value={details.program}
            />
            {name}
          </label>
        </li>
      {/each}
    </ul>
  {/if}
{/each}
<div class="expressive-code">
  {#if packages.length === 0}
    <p>Please select at least one package</p>
  {:else}
    <div>
      {distro === "apt"
        ? "sudo apt install "
        : distro === "dnf"
          ? "sudo dnf install"
          : "sudo pacman -S"}
      {join(packages)}
    </div>
  {/if}
</div>
