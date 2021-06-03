<template>
    <Breadcrumb :style="{ margin: '16px 0' }">
        <BreadcrumbItem>
            {{ $t('views.home.home') }}
        </BreadcrumbItem>
        <BreadcrumbItem>
            {{ $t('views.home.components') }}
        </BreadcrumbItem>
        <BreadcrumbItem>
            {{ $t('views.home.layout') }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'MainBreadcrum',
})
export default class MainBreadcrum extends Vue {}
</script>

<style lang="less" scoped></style>
