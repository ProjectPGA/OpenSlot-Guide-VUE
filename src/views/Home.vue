<template>
    <div class="layout">
        <Layout :style="{ minHeight: '100vh' }">
            <Sider>
                <Menu active-name="1-2" theme="dark" width="auto">
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
            </Sider>
            <Layout>
                <Header
                    :style="{
                        background: '#fff',
                        boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
                    }"
                    data-cy="top-navbar"
                >
                    <Button @click="changeLanguage()" type="primary">
                        {{ $t('common.bottonTranslations') }}
                    </Button>
                </Header>
                <Content :style="{ padding: '0 16px 16px' }">
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
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Home',
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private isCollapsed: boolean = false;

    private get menuitemClasses(): any[] {
        return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguage(): void {
        this.currentLanguage === 'es'
            ? this.changeLanguageToEnglish()
            : this.changeLanguageToSpanish();
    }

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }

    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }
}
</script>

<style lang="scss" scoped></style>
