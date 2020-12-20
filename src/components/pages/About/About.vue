<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>О нас</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <AboutSideMenu></AboutSideMenu>
            <div class="service__right">
                <h2>О нас</h2>
                <p>На протяжении 10 лет мы производим современную мебель для Вашего дома. Мы делаем акцент на отличном
                    качестве, функциональности и эргономике. Так как мы считаем, что каждый из нас заслуживает лучшего –
                    мебели, которая сделает ваш отдых полноценным и комфортным.<br><br>Мы создаём уют и комфорт для Вас – это наша работа. Уют для человека важен на протяжении всего дня.
                    Будь то любимая квартира, загородный дом или офис. Расскажите нам, как вы хотите преобразить
                    Ваш дом, и мы подскажем как это сделать максимально эффективно и интересно!</p>
                <img class="mt-30" src="/static/img/about/1.png" alt="">

            </div>
        </div>
    </div>
</template>

<script>
    import AboutSideMenu from '../../layout/AboutSideMenu'

    export default {
        name: "About",
        components: {AboutSideMenu}
    }
</script>

<style scoped>

</style>