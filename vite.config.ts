import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcssLoadConfig from 'postcss-load-config';

const postcssConfig = postcssLoadConfig();

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: await postcssConfig,
	},
});