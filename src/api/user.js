import instance from '../utils/myhttp'

function getLogin (date) {
  return instance({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data: date
  })
}
export { getLogin }
