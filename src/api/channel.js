import instance from '../utils/myhttp'

function apiGetChannelList (params) {
  return instance({
    url: '/app/v1_0/user/channels',
    params
  })
}

export { apiGetChannelList }
