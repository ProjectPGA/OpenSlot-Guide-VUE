<template>
    <Breadcrumb class="main-breadcrumb">
        <BreadcrumbItem
            class="main-breadcrumb__item"
            v-for="(path, index) in $route.path.split('/')"
            :key="index"
            :to="`/${path}`"
        >
            {{ path }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'MainBreadcrum',
})
export default class MainBreadcrum extends Vue {}
</script>

<style lang="less" scoped>
.main-breadcrumb {
    margin: 1rem 0;

    &__item {
        text-transform: capitalize;
    }
}
</style>
