import instance from '../utils/myhttp'

function getLogin (data) {
  return instance({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data
  })
}
export { getLogin }
