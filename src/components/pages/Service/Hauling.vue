<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Перетяжка мебели</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <ServiceSideMenu></ServiceSideMenu>
            <div class="service__right">
                <div class="title"><span>Перетяжка мебели</span></div>
                <p class="mb-40">Перетяжка мебели решит вашу задачу если: пришла в негодность старая обивка или механизмы, или наполнитель. Вы удивитесь, насколько привлекательной может быть ваша устаревшая мебель после перетяжки, а ремонт внесет свежие нотки в интерьер.<br><br>Правильная перетяжка мягкой мебели позволят не только привести ее в отличное состояние, но и создать один комплект мебели из разных гарнитуров. Это лучше и дешевле похода в магазин. Вы сами выбираете материал для перетяжки мебели, который полностью вас устроит</p>
                <div class="hauling-flex flex-start">
                    <div class="hauling-item">
                        <span>До</span>
                        <img src="/static/img/hauling/1.png" alt="">
                    </div>
                    <div class="hauling-item">
                        <span>После</span>
                        <img src="/static/img/hauling/1.png" alt="">
                    </div>
                </div>
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