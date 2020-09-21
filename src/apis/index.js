import Request from '../utils/request'

export function coursesList(data) {
  return Request({
    url: `/api/edu/course/v1`,
    method: 'post',
    data: data
  })
}
