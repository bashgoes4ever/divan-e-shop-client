<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Наше производство</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <AboutSideMenu></AboutSideMenu>
            <div class="service__right">
                <h2>Наше производство</h2>
                <p>Мы представляем Вашему вниманию собственную коллекцию мягкой мебели. Она создавалась на протяжении
                    многих лет командой дизайнеров и конструкторов. В результате чего мы предлагаем Вам самую лучшую
                    подборку диванов и кресел.<br><br>Мы производим нашу коллекцию на собственной производственной площадке в г. Тула. Организацию
                    доставки и сборки мебели мы тоже берём на себя, так как отвечаем за нашу мебель на каждом этапе.
                    Наши специалисты гарантируют Вам высокий уровень сервиса.<br><br>Наши менеджеры и дизайнеры профессионально предоставят Вам консультацию по моделям и выбору обивки.
                    При необходимости привезут образцы обивки к вам на объект. Чтобы вы могли более точно подобрать
                    необходимый для
                    вас цвет и фактуру.</p>
                <img class="mt-30" src="/static/img/about/2.png" alt="">

            </div>
        </div>
    </div>
</template>

<script>
    import AboutSideMenu from '../../layout/AboutSideMenu'

    export default {
        name: "Manufacturing",
        components: {AboutSideMenu}
    }
</script>

<style scoped>

</style>