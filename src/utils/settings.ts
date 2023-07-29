import 'vite/client'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID
const CERAMIC_URL = import.meta.env.VITE_CERAMIC_URL

export { BACKEND_BASE_URL, GITHUB_CLIENT_ID, CERAMIC_URL }
