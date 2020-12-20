<template>
    <div class="casing-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper" v-for="(path, index) in breadcrumbs" :key="index">
                <RouterLink v-if="path.is_link" :to="path.path">{{path.name}} / </RouterLink>
                <span v-if="!path.is_link">{{path.name}}</span>
            </span>
        </div>
        <div class="container casing-flex flex-between">
            <div class="category__filters">
                <div class="categories" v-if="categories.length > 0">
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
            </div>

            <div class="casing-right">
                <div class="casing-top">
                    <p>Вы можете выбрать любую позицию мягкой мебели, в любой обивке из представленной в каталоге</p>
                    <button class="button">Запросить расчет в выбранной ткани</button>
                </div>
                <div class="casing-items flex-start" v-if="items.length > 0">
                    <div class="casing-item" v-for="(item, index) in items" :key="index">
                        <div class="title">{{item.name}}</div>
                        <div class="img"><img :src="generateImgUrl(item.img_thumb)" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Casing",
        data: () => ({
            categories: [],
            breadcrumbs: [],
            items: []
        }),
        methods: {
            generateImgUrl(img) {
                return `${process.env.VUE_APP_SERVER_URL}${img}`
            },
            async getProducts() {
                let url = `${process.env.VUE_APP_SERVER_URL}api/v1/casings/`
                if (this.$route.query.category) url = `${url}?category=${this.$route.query.category}`
                const res = await this.axios({
                    url,
                    method: 'GET'
                })
                this.items = res.data
            },
            async getCategories() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/casing-categories/`,
                    method: 'GET'
                })
                this.categories = res.data.map(item => ({
                    name: item.name,
                    children: item.children.map(child => ({
                        name: child.name,
                        slug: `/casing/?category=${child.slug}`
                    })),
                    is_open: false
                }))
            },
            async getBreadcrumbs() {
                let url = `${process.env.VUE_APP_SERVER_URL}api/v1/casing-breadcrumbs/`
                if (this.$route.query.category) url = `${url}?category=${this.$route.query.category}`
                const res = await this.axios({
                    url,
                    method: 'GET'
                })
                this.breadcrumbs = []
                this.createBreadcrumbs(res.data)
                if (res.data.name) {
                    this.breadcrumbs.unshift({
                        name: 'Каталог обивок',
                        is_link: true,
                        path: '/casing'
                    })
                } else {
                    this.breadcrumbs.unshift({
                        name: 'Каталог обивок',
                        is_link: false,
                    })
                }
                this.breadcrumbs.unshift({
                    name: 'Главная',
                    is_link: true,
                    path: '/'
                })
            },
            createBreadcrumbs(category) {
                if (category.name) {
                    this.breadcrumbs.unshift({
                        name: category.name,
                        path: `/casing/?category=${category.slug}`,
                        is_link: category.slug == this.$route.query.category ? false : true
                    })
                    if (category.parent_category) {
                        this.createBreadcrumbs(category.parent_category)
                    }
                }
            },

        },
        mounted() {
            this.getBreadcrumbs()
            this.getCategories()
            this.getProducts()
        },
        watch: {
            $route() {
                this.getBreadcrumbs()
                this.getCategories()
                this.getProducts()
            }
        }
    }
</script>

<style scoped>

</style>