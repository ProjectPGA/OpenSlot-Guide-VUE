<template>
    <div class="home">
        <Card>
            <div style="height: 75rem">
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
