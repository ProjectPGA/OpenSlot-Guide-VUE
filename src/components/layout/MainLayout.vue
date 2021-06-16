<template>
    <Layout class="main-layout">
        <Sider class="main-layout__sider">
            <slot name="sider" />
        </Sider>
        <Layout>
            <Header class="main-layout__header" data-cy="top-navbar">
                <slot name="header" />
            </Header>
            <Content class="main-layout__content">
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

<style lang="less" scoped>
.main-layout {
    min-height: 100vh;

    &__sider {
        min-height: 100vh;
        position: fixed;
        z-index: 2000;
    }

    &__header {
        width: calc(100vw - 200px);
        border-bottom: solid 1px #dcdee2;
        position: fixed;
        z-index: 2000;
        left: 200px;
    }

    &__content {
        padding: 65px 16px 16px 216px;
    }
}
</style>
