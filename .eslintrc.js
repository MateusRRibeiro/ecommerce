module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue'
  ],
  'rules': {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
    'vue/no-mult-spaces': 0,
    'vue/padding-line-between-blocks': ['error', 'always'],
    'no-console': ['error', {allow: ['error', 'warn', 'info']}]
  },
  "import/order": [
    "error",
    {
      "pathGroups": [
        {
          "pattern": "~/**",
          "group": "external",
          "position": "after"
        }
      ],
      "groups": [
        "builtin",
        "external",
        "internal",
        "unknown",
        "parent",
        "sibling",
        "index",
        "object",
        "type"
      ]
    }
  ]
}
