import Vue from 'vue'
import Router from 'vue-router'
import Imain from '@/components/Imain/Imain'

import iMusic from '@/components/Music/iMusic'
import MusicCat from '@/components/Music/Musiccat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Imain',
      component: Imain
    },
    {
      path: '/',
      name: 'Musiccat',
      component: MusicCat
    },
    {
      path: '/music/',
      name: 'Music',
      component: iMusic
    }
    ]
  }
)
