import instance from '../utils/myhttp'
// import store from '@/store/index'

function apiGetChannelList (params) {
  return instance({
    url: '/app/v1_0/user/channels',
    params
    // headers: {
    //   Authorization: 'Bearer ' + store.state.userInfo.token
    // }
  })
}

export { apiGetChannelList }
