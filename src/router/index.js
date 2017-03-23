import Vue from 'vue'
import Router from 'vue-router'

import iMusic from '@/components/Music/iMusic'
import MusicCat from '@/components/Music/Musiccat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Musiccat',
      component: MusicCat
    },
    {
      path: '/music',
      name: 'Music',
      component: iMusic
    }
    ]
  }
)
