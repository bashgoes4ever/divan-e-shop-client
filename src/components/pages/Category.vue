<template>
    <div class="category-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper" v-for="(path, index) in breadcrumbs" :key="index">
                <RouterLink v-if="path.is_link" :to="path.path">{{path.name}} / </RouterLink>
                <span v-if="!path.is_link">{{path.name}}</span>
            </span>
        </div>
        <div class="container category__flex flex-between">

            <div class="category__filters">
                <div class="categories">
                    <div class="category" v-for="(category, index) in categories" :key="index">
                        <span @click="category.is_open = !category.is_open"
                              class="category__name">{{category.name}}</span>
                        <div class="category__menu" v-if="category.is_open">
                            <RouterLink :key="i" :to="subcat.slug" v-for="(subcat, i) in category.children">
                                {{subcat.name}}
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="filter-sliders">
                    <div class="filter-slider" v-for="(slider, index) in sliders" :key="index">
                        <div class="title">{{slider.name}}</div>
                        <div class="slider-values flex-between">
                            <div class="slider-value">
                                {{new Intl.NumberFormat('ru-RU').format(slider.value[0])}} {{slider.unit}}
                            </div>
                            <div class="slider-value">
                                {{new Intl.NumberFormat('ru-RU').format(slider.value[1])}} {{slider.unit}}
                            </div>
                        </div>
                        <vue-slider
                                :tooltip="'none'"
                                :min="slider.min"
                                :max="slider.max"
                                v-model="slider.value"
                        >
                        </vue-slider>
                    </div>
                </div>
                <div class="filter-checkboxes" v-if="checkboxes.length > 0">
                    <div class="title">Механизм трансформации</div>
                    <div class="filter-checkbox" v-for="(checkbox, index) in checkboxes" :key="index">
                        <input v-model="checkbox.is_checked" type="checkbox" name="checkbox" :id="`check${index}`">
                        <label :for="`check${index}`">{{checkbox.name}}</label>
                    </div>
                </div>

                <button class="button" @click="applyFilters()">Применить фильтры</button>
            </div>

            <div class="category-items-wrapper">
                <div class="category-items-top flex-between middle">
                    <div class="category-sort flex-start middle">
                        <div class="title">Сортировать по:</div>
                        <div class="select" @click="select.is_open = !select.is_open" ref="select">
                            <span class="current">{{select.current.name}}</span>
                            <div v-click-outside="{
                              exclude: ['select'],
                              handler: 'onClose'
                            }" class="dropdown" v-if="select.is_open">
                                <div
                                        :class="[
                                        'option',
                                        {'selected': option.is_active}
                                    ]"
                                        @click="selectOption(index)"
                                        :key="index"
                                        v-for="(option, index) in select.options"
                                >{{option.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category-quantity flex-start middle">
                        <div class="title">Показывать по:</div>
                        <div class="quantities flex-start middle">
                            <div :class="[
                                'quantity',
                                {'active': item == quantity}
                            ]"
                                 v-for="(item, index) in quantities"
                                 @click="quantityChangeHandler(index)"
                                 :key="index"
                            >{{item}}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="category-items flex-start">
                    <Card v-for="(product, index) in products.data" :key="index" :product="product"></Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../elements/Card'
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
        name: "Category",
        components: {Card, VueSlider},
        data: () => ({
            select: {
                is_open: false,
                current: {
                    name: 'Популярности'
                },
                options: [
                    {
                        name: 'Популярности',
                        sort: false,
                        is_active: true
                    },
                    {
                        name: 'Возрастанию цены',
                        sort: 'prices_up',
                        is_active: false
                    },
                    {
                        name: 'Убыванию цены',
                        sort: 'prices_down',
                        is_active: false
                    }
                ]
            },
            quantity: 10,
            quantities: [10, 16, 20],
            breadcrumbs: [],
            categories: [],
            products: [],
            sliders: [
                {
                    name: 'Цена',
                    unit: 'р.',
                    min: 0,
                    max: 0,
                    value: [0, 0]
                },
                {
                    name: 'Ширина',
                    unit: 'см.',
                    min: 0,
                    max: 0,
                    value: [0, 0]
                },
                {
                    name: 'Высота',
                    unit: 'см.',
                    min: 0,
                    max: 0,
                    value: [0, 0]
                }
            ],
            checkboxes: [],
        }),
        methods: {
            async getProducts(page, sort = false, items = false, filters = false) {
                let url = `${process.env.VUE_APP_SERVER_URL}api/v1/catalog/products/?category=${this.$route.params.slug}&page=${page}`
                if (sort) url = url + '&order=' + sort
                if (items) url = url + '&items=' + items
                if (filters) url = url + filters
                const res = await this.axios({url, method: 'GET'})
                this.products = res.data
            },
            getFilters() {
                let filters = `&min_price=${this.sliders[0].value[0]}&max_price=${this.sliders[0].value[1]}&min_width=${this.sliders[1].value[0]}&max_width=${this.sliders[1].value[1]}&min_height=${this.sliders[2].value[0]}&max_height=${this.sliders[2].value[1]}`
                if (this.checkboxes.length > 0) {
                    this.checkboxes.forEach(item => {
                        if (item.is_checked) {
                            filters = `${filters}&mechanisms=${item.id}`
                        }
                    })
                }
                return filters
            },
            applyFilters() {
                const filters = this.getFilters()
                this.getProducts(1, this.select.current.sort, this.quantity, filters)
            },
            onClose() {
                this.select.is_open = false
            },
            selectOption(index) {
                this.select.current = this.select.options[index]
                const filters = this.getFilters()
                this.getProducts(1, this.select.current.sort, this.quantity, filters)
                this.select.options.map((item, idx) => {
                    idx == index ? item.is_active = true : item.is_active = false
                })
            },
            quantityChangeHandler(index) {
                this.quantity = this.quantities[index]
                const filters = this.getFilters()
                this.getProducts(1, this.sort, this.quantity, filters)
            },
            async getBreadcrumbs() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/breadcrumbs/?slug=${this.$route.params.slug}`,
                    method: 'GET'
                })
                this.breadcrumbs = []
                this.createBreadcrumbs(res.data)
                this.breadcrumbs.unshift({
                    name: 'Главная',
                    is_link: true,
                    path: '/'
                })
            },
            createBreadcrumbs(category) {
                this.breadcrumbs.unshift({
                    name: category.name,
                    path: `/catalog/${category.slug}`,
                    is_link: category.slug == this.$route.params.slug ? false : true
                })
                if (category.parent_category) {
                    this.createBreadcrumbs(category.parent_category)
                }
            },
            async getCategories() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/categories/?slug=${this.$route.params.slug}`,
                    method: 'GET'
                })
                this.categories = res.data.children.map(item => ({
                    name: item.name,
                    children: item.children.map(child => ({
                        name: child.name,
                        slug: `/catalog/${child.slug}`
                    })),
                    is_open: false
                }))
            },
            async getMenu() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/catalog/menu/?category=${this.$route.params.slug}`,
                    method: 'GET'
                })
                this.sliders[0].min = res.data.min_price
                this.sliders[0].max = res.data.max_price
                this.sliders[0].value = [res.data.min_price, res.data.max_price]
                this.sliders[1].min = res.data.min_width
                this.sliders[1].max = res.data.max_width
                this.sliders[1].value = [res.data.min_width, res.data.max_width]
                this.sliders[2].min = res.data.min_height
                this.sliders[2].max = res.data.max_height
                this.sliders[2].value = [res.data.min_height, res.data.max_height]
                this.checkboxes = res.data.mechanisms.map(item => ({
                    name: item.mechanism.name,
                    id: item.mechanism.id,
                    is_checked: this.$route.query.mechanism == item.mechanism.id ? true : false
                }))
            },
        },
        mounted() {
            const filter = this.$route.query.mechanism ? `&mechanisms=${this.$route.query.mechanism}` : false
            this.getProducts(1, false, this.quantity, filter)
            this.getBreadcrumbs()
            this.getCategories()
            this.getMenu()
        },
        watch: {
            $route() {
                const filter = this.$route.query.mechanism ? `&mechanisms=${this.$route.query.mechanism}` : false
                this.getProducts(1, this.sort, this.quantity, filter)
                this.getBreadcrumbs()
                this.getCategories()
                this.getMenu()
            }
        }
    }
</script>

<style scoped>

</style>