import pluginVue from 'eslint-plugin-vue'
export default [
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/recommended'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    rules: {
      'vue/html-quotes': ['error', 'double' | 'single', { 'avoidEscape': false }]
    }
  }
]