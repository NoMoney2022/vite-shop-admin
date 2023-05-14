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
                <el-form-item prop="email">
                    <el-input v-model="ruleForm.email" placeholder="请输入用户名">
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
                    <el-button :loading="loading" type="primary" @click="handleLogin" class="w-full" round
                               color="#6366f1">
                        登陆
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </el-row>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {supabase} from '../supabase'
import {Lock, User} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const router = useRouter()

const loading = ref(false)
const ruleFormRef = ref(null)
const ruleForm = reactive({
    email: '',
    password: '',
})

const rules = reactive({
    email: [
        {required: true, message: '请输入邮箱', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
    ],
})

const handleLogin = async () => {
    try {
        loading.value = true

        let {data, error} = await supabase.auth.signUp({
            email: ruleForm.email,
            password: ruleForm.password
        })
        if (error) throw error

        console.log('登陆成功')
        await router.push('/')

    } catch (error) {
        if (error instanceof Error) {
            alert(error.message)
        }
    } finally {
        loading.value = false
    }
}

</script>


<style scoped>

</style>
