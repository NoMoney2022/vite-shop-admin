<template>
    <div class="w-[600px] h-auto border rounded">
        <div class="bg-indigo-300">{{ msg }}</div>
        <el-button @click="logout">登出</el-button>
    </div>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import {useRouter} from "vue-router";
import {supabase} from '../supabase'

const router = useRouter()

const msg = ref('')

onMounted(async () => {
    const {data: {user}} = await supabase.auth.getUser()

    if (user) {
        msg.value = `欢迎回来，${user.email}`
    } else {
        msg.value = '请先登陆'
        await router.push('/login')

    }
})

const logout = async () => {
    let {error} = await supabase.auth.signOut()
    if (error) {
        alert(error.message)
    }
    console.log('logout')
    location.reload()
}


</script>
<style scoped>

</style>
