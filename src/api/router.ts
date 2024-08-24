import axios from 'axios'
import Cookies from 'js-cookie'

const BaseURL = process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL

const publicRouter = axios.create({
  baseURL: BaseURL + '/api',
})

const privateRouter = axios.create({
  baseURL: BaseURL + '/api',
})

privateRouter.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const router = {
  public: publicRouter,
  private: privateRouter,
}

export default router
