import Request from '../utils/request'

export function coursesList(params) {
  return Request({
    url: `/api/login`,
    method: 'get',
  })
}
