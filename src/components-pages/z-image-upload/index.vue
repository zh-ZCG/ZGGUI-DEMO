<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import zTest from 'zgg-ui/libs/zTest'

import type {
  ImageUploadCustomCallbackFunction,
  ImageUploadCustomFunction,
  ImageUploadFile,
  ImageUploadInstance,
} from 'zgg-ui/components/z-image-upload/z-image-upload'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-image-upload/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 图片上传地址
const uploadActionUrl = 'http://localhost:3333/upload'

// 上传时携带的请求头
const uploadActionHeaders = {}

// 基础图片上传
const baseImageUploadValue = ref<string[]>([])

// 已上传图片列表
const defaultValueImageUploadValue = ref<string[]>([
  'http://192.168.1.15/testapkwgt/mm.png',
])

// 自定义上传框列表
const customUploadContainerImageUploadRef = ref<ImageUploadInstance>()
const customUploadContainerImageUploadValue = ref<string[]>([])
const customUploadBtnClick = () => {
  customUploadContainerImageUploadRef.value?.chooseFile()
}
const customUploadClearImage = () => {
  uni.showModal({
    title: '提示',
    content: '是否清空已上传图片',
    success: res => {
      if (res.confirm) {
        customUploadContainerImageUploadRef.value?.clear()
      }
    },
  })
}

// 自定义处理接口返回内容
const customUploadCallbackImageUploadValue = ref<string[]>([])
const customUploadCallbackHandle: ImageUploadCustomCallbackFunction = (
  res: UniApp.UploadFileSuccessCallbackResult
) => {
  const { statusCode, data: resData } = res
  if (![200, 201, 204].includes(statusCode)) {
    console.error(res?.errMsg || '上传文件发生错误')
  } else {
    const data = zTest.jsonString(resData) ? JSON.parse(resData) : resData
    if (data.code === 200 && data.data.errCode === 0) {
      return data.data.url
    } else {
      console.error(
        data?.message === undefined ? data?.msg || '上传文件发生错误' : data.message
      )
    }
  }
  return ''
}

// 自定义上传函数
const customUploadImageUploadValue = ref<string[]>([])
const customUploadHandle: ImageUploadCustomFunction = (file: ImageUploadFile) => {
  return new Promise((resolve, reject) => {
    const url = (file as UniApp.ChooseImageSuccessCallbackResultFile).path
    uni.uploadFile({
      url: uploadActionUrl,
      header: uploadActionHeaders,
      filePath: url,
      name: 'image',
      success: res => {
        const { statusCode, data: resData } = res
        if (![200, 201, 204].includes(statusCode)) {
          console.error(res?.errMsg || '上传文件发生错误')
          reject(res?.errMsg || '上传文件发生错误')
        } else {
          const data = zTest.jsonString(resData) ? JSON.parse(resData) : resData
          if (data.code === 200 && data.data.errCode === 0) {
            resolve(data.data.url)
          } else {
            console.error(
              data?.message === undefined
                ? data?.msg || '上传文件发生错误'
                : data.message
            )
            reject(
              data?.message === undefined
                ? data?.msg || '上传文件发生错误'
                : data.message
            )
          }
        }
      },
      fail: err => {
        reject(err)
      },
    })
  })
}
</script>

<template>
  <CustomPage title="图片上传" :is-h5-demo-page="isDemoH5Page">
    <div class="ce5">
      <div class="fs2">警告:</div>
      <div class="fs4">
        请勿将演示接口用于自己的项目中，如果您的项目中需要使用图片上传，请使用自己的图片上传接口。
      </div>
    </div>
    <DemoContainer title="基础使用">
      <div class="image-upload-container">
        <div class="image-upload-item">
          图片列表:
          <text class="cgray3 upload-value">
            [{{ baseImageUploadValue.join(',') }}]
          </text>
        </div>
        <div class="image-upload-item">
          <z-image-upload
            v-model="baseImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置已上传图片列表">
      <div class="image-upload-container">
        <div class="image-upload-item">
          <z-image-upload
            v-model="defaultValueImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义处理接口返回的内容">
      <div class="image-upload-container">
        <div class="image-upload-item">
          <z-image-upload
            v-model="customUploadCallbackImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
            :custom-upload-callback="customUploadCallbackHandle"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义处理上传函数">
      <div class="image-upload-container">
        <div class="image-upload-item">
          <z-image-upload
            v-model="customUploadImageUploadValue"
            :custom-upload-handler="customUploadHandle"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义上传框">
      <div class="image-upload-container">
        <div class="image-upload-item">
          <z-image-upload
            ref="customUploadContainerImageUploadRef"
            v-model="customUploadContainerImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
            :limit="1"
          >
            <template #uploadBtn>
              <div class="custom-upload-item btn" @tap.stop="customUploadBtnClick">
                请上传身份证正面
              </div>
            </template>
            <template #uploadImage="{ data }">
              <image
                class="custom-upload-item image"
                :src="data.url"
                mode="aspectFill"
                @tap.stop="customUploadClearImage"
              />
            </template>
          </z-image-upload>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.image-upload-container {
  position: relative;
  width: 100%;

  .image-upload-item {
    position: relative;
    width: 100%;

    & + .image-upload-item {
      margin-top: 30rpx;
    }

    .upload-value {
      word-break: break-all;
    }

    .custom-upload-item {
      width: 100%;
      height: 340rpx;
      border-radius: 30rpx;
      background-color: #eeeeee;
      color: #666666;

      &.btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
