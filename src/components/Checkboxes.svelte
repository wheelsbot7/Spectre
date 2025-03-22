<script>
  let distro = $state("");
  let packages = $state([""]);

  import data from "/data/arch.json";

  let categories = data.map((item) => {
    let categoryName = Object.keys(item)[0];
    let programs = item[categoryName];
    return { categoryName, programs };
  });
  function join(packages) {
    if (packages.length === 1) return packages[0];

    switch (distro) {
      case "apt":
        return "sudo apt install " + `${packages.join(" ")}`;
      case "dnf":
        return "sudo dnf install " + `${packages.join(" ")}`;
      case "pacman":
        return "sudo pacman -S " + `${packages.join(" ")}`;
      default:
        return `${packages.join(" ")}`;
    }
  }
  import { copy } from "svelte-copy";
</script>

<h1>Linite Reloaded</h1>

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
<div class="container">
  {#each categories as category}
    {#if Object.keys(category.programs).length > 0}
      <div class="category">
        <h3>
          {category.categoryName}
        </h3>
        <ul>
          {#each Object.entries(category.programs) as [name, details]}
            <li>
              <label>
                <input
                  type="checkbox"
                  bind:group={packages}
                  value={details.program}
                />{#if details.icon}
                  <img
                    loading="lazy"
                    class="glow-icon"
                    src="/soft-icons/{details.icon}"
                    alt={name}
                    width="30"
                    height="30"
                    style="filter:
                invert(42%)
                sepia(33%)
                saturate(6029%)
                hue-rotate(238deg)
                brightness(99%)
                contrast(94%)"
                  />
                {/if}
                {name}
              </label>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  {/each}
</div>
<div>
  <div class="command">
    {#if packages.length === 0}
      <p>Please select at least one package</p>
    {:else}
      {distro === "apt"
        ? "sudo apt install "
        : distro === "dnf"
          ? "sudo dnf install"
          : "sudo pacman -S"}
      {packages.join(" ")}
    {/if}
  </div>
  <br />
  <button use:copy={join(packages)}> copy to clipboard </button>
</div>

<style>
  .command {
    display: flex;
    font-family: monospace;
    font-size: large;
    border-style: outset;
    border-color: white;
    border-radius: 1px;
    padding: 5px;
  }
  button:hover {
    cursor: pointer;
  }
  button {
    border: revert;
    margin: 10px;
    margin-left: 0;
  }
  .category {
    align-items: self;
    display: block;
  }
  .container {
    align-items: start;
    display: block;
  }
  ul {
    list-style-type: none;
    margin-top: auto;
  }
  h3 {
    margin: auto;
  }
  img {
    margin-bottom: -9px;
    margin-top: 9px;
    margin-right: 5px;
    margin-left: 5px;
  }
</style>
