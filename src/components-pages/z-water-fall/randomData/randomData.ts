import { ref } from 'vue'
import { onReachBottom } from '@dcloudio/uni-app'

export const useGenerateImageData = () => {
  const images = [
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
    'http://192.168.1.15/testapkwgt/mm.png',
  ]

  const imageData = ref<{ id: number; url: string }[]>([])

  // 生成随机数据
  const generateRandomData = () => {
    const length = imageData.value.length
    const imageLength = images.length
    const data: any[] = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: length + i + 1,
        url: images[Math.floor(Math.random() * imageLength)],
      })
    }
    imageData.value = imageData.value.concat(data)
  }
  generateRandomData()

  onReachBottom(() => {
    generateRandomData()
  })

  return {
    imageData,
  }
}
