<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Адреса магазинов</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <AboutSideMenu></AboutSideMenu>
            <div class="service__right">
                <h2>Адреса магазинов</h2>
                <p v-html="contacts.shop_address"></p>
                <div v-html="contacts.shop_map" class="map-wrapper mt-30"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutSideMenu from '../../layout/AboutSideMenu'
    import {mapGetters} from 'vuex'

    export default {
        name: "Addresses",
        components: {AboutSideMenu},
        computed: mapGetters(['contacts']),
    }
</script>

<style scoped>

</style>