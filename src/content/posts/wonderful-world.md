---
title: The Wonderful World of Dotfiles
createdAt: 12-30-2024
draft: false
image: "../assets/spectre.png"
tags:
  - guide
  - linux
description:
  "Dotfiles are a fun and infuriating part of Linux. This article will guide you
  through my own, focusing on Hyprland and Neovim."
icon: "mdi:settings"
---

I love it when names have a deeper meaning behind them, both linguistically and
conceptually. Those etymology charts in online dictionaries always fascinated
me, like little maps of interpretation. Conceptually, I have SCP-4000 to thank
for my love of name-based magic. Oh, sorry I meant to say
<span style='color:green; font-weight: bold;'>THAT ONE PLACE WITH THE FAIRIES IN
A FOREST THAT CAN'T BE REFERRED TO WITH THE SAME NAME TWICE</span>.

But as you've probably guessed, today I want to talk about something named so
literally I can't help but love it. There's nothing to read into, nothing to
extract hidden meaning from. It's as subtle as a sledgehammer and as elegant as
a cinder-block. Dotfiles are called that because hidden items in a file manager
are prefixed with a period. Personally, this radical simplicity is a breath of
fresh air. Not just the name, but hiding sensitive files behind such a
straightforward barrier. Windows requires you to type out `%appdata%` every
single time, and sometimes it's in `%localappdata%` or the Documents folder or
some other app-specific folder. I've been confused by Linux's lack of a "Program
Files" folder but it's worth it if I can find the files I'll actually edit.

The main strength of Linux has always been its customization, but that
inevitably scares off people don't care. It's like that old community in-joke:
"The best part of Linux is that you can customize anything, the worst part of
Linux is that you _have to_ customize _everything_". Thankfully, the existence
of a dotfiles folder partially negates this potential hurdle by making it
trivial to copy someone else's setup. Which brings me to the reason I wanted to
make this post, and the software I'm currently writing in...

## ![Neovim logo](../assets/devicon--neovim.svg) Neovim

Neovim is a heavily refactored fork of
[Vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>) , which was a clone of
[VI](<https://en.wikipedia.org/wiki/Vi_(text_editor)>), which was the visual
mode of a command line text editor called
[EX](<https://en.wikipedia.org/wiki/Ex_(text_editor)>), which was an optimized
version of [ED](<https://en.wikipedia.org/wiki/Ed_(software)>), which was a Unix
port of [QED](<https://en.wikipedia.org/wiki/QED_(text_editor)>)[^1]. This is
relevant because beyond modernizing an ancient program, Neovim was designed for
extensibility. Fitting considering how far back its roots stretch. And make no
mistake, those roots are still there. EX was a complete rewrite, so only design
decisions remain from ED and QED, but beyond that? There's C code from the 70's
running under the hood, providing the exact same functionality it did back then.
Imagine if all software preservation was this easy! No emulation, no
compatibility layers, no nothing, just CPU instructions triggered on key press.

[^1]: Which stands for Quick EDitor, if you were wondering.

Anyway, the point of going over Neovim's dumb-as-bricks foundations was to show
how easily dotfiles can transform a program into something unrecognizable (and
if you aren't careful, something far less usable).

> [!note]
>
> This is a callout section that works in neovim, but it might not work in Astro

> [!important]
>
> This one's pretty real fr fr

> [!caution]
>
> DON'T DO THIS NO

> [!warning]
>
> DON'T DO THIS EITHER NONOONONONONONONONONONONONO

> [!tip]
>
> don't do this ever okay?
