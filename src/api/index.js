import fetch from '@/utils/fetch'
export const getArticleDetail = params => {
  return fetch({
    url: '/article/getArticleDetail',
    method: 'get',
    params: params
  })
}

export const getArticleList = params => {
  return fetch({
    url: '/article/getArticleList',
    method: 'get',
    params
  })
}
