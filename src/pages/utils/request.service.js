import axios from "axios"
import { API_ROOT } from "./constants"

const apiService = () => {
	const configOption = {
		baseURL: API_ROOT,
		timeout: 5000,
	}
	const instance = axios.create(configOption)

	return instance;
}

export default apiService
