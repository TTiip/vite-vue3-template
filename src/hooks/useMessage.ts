// import { ElMessage } from 'element-plus'

type typeKey = 'success' | 'warning' | 'info' | 'error' | undefined

const useMessage = (
  type: typeKey,
  message: string,
  showClose = false
): void => {
  // 此处没有引入第三方库，先这么写后来用到再改

  // ElMessage({
  //   showClose,
  //   message,
  //   type
  // })
  console.log({
    showClose,
    message,
    type
  })
}

export default useMessage
