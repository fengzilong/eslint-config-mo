'use strict';

const path = require( 'path' );

module.exports = {
	extends: path.join( __dirname, 'index.js' ),
	rules: {
		'import/no-dynamic-require': 'off',
		'prefer-const': [ 'error', {
			ignoreReadBeforeAssign: true,
		} ],
	},
};
