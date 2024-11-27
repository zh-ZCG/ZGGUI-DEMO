<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref, computed, reactive } from 'vue'

import type {
  FormRules,
  zFormInstance,
  zFormItemInstance,
} from 'zgg-ui/components/z-form/types'
import type { RuleItem } from 'zgg-ui/libs/async-validator'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-form/index',
})
const { isDemoH5Page } = useDemoH5Page()
const formRef = ref<zFormInstance>()

// 表单数据
const formData = reactive({
  username: '',
  password: '',
  rePassword: '',
  mobile: '',
  verifyCode: '',
  sex: '',
  joinReason: [],
  score: 5,
  pay: false,
  payCount: 1,
  suggestionImages: [],
  suggestion: '',
  operate: '',
})

// 规则
// 二次验证密码
const validateRePassword: RuleItem['validator'] = (rule, value, callback) => {
  if (value !== formData.password) {
    return callback(new Error('两次输入密码不一致'))
  }
  return callback()
}
// 验证验证码
const asyncValidateVerifyCode: RuleItem['asyncValidator'] = (rule, value) => {
  return new Promise((resolve, reject) => {
    if (value !== '123456') {
      return reject(new Error('验证码错误'))
    }
    return resolve()
  })
}
// 验证加入理由
const validateJoinReason: RuleItem['validator'] = (rule, value, callback) => {
  if (!value?.length) {
    return callback(new Error('请选择加入理由'))
  }
  if (!value.includes('凶姐太漂亮')) {
    return callback(new Error('请选择正确的加入理由'))
  }
  return callback()
}
//验证payCount
const validatePayCount: RuleItem['validator'] = (rule, value, callback) => {
  if (formData.pay && (value < 10 || value > 50)) {
    return callback(new Error('请输入10-50之间的数字'))
  }
  return callback()
}
const formRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: ['change', 'blur'] },
    {
      pattern: /^[\u4E00-\u9FA5\w-_]{3,16}$/,
      message: '请输入3-16位汉字、英文、数字、下划线、横线',
      trigger: ['change', 'blur'],
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['change', 'blur'] },
    {
      pattern:
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      message: '密码必须包含大小写字母、数字和特殊符号，且不少于6位',
      trigger: ['change', 'blur'],
    },
  ],
  rePassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['change', 'blur'],
    },
    { validator: validateRePassword, trigger: ['change', 'blur'] },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: ['change', 'blur'] },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'change',
    },
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { asyncValidator: asyncValidateVerifyCode, trigger: 'blur' },
  ],
  sex: [
    { required: true, message: '请选择性别', trigger: 'change' },
    {
      type: 'enum',
      enum: [0, 1],
      message: '请选择正确的性别',
      trigger: 'change',
    },
  ],
  joinReason: [
    {
      required: true,
      type: 'array',
      message: '请选择加入理由',
      trigger: 'change',
    },
    { validator: validateJoinReason, trigger: 'change' },
  ],
  score: [
    {
      type: 'number',
      min: 1,
      max: 5,
      message: '请为ZGGUI打分',
      trigger: 'change',
    },
  ],
  payCount: [{ validator: validatePayCount, trigger: ['change', 'input'] }],
}

// 激活获取验证码输入
const mobileFormItemRef = ref<zFormInstance>()
const mobileInputBlur = ref(false)
const mobileInputBlurEvent = () => {
  mobileInputBlur.value = true
}
const isActiveGetVerifyCode = computed(() => {
  return (
    (mobileInputBlur.value && mobileFormItemRef.value?.validateState === 'success') ||
    formData.verifyCode
  )
})
// 获取验证码
const getMobileVerifyCode = () => {
  uni.showLoading({
    title: '发送中...',
  })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({
      title: '请输入123456',
    })
  }, 2000)
}

// vue版本选择
const operatePickerData: string[] = ['操作一', '操作二', '操作三']
const showoperatePicker = ref(false)
const openoperatePicker = () => {
  showoperatePicker.value = true
}

