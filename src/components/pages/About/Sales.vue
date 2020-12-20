<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Акции</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <AboutSideMenu></AboutSideMenu>
            <div class="category-items-wrapper">
                <!--<div class="category-items-top flex-between middle">-->
                    <!--<div class="category-sort flex-start middle">-->
                        <!--<div class="title">Сортировать по:</div>-->
                        <!--<div class="select" @click="select.is_open = !select.is_open" ref="select">-->
                            <!--<span class="current">{{select.current.name}}</span>-->
                            <!--<div v-click-outside="{-->
                              <!--exclude: ['select'],-->
                              <!--handler: 'onClose'-->
                            <!--}" class="dropdown" v-if="select.is_open">-->
                                <!--<div-->
                                        <!--:class="[-->
                                        <!--'option',-->
                                        <!--{'selected': option.is_active}-->
                                    <!--]"-->
                                        <!--@click="selectOption(index)"-->
                                        <!--:key="index"-->
                                        <!--v-for="(option, index) in select.options"-->
                                <!--&gt;{{option.name}}-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="category-quantity flex-start middle">-->
                        <!--<div class="title">Показывать по:</div>-->
                        <!--<div class="quantities flex-start middle">-->
                            <!--<div :class="[-->
                                <!--'quantity',-->
                                <!--{'active': item == quantity}-->
                            <!--]"-->
                                 <!--v-for="(item, index) in quantities"-->
                                 <!--@click="quantityChangeHandler(index)"-->
                                 <!--:key="index"-->
                            <!--&gt;{{item}}-->
                            <!--</div>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->
                <div class="category-items flex-start">
                    <Card v-for="(product, index) in products.data" :key="index" :product="product"></Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutSideMenu from '../../layout/AboutSideMenu'
    import Card from '../../elements/Card'

    export default {
        name: "Sales",
        components: {AboutSideMenu, Card},
        data: () => ({
            products: []
        }),
        methods: {
            async getProducts(page, sort = false, items = false, filters = false) {
                let url = `${process.env.VUE_APP_SERVER_URL}api/v1/catalog/products/?page=${page}`
                if (sort) url = url + '&order=' + sort
                if (items) url = url + '&items=' + items
                if (filters) url = url + filters
                const res = await this.axios({url, method: 'GET'})
                this.products = res.data
            },
        },
        mounted() {
            this.getProducts(1, false, false, false)
        }
    }
</script>

<style scoped>

</style>