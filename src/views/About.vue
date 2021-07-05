<template>
    <div class="about">
        <Card>
            <div style="height: 75rem">
                {{ $t('views.about.content') }}
            </div>
        </Card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'About',
})
export default class About extends Vue {}
</script>

<style lang="less" scoped></style>
