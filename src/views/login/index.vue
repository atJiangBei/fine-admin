<script setup lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { login } from '@/api/user';
import { setToken } from '@/utils/auth';
import router from '@/router';

const loginFormRef = ref();
const rules = reactive({
  username: {
    required: true,
    message: '用户名为必填',
  },
  password: {
    required: true,
    message: '密码为必填',
  },
});
const formModel = reactive({
  username: 'admin',
  password: '123456',
});
const onReset = () => {
  loginFormRef.value.resetFields();
};
const onLogin = () => {
  console.log(formModel);
  loginFormRef.value.validate((valid, fields) => {
    if (valid) {
      login().then((res) => {
        console.log(res);
        const {
          data: { token },
        } = res;
        setToken(token);
        router.push('/');
      });
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<template>
  <div class="login-container">
    <div class="login-bg"></div>
    <div class="login-content">
      <el-form
        :rules="rules"
        :model="formModel"
        label-width="80px"
        ref="loginFormRef"
      >
        <el-form-item prop="username" label="用户名">
          <el-input v-model="formModel.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="formModel.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="onReset">重置</el-button>
          <el-button size="small" type="primary" @click="onLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less">
.login-container {
  overflow: hidden;
  height: 100vh;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSI3MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBjeD0iMzIuMjg0JSIgY3k9IjQyLjEzNSUiIGZ4PSIzMi4yODQlIiBmeT0iNDIuMTM1JSIgcj0iNDYuNTEzJSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDEgLS43Mzg5MyAwIC42MzQgLjA5OSkiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjMkU5NEZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzM5NTlFRiIgb2Zmc2V0PSIxMDAlIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBkPSJNMCAwaDIwMDB2NTE3LjM5Yy01Mi4wMjUgNy41NzYtMTA2Ljk2NiA3LjU3Ni0xNjQuODI0IDAtMTExLjczLTE0LjYyNy0yMTMuMzQ1LTcwLjk4NC0zNDAuMTc2LTcwLjk4NC0yMzcuODI0IDAtMzUyLjE5MyAxNjMuODI4LTUyNS4yMjMgMTk4LjA4MkM2ODkuMzY3IDcwMCA2MTcuMTg0IDU4Mi43MjkgNDA1IDU4Mi43MjljLTEyMC41MzcgMC0yNTUuNTM3IDM5LjA5LTQwNSAxMTcuMjcxVjB6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJjIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0idXJsKCNiKSIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik01IDcwNi45NjZjMTU1LjU4Mi0xMjAuODMyIDM1NC40MjMtMTgxLjI0OCA1OTYuNTI0LTE4MS4yNDggMjg2Ljc3OCAwIDM0NC4wMDUgMTM1LjQ2MyA3MDUuNDggMTIzLjE0MSAxNDAuNzI4LTQuNzk3IDM2Ny44OC0xMjMuMTQgNTM0LjYxMy0xMjMuMTQgNzMuNDcxIDAgMTI3LjkzMiAxMC40MjMgMTYzLjM4MyAzMS4yN1Y3NzJINXYtNjUuMDM0eiIgZmlsbD0iIzMwNThFNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIuODAzIiBtYXNrPSJ1cmwoI2MpIi8+PC9nPjwvc3ZnPg==)
    no-repeat top;
}
.login-bg {
  width: 100%;
  height: 100vh;
  background: url('./../../assets/imgs/basic/login.svg') no-repeat center;
}
.login-content {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 420px;
  height: 220px;
  max-width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 30px 20px;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
