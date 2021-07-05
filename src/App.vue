<template>
    <div id="app">
        <main-layout>
            <template v-slot:sider>
                <menu-sider />
            </template>
            <template v-slot:header>
                <main-navbar />
            </template>
            <template>
                <main-breadcrum />
                <router-view />
            </template>
        </main-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Axios from 'axios';

import MainBreadcrum from '@/components/common/MainBreadcrum.vue';
import MainLayout from '@/components/layout/MainLayout.vue';
import MainNavbar from '@/components/header/MainNavbar.vue';
import MenuSider from '@/components/sider/MenuSider.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'App',
    components: {
        MainBreadcrum,
        MainLayout,
        MainNavbar,
        MenuSider,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    public created(): void {
        this.$i18n.locale = this.currentLanguage;
        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;
    }

    @Watch('currentLanguage')
    private onChangeLanguage() {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="less" scoped></style>
