import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";
import node from "@astrojs/node";

import icon from "astro-icon";
import rehypeCallouts from "rehype-callouts";

import preact from "@astrojs/preact";

const calloutOptions = {
	theme: "github",
};

// https://astro.build/config
export default defineConfig({
	site: "https://wheelsbot.dev",
	output: "static",
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [[rehypeCallouts, calloutOptions]],
	},
	integrations: [
		expressiveCode(),
		mdx(),
		sitemap(),
		spectre({
			name: "Wheelsblog V7",
			themeColor: "#1d754a",
			openGraph: {
				home: {
					title: "Wheelsblog V7",
					description: "The personal site of Owen Wertzberger",
				},
				blog: {
					title: "Blog",
					description: "Guides, tutorials, and infodumps. Usually all at once.",
				},
				projects: {
					title: "Stuff that I have worked on",
				},
			},
			giscus: {
				repository: "louisescher/spectre",
				repositoryId: "R_kgDONjm3ig",
				category: "General",
				categoryId: "DIC_kwDONjm3is4ClmBF",
				mapping: "pathname",
				strict: true,
				reactionsEnabled: true,
				emitMetadata: false,
				lang: "en",
			},
		}),
		icon({
			include: {
				mdi: ["*"],
				ri: ["*"],
			},
		}),
		preact(),
	],
	adapter: node({
		mode: "standalone",
	}),
});

