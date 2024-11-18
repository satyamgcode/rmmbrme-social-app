<script setup>
import tree from '~/assets/images/tree.png'
</script>

<template>
<div class="bg-black h-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-4">
<div class="flex flex-col text-white justify-center items-center gap-3 max-w-[434px]">
    <img :src="tree" alt="" class="h-[184px] w-[434px]">
    <p class="text-[32px] text-center"> Grow your family tree, write your life story, share for generations</p>
</div>
<div>
    <slot></slot>
</div>
</div>
</template>