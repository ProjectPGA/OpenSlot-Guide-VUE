<template>
    <Layout class="main-layout">
        <Sider
            class="main-layout__sider"
            breakpoint="md"
            :collapsible="isCurrentMediaQueryTouch"
            hide-trigger
            v-model="isCollapsed"
            v-click-outside="closeSider"
        >
            <slot name="sider" />
        </Sider>
        <Layout>
            <Header class="main-layout__header" data-cy="top-navbar">
                <Icon
                    class="main-layout__header__menu-icon"
                    type="md-menu"
                    size="24"
                    @click.native="collapseSider"
                />
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
export default class MainLayout extends Vue {
    private isCollapsed: boolean = false;

    private collapseSider(): any {
        this.isCollapsed = !this.isCollapsed;
    }

    private closeSider(): any {
        this.isCollapsed = true;
    }

    public get isCurrentMediaQueryTouch(): boolean {
        // @ts-ignore
        return this.$mq === 'sm';
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/utilities.less';

.main-layout {
    min-height: 100vh;

    &__sider {
        min-height: 100vh;
        position: fixed;
        z-index: 3000;
    }

    &__header {
        width: calc(100vw - 12.5rem);
        border-bottom: solid 0.063rem @borders;
        position: fixed;
        padding: 0 2rem;
        z-index: 2000;
        left: 12.5rem;

        .responsive(@tablet-width, {
            left: 0rem;
            width: calc(100vw);
            padding: 0 1rem 0 3.125rem;
        });

        &__menu-icon {
            position: absolute;
            top: 1.125rem;
            left: 0.938rem;
            display: none;

            .responsive(@tablet-width, {
                display: unset;
            });
        }
    }

    &__content {
        padding: 4.1em 1rem 1rem 13.5rem;

        .responsive(@tablet-width, {
            padding: 4.1em 1rem 1rem 1rem ;
        });
    }
}
</style>
