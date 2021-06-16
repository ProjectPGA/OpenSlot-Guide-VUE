<template>
    <Menu class="menu-sider" active-name="Home" width="auto">
        <MenuItem name="Home" :to="{ name: 'Home' }">
            {{ $t('common.titles.home') }}
        </MenuItem>
        <MenuItem name="About" :to="{ name: 'About' }">
            {{ $t('common.titles.about') }}
        </MenuItem>
    </Menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'MenuSider',
})
export default class MenuSider extends Vue {}
</script>

<style lang="less" scoped>
.menu-sider {
    height: 100vh;
}
</style>
