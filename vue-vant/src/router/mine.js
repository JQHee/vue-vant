import _import from './_import'
// 首页
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/mine',
        component: _import('mine'),
        children: [
          {
            path: 'entry',
            component: _import('mine/entry'),
            meta: {
              title: '我的'
            }
          }
        ]
      }
    ]
  }
]