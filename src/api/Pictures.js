import apiService from "../pages/utils/request.service";

export const getListPictureApi = async (page) => {
    return await apiService()({
      url: '/api/blog/pictures',
      method: "get",
      params: {
        page,
        perPage: 5,
      }
    }).then((res) => res.data)
}
  
