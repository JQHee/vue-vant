import _import from './_import'
// 首页
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/classify',
        component: _import('classify'),
        children: [
          {
            path: 'entry',
            component: _import('classify/entry'),
            meta: {
              title: '分类'
            }
          }
        ]
      }
    ]
  }
]