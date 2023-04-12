<template>
    <div>
        <h1>这是测试的页面</h1>
        <h1>当前的计数为：{{ counterSotre.counter }} 双倍值：{{ counterSotre.doubleCount }}</h1>
        <ul>
            <li>
                <router-link to="/helloworld">router-link跳转到helloworld页面</router-link>
            </li>
            <li>
                <a @click="goto('/helloworld')">点击事件跳转到helloworld页面</a>
            </li>
        </ul>
    </div>
    <!-- <el-container>
        <el-header>

            <Head></Head>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
        <el-footer>Footer</el-footer>
    </el-container> -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCounterStore } from '../../store/counterStore'
import Head from "../head/index.vue";

const counterSotre = useCounterStore()
const router = useRouter();
function goto(path: string) {
    router.push(path)
}
</script>

<style scoped>
ul {
    list-style: none;
}

.common-layout {
    border: 1px solid black;
}
</style>