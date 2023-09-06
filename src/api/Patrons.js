import apiService from "../pages/utils/request.service"

export const getListPatronApi = async (page) => {
    return await apiService()({
        url: 'api/blog/patrons',
        method: "get",
        params: {
            page,
            perPage: 5,
        }
    }).then((res) => res.data)
}

export const createPatronApi = async (data) => {
    const res = await apiService()({
        url: '/api/blog/patrons',
        method: "post",
        data
    })
    return res;
}

