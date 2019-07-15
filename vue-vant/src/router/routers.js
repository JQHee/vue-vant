
import home from './home'
import notfound from './404'
import mine from './mine'
import classify from './classify'
import address from './address'


export default [
  {
    path: '*',
    redirect: '404/entry'
  },
  {
    path: '/',
    redirect: 'home/entry'
  }
].concat(home, notfound, mine, classify, address)