/* 提交表单 */
const submitForm = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      uni.showToast({
        title: '提交成功',
      })
    } else {
      uni.showToast({
        title: '表单校验失败',
        icon: 'none',
      })
    }
  })
}

/**定义上传路径 */
const UPLOAD_URL = 'http://localhost:3333/upload'
</script>

<template>
  <CustomPage title="表单" :is-h5-demo-page="isDemoH5Page">
    <z-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="140"
      label-position="top"
    >
      <z-form-item label="用户名" prop="username">
        <z-input v-model="formData.username" clearable />
      </z-form-item>
      <z-form-item label="密码" prop="password">
        <z-input v-model="formData.password" type="password" />
      </z-form-item>
      <z-form-item label="再次输入密码" prop="rePassword">
        <z-input v-model="formData.rePassword" type="password" />
      </z-form-item>
      <z-form-item ref="mobileFormItemRef" label="手机号" prop="mobile">
        <z-input
          v-model="formData.mobile"
          type="number"
          clearable
          @blur="mobileInputBlurEvent"
        />
      </z-form-item>
      <z-form-item v-if="isActiveGetVerifyCode" label="验证码" prop="verifyCode">
        <z-input v-model="formData.verifyCode" clearable>
          <template #suffix>
            <z-button type="primary" @click="getMobileVerifyCode">
              获取验证码
            </z-button>
          </template>
        </z-input>
      </z-form-item>
      <z-form-item label="性别" prop="sex">
        <z-radio-group v-model="formData.sex" border>
          <z-radio :label="0">男</z-radio>
          <z-radio :label="1">女</z-radio>
        </z-radio-group>
      </z-form-item>
      <z-form-item label="ZGGUI好用吗" prop="joinReason">
        <z-checkbox-group v-model="formData.joinReason" wrap>
          <z-checkbox label="好用" active-color="success">
            <text class="cs5">好用</text>
          </z-checkbox>
          <z-checkbox label="不错">不错</z-checkbox>
          <z-checkbox label="太棒了">太棒了</z-checkbox>
        </z-checkbox-group>
      </z-form-item>
      <z-form-item label="请选择操作的类型" props="operate">
        <z-input
          v-model="formData.operate"
          type="select"
          placeholder="请选择操作的类型"
          @click="openoperatePicker"
        />
      </z-form-item>
      <z-form-item
        label="请给ZGGUI打个分吧"
        prop="score"
        label-position="left"
        label-width="100%"
      >
        <z-rate
          v-model="formData.score"
          active-color="warning"
          inactive-icon="star1"
          active-icon="star3"
        />
      </z-form-item>
      <z-form-item label="说出你的建议" prop="suggestion">
        <z-input v-model="formData.suggestion" type="textarea" />
      </z-form-item>
      <z-form-item label="上传建议图片" prop="suggestionImages">
        <z-image-upload
          name="image"
          v-model="formData.suggestionImages"
          :action="UPLOAD_URL"
        />
      </z-form-item>
      <div style="border: 4rpx solid #eeeeee; padding: 10rpx; border-radius: 15rpx">
        <z-form-item
          label="设置你的年龄"
          prop="pay"
          label-position="left"
          label-width="100%"
        >
          <z-switch size="normal" v-model="formData.pay" shape="square" />
        </z-form-item>
        <block v-if="formData.pay">
          <z-form-item label="数量" prop="payCount">
            <div class="df aic">
              <div style="flex: 1">
                <z-slider v-model="formData.payCount" :min="1" :max="100" />
              </div>
              <div>
                <z-number-box v-model="formData.payCount" :min="1" :max="100" />
              </div>
            </div>
          </z-form-item>
        </block>
      </div>
    </z-form>
    <div class="df jcc" style="margin-top: 20px; width: 100%">
      <z-button size="large" type="primary" @click="submitForm">提交</z-button>
    </div>
  </CustomPage>

  <z-picker
    v-model="formData.operate"
    v-model:open="showoperatePicker"
    :data="operatePickerData"
  />
</template>

<style lang="less" scoped>
.form-container {
  position: relative;
  width: 100%;
}
</style>
