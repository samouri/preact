const dts = require('dts-bundle');
const path = require('path')

dts.bundle({
	name: 'preact',
	main: '../src/index.d.ts',
	out: '../dist/index.d.ts'
});

// TODO: instead of import from '../..' rewrite to preact && preact/hooks
// dts.bundle({
// 	name: 'preact/compat',
// 	main: '../compat/index.d.ts',
//  out: '../compat/dist/index.d.ts'
// });

// TODO: instead of import from '../..' rewrite to preact && preact/hooks
// dts.bundle({
// 	name: 'preact/hooks',
// 	main: '../hooks/index.d.ts',
//  out: '../hooks/dist/index.d.ts'
// });
