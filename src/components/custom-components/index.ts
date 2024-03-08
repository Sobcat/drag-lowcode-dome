import { createApp } from 'vue'
import AppTow from '@/AppTow.vue'
const app = createApp(AppTow)
const components = ['VButton']
components.forEach((e) => {
  app.component(e, () => import(`@/custom-components/${e}/Component`))
  app.component(e + 'Attr', () => import(`@/custom-components/${e}/Attr`))
})
console.log(app)
