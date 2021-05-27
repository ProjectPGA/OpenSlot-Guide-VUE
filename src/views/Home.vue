<template>
    <div class="layout">
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
        <Card>
            <div style="height: 600px">
                {{ $t('views.home.content') }}
            </div>
        </Card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Home',
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped></style>
