<template>
    <button v-if="loggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
    <div>{{ count }} 
        <button @click="increment">Increment</button>
    </div>
</template>
<script setup lang="ts">
const loggedIn: Ref<boolean | undefined> = ref(false);
const count: Ref<number | undefined> = ref(0);
const { data: _auth } = await useFetch('/api/auth');
const { data: _count } = await useFetch<{count: number}>('/api/count');
loggedIn.value = _auth?.value?.loggedIn;
count.value = _count?.value?.count;
console.log("COMPONENT", _auth.value, loggedIn.value);

const login = async () => {
    const response = await useFetch(
        "/api/login",
        {
            method: "PUT",
        }
    );
    loggedIn.value = response.data?.value?.loggedIn;
}
const logout = async () => {
    const response = await useFetch(
        "/api/logout",
        {
            method: "PUT",
        }
    );
    loggedIn.value = response.data?.value?.loggedIn;
}
const increment = async () => {
    const response = await useFetch(
        "/api/increment",
        {
            method: "PUT",
        }
    );
    count.value = response.data?.value?.count;
}
</script>