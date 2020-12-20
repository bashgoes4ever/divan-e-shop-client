<template>
    <aside class="service-side-menu">
        <ul>
            <li>
                <RouterLink active-class="active" to="/service" exact>Условия оплаты</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/service/delivery" exact>Доставка и подъем</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/service/guaranties" exact>Гарантия и возврат</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/service/fitting" exact>Примерка дивана</RouterLink>
            </li>
            <li>
                <RouterLink active-class="active" to="/service/hauling" exact>Перетяжка мебели</RouterLink>
            </li>
        </ul>
        <ul>
            <li>Получить консультацию</li>
            <li>
                <RouterLink active-class="active" to="/service/assemble" exact>Правила доставки <br>и сборки мебели

</RouterLink>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "ServiceSideMenu"
    }
</script>

<style scoped>

</style>