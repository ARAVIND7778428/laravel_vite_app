<h1>Laravel MIX commands from the starting point: (using @vite (latest one (recommonded)))</h1>

<b> ==> composer create-project laravel/laravel laravel-mix-demo

<b> ==> npm install

(This installs the vite, laravel-vite-plugin, tailwindcss, postcss)

Next create the Css and Js files

<b> ==> In vite.js add the following content
 export default defineConfig([
	plugins: [
		laravel([
			'resources/css/style.css',
			'resources/js/script.js',
		]),
	],
 ]); 

<b> ==> npm run dev

<b> ==> npm run build

