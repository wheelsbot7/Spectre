<script>
  let distro = $state("apt");
  let packages = $state([""]);

  let data = [
    {
      Utilities: {
        "Owncloud Client": {
          icon: "owncloud.svg",
          program: "owncloud-client",
        },
        "OpenJDK JRE": {
          icon: "openjsk.svg",
          program: "jre-openjdk",
        },
      },
    },
    {
      Editors: {
        Vim: {
          icon: "vim.png",
          program: "vim",
        },
        Neovim: {
          icon: "neovim.png",
          program: "neovim",
        },
        Eclipse: {
          icon: "eclipseide.svg",
          program: "eclipse-java-bin",
        },
        "Visual Studio Code - OSS": {
          icon: "visualstudiocode.svg",
          program: "code",
        },
        "Zed Editor": {
          icon: "zedindustries.svg",
          program: "zed",
        },
        QTCreator: {
          icon: "qt.svg",
          program: "qtcreator",
        },
      },
    },
    {
      "Web Browsers": {
        Chromium: {
          icon: "googlechrome.svg",
          program: "chromium",
        },
        Firefox: {
          icon: "firefox.svg",
          program: "firefox",
        },
        LibreWolf: {
          icon: "firefox.svg",
          program: "librewolf-bin",
        },
      },
    },
    {
      "Developer Tools": {
        "Python 3 Development": {
          icon: "python.svg",
          program: "python3",
        },
        OpenJDK: {
          icon: "openjdk.svg",
          program: "jdk-openjdk",
        },
        "OpenJDK Java 8 JDK": {
          program: "jdk8-openjdk",
        },
        "gcc and g++": {
          icon: "gnu.svg",
          program: "gcc",
        },
        make: {
          icon: "make.svg",
          program: "make",
        },
      },
    },
    {
      Graphics: {
        Krita: {
          icon: "krita.svg",
          program: "krita",
        },
      },
    },
    {
      Office: {
        LibreOffice: {
          icon: "libreoffice.svg",
          program: "libreoffice",
        },
      },
    },
    {
      Media: {
        Kodi: {
          icon: "kodi.svg",
          program: "kodi",
        },
      },
    },
    {
      Messaging: {},
    },
    {
      Gaming: {},
    },
    {
      Other: {
        Lutris: {
          icon: "lutris.svg",
          program: "lutris",
        },
        Virtualbox: {
          icon: "virtualbox.svg",
          program: "virtualbox",
        },
        Wine: {
          icon: "wine.svg",
          program: "wine",
        },
      },
    },
  ];

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
