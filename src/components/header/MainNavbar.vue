<template>
    <div class="main-navbar">
        <div class="main-navbar_left">
            <img
                src="../../assets/img/OpenSlot_VUE_Logo.svg"
                alt="Logo"
                width="500"
                height="600"
                class="main-navbar_left_logo"
            />
        </div>
        <div class="main-navbar_right">
            <Button @click="changeLanguage()" type="primary">
                {{ $t('common.buttonTranslations') }}
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'MainNavbar',
})
export default class MainNavbar extends Vue {
    private mainStore = mainStore.context(this.$store);

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

<style lang="less" scoped>
.main-navbar {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_left {
        display: flex;
        &_logo {
            width: 150px;
            height: 50px;
        }
    }
}
</style>
