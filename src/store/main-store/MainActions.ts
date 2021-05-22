import { Actions } from 'vuex-smart-module';
import MainState from './MainState';
import MainMutations from './MainMutations';
import MainGetters from './MainGetters';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    public changeLanguageToSpanish(): void {
        this.commit('changeLanguageToSpanish');
    }

    public changeLanguageToEnglish(): void {
        this.commit('changeLanguageToEnglish');
    }
}
