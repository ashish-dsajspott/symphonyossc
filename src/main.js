import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import EleForm from 'vue-ele-form'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './extend.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EleForm, {
  upload: {
    action: 'https://jsonplaceholder.typicode.com/posts/', // 请求地址,
    data: { token: 'xxx' }, // 附带的参数,
    responseFn (response, file) {
      return file.url
    }
  },
  codemirror: {
    options: {
      tabSize: 4,
      styleActiveLine: false,
      lineNumbers: true,
      styleSelectedText: false,
      line: true,
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
      mode: 'text/javascript',
      // hint.js options
      hintOptions: {
        // 当匹配只有一项的时候是否自动补全
        completeSingle: false
      },
      // 快捷键 可提供三种模式 sublime、emacs、vim
      keyMap: 'sublime',
      matchBrackets: true,
      showCursorWhenSelecting: true,
      theme: 'monokai',
      extraKeys: { Ctrl: 'autocomplete' }
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
