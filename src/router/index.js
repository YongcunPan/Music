import Vue from 'vue'
import Router from 'vue-router'
import Imain from '@/components/Imain/Imain'
import Inews from '@/components/Inews/Inews'

import Inewsindex from '@/components/Inews/Inewsindex'
import Inewsa from '@/components/Inews/Inewsa'
import Inewsb from '@/components/Inews/Inewsb'
import Inewsc from '@/components/Inews/Inewsc'

import MusicIndex from '@/components/Music/Music'
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
      path: '/b',
      // name: 'Inews',
      component: Inews,
      children: [
        { path: '', component: Inewsindex },
        { path: 'A', component: Inewsa },
        { path: 'B', component: Inewsb },
        { path: 'C', component: Inewsc }
      ]
    },
    {
      path: '/music/',
      name: 'Music',
      component: MusicIndex
    }
    ]
  }
)
