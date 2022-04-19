import type {
  SearchHotProps
} from '@/interface'

const apiList = {
  // 热门搜索
  getSearchHot: '/search/hot'
}

export interface apiKeyDataType {
  getSearchHot: SearchHotProps
}

export type apiKeyType = keyof typeof apiList

export default apiList
