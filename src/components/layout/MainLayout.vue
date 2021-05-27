<template>
    <Layout :style="{ minHeight: '100vh' }">
        <Sider>
            <slot name="sider" />
        </Sider>
        <Layout>
            <Header data-cy="top-navbar">
                <slot name="header" />
            </Header>
            <Content :style="{ padding: '0 16px 16px' }">
                <slot />
            </Content>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'MainLayout',
})
export default class MainLayout extends Vue {}
</script>

<style lang="less" scoped></style>
