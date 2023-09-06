import apiService from "../pages/utils/request.service"

export const getListBookApi = async (page) => {
  return await apiService()({
    url: '/api/blog/patrons',
    method: "get",
    params: {
      page,
      perPage: 5,
    }
  }).then((res) => res.data)
}

export const createBookApi = async (data) => {
  const res = await apiService()({
    url: '/api/blog/patrons',
    method: "post",
    data
  })
  console.log('createBookApi', res)
  return res
} 

export const deleteBookApi = async (id) => {
  const res = await apiService()({
    url: `/api/blog/patrons/${id}`,
    method: "delete",
  })
  console.log('createBookApi', res)
  return res
} 

export const updateBookApi = async (id, data) => {
  const res = await apiService()({
    url: `/api/blog/patrons/${id}`,
    method: "put",
    data
  })
  return res
} 