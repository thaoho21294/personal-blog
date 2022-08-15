import { getUser } from '../contexts'
import { PERMISSION } from '../constants'

const usePermission = () => {
  const user = getUser()
  const getPermission = (permission) => user?.permission?.includes(permission)

  return {
    canRead() {
      return getPermission(PERMISSION.READ)
    },
    canCreate() {
      return getPermission(PERMISSION.CREATE)
    },
    canUpdate() {
      return getPermission(PERMISSION.UPDATE)
    },
    canDelete() {
      return getPermission(PERMISSION.DELETE)
    },
  }
}

export default usePermission
