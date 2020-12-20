<template>
    <aside class="service-side-menu">
        <div class="title">О компании</div>
        <ul>
            <li>
                <RouterLink active-class="active" to="/about" exact>О нас</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/about/manufacturing" exact>Производство</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/about/sales" exact>Акции</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/about/addresses" exact>Адреса магазинов</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/about/contacts" exact>Контакты</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/about/designers" exact>Дизайнерам и архитекторам</RouterLink>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "AboutSideMenu"
    }
</script>

<style scoped>

</style>