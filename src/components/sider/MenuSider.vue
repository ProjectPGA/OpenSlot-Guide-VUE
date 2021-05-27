<template>
    <Menu active-name="1-2" width="auto">
        <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>{{ $t('views.home.option1') }}</span>
        </MenuItem>
        <MenuItem name="1-2">
            <Icon type="search"></Icon>
            <span>{{ $t('views.home.option2') }}</span>
        </MenuItem>
        <MenuItem name="1-3">
            <Icon type="settings"></Icon>
            <span>{{ $t('views.home.option3') }}</span>
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

<style lang="less" scoped></style>
