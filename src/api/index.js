import fetch from '@/utils/fetch'
export const getArticleDetail = params => {
  return fetch({
    url: '/article/getArticleDetail',
    method: 'post',
    param: params
  })
}
