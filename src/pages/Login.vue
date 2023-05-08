<template>
    <el-row class="bg-indigo-500 min-h-screen">
        <el-col :span="16" class="flex items-center justify-center">
            <div class="flex flex-col">
                <span class="text-6xl text-white font-bold mb-3">管理系统</span>
                <span class="text-sm text-gray-300">这是一个Shop登陆管理系统的演示！</span>
            </div>
        </el-col>
        <el-col :span="8" class="bg-slate-50 flex flex-col items-center justify-center">
            <h3 class="text-3xl font-bold text-black mb-3">欢迎光临</h3>
            <div class="flex space-x-2 items-center justify-center mb-8">
                <span class="h-[1px] w-8 bg-gray-300"></span>
                <span class="text-sm text-gray-400">请输入用户名和密码</span>
                <span class="h-[1px] w-8 bg-gray-300"></span>
            </div>
            <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    class="w-[250px]"

            >
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <User/>
                            </el-icon>
                        </template>
                    </el-input>

                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码">

                        <template #prefix>
                            <el-icon>
                                <Lock/>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loading" type="primary" @click="submitForm" class="w-full" round
                               color="#6366f1">
                        登陆
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </el-row>
</template>
<script setup>
import {reactive, ref} from 'vue'
import {Lock, User} from "@element-plus/icons-vue";

const ruleFormRef = ref(null)
const ruleForm = reactive({
    username: '',
    password: '',
})

const rules = reactive({
    username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ]
})

import {login} from "../tools/management.js";
import {toast, setCookie} from "../tools/tools.js";
import {useRouter} from "vue-router";

const router = useRouter()
const loading = ref(false)
const submitForm = () => {
    ruleFormRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        loading.value = true
        login(ruleForm)
            .then(res => {
                toast('登陆成功')
                setCookie('token', res.data.token)
                console.log("res", res)
                router.push('/')
            })
            .finally(() => {
                loading.value = false

            })
    })
}
</script>
<style scoped>

</style>
