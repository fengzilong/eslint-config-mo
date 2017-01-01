'use strict';

const path = require( 'path' );

module.exports = {
	extends: path.join( __dirname, 'index.js' ),
	rules: {
		'arrow-parens': [ 'error', 'as-needed' ],
		'import/no-dynamic-require': 'off',
		'no-var': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'prefer-const': [ 'error', {
			ignoreReadBeforeAssign: true,
		} ],
	},
};
