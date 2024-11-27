import { getCurrentInstance, inject } from 'vue'
import { indexPageContextKey } from '../utils/index-page'

type OnLoadFunction = () => void
type OnShowFunction = () => void

export const useIndexPageProvide = (
  name: string,
  onShow: OnShowFunction,
  onLoad: OnLoadFunction
) => {
  const instance = getCurrentInstance()
  const { uid } = instance!

  const indexPage = inject(indexPageContextKey, null)

  indexPage?.addItem({
    name,
    uid,
    onShow,
    onLoad,
  })
}
