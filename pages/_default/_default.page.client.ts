import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import { PageContext } from './types'

import { useClientRouter } from 'vite-plugin-ssr/client/router'



let app: ReturnType<typeof createApp>

const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContext) {
    if(!app) {
      app = createApp(pageContext)
      app.mount('#app')
    } else {
      console.log('page changed')
      app.changePage(pageContext)
    }
  },
  onTransitionEnd: () => {},
  onTransitionStart: () => {}
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})