<script>
  let distro = $state("apt");
  let packages = $state(["gcc"]);

  let programs = ["gcc", "qbittorrent", "wine"];

  function join(packages) {
    if (packages.length === 1) return packages[0];
    return `${packages.slice(0, -1).join(" ")} ${packages[packages.length - 1]}`;
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

<h2>Commands</h2>

{#each programs as program}
  <label>
    <input type="checkbox" bind:group={packages} value={program} />
    {program}
  </label>
{/each}

{#if packages.length === 0}
  <p>Please select at least one package</p>
{:else}
  <p>
    Here's the command for {distro}:
    {distro === "apt"
      ? "sudo apt install "
      : distro === "dnf"
        ? "sudo dnf install"
        : "sudo pacman -S"}
    {join(packages)}
  </p>
{/if}
