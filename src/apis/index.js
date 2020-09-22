import Request from '../utils/request'

export function coursesList(data) {
  return Request({
    url: `/api/edu/course/v1/courses`,
    method: 'post',
    data: data
  })
}

export function coursesListGet(data) {
  return Request({
    url: `/api/edu/course/v1/courses/a`,
    method: 'get',
    data: data
  })
}
