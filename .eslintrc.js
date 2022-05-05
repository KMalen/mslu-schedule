module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'consistent-return': 0,
		'comma-dangle': [2, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'linebreak-style': 0,
		'padded-blocks': 0,
		indent: [1, 'tab', { SwitchCase: 1 }],
		'no-underscore-dangle': [2, { allow: ['_id', '__v', '_showDetails', '_values'] }],
		'no-param-reassign': [2, { props: false }],
		'new-cap': [2, { capIsNewExceptions: ['Router', 'ObjectId'] }],
		'no-tabs': 0,
		'max-len': [1, 120], // extended
		'no-plusplus': 0, // disabled

		'import/prefer-default-export': 0,
		'import/no-named-as-default': 0,

		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,

		'no-mixed-operators': 0,
		'no-useless-catch': 0,

		'require-atomic-updates': 0,

		// vue overwrites
		'vue/html-indent': [1, 'tab'],
		'vue/max-attributes-per-line': 0
	}
};
