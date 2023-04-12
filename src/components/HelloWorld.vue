<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from '../store/counterStore'

const counterSotre = useCounterStore()
const router = useRouter();

defineProps<{ msg: string }>()

const count = ref(0)

function goback() {
  return router.back()
}

async function add100() {
  const result = await counterSotre.add100();
  console.log(result);
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ $t("message.hello") }}</h1>
  <h1>当前的计数为：{{ counterSotre.counter }} 双倍值：{{ counterSotre.doubleCount }}</h1>
  <el-button type="success" @click="counterSotre.increment">通过increment方法自增值</el-button>
  <el-button type="success" @click="counterSotre.counter++">直接访问state</el-button>
  <el-button type="success" @click="add100">异步任务加100（2秒后执行）</el-button>
  <p>
    <el-icon size="50" color="pink"><i-ep-user /></el-icon>
    <el-icon size="50" color="pink"><i-ep-filter /></el-icon>
  </p>
  <el-button type="success" @click="goback">返回首页</el-button>
  <language></language>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
