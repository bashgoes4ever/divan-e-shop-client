<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Примерка дивана</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <ServiceSideMenu></ServiceSideMenu>
            <div class="service__right">
                <div class="title"><span>Примерка дивана</span></div>
                <p>Вы можете воспользоваться услугой «Примерка дивана», если выбранная Вами модель есть в наличии на складе.
Наши специалисты организуют доставку мебели к вам на объект, сборку/ и транспортировку обратно на склад в случае, если мебель Вам не подойдёт. Услуга платная. С расценками доставки, сборки и подъёма мебели вы можете ознакомиться в разделе «Доставка и подъём» </p>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceSideMenu from '../../layout/ServiceSideMenu'

    export default {
        name: "Service",
        components: {ServiceSideMenu}
    }
</script>

<style scoped>

</style>