<template>
    <div class="product-page" v-if="!loading">
        <div class="container breadcrumbs">
            <span class="path-wrapper" v-for="(path, index) in breadcrumbs" :key="index">
                <RouterLink v-if="path.is_link" :to="path.path">{{path.name}} / </RouterLink>
                <span v-if="!path.is_link">{{path.name}}</span>
            </span>
        </div>

        <div class="product-page__top container flex-between">
            <div class="product-page__left">
                <carousel
                        ref="main"
                        class="product-main-slider"
                        @translate="(e) => mainTranslateHandler(e)"
                        :items="mainSliderOptions.items"
                        :nav="mainSliderOptions.nav"
                        :navText="mainSliderOptions.navText"
                >
                    <div :key="index" v-for="(img, index) in product.images" class="product-main-slider__img">
                        <img :src="img.src" alt="">
                    </div>
                </carousel>
                <carousel
                        class="product-thumbs"
                        ref="thumbs"
                        :items="thumbsOptions.items"
                        :nav="thumbsOptions.nav"
                        :margin="thumbsOptions.margin"
                >
                    <div
                            :key="index"
                            @click="thumbClickHandler(index)"
                            v-for="(img, index) in product.images"
                            :class="[
                                'product-thumbs__img',
                                {'product-thumbs__img-active': index == sliderCurrentIndex}
                            ]"
                    >
                        <img :src="img.src" alt="">
                    </div>
                </carousel>
                <h2>Описание и характеристики</h2>
                <p>{{product.description}}</p>
            </div>
            <div class="product-page__right">
                <div :class="[
                    'stock',
                    {'red-text': !product.in_stock}
                ]">
                    {{product.in_stock ? 'В наличии' : 'Нет в наличии'}}
                </div>
                <h1>{{product.name}}</h1>
                <div class="price-wrap1 price-wrap flex-start">
                    <span class="price">{{new Intl.NumberFormat('ru-RU').format(product.price)}} р.</span>
                    <span v-if="product.old_price" class="old-price">{{new Intl.NumberFormat('ru-RU').format(product.old_price)}} р.</span>
                    <span class="sale" v-if="product.old_price">-{{calcSale()}}%</span>
                </div>
                <button class="button to-basket"
                        v-if="!isInBasket()"
                        @click="addToBasket({quantity: 1, product: product.id, casing: current_casing.id, color: current_color.id})">Добавить в
                    корзину
                </button>
                <RouterLink tag="button" to="/basket" class="button to-basket"
                        v-if="isInBasket()">Перейти к оформлению
                </RouterLink>
                <form class="fast-buy">
                    <input type="text" v-model="phone" placeholder="Укажите телефон">
                    <button class="button">Купить в 1 клик</button>
                </form>
                <div class="product-colors-wrapper">
                    <div class="title">Выберите обивку дивана</div>
                    <div class="flex-start product-casings-flex">
                        <div @click="current_casing = color" :key="index" v-for="(color, index) in product.casings"
                             :class="[
                                'product-color',
                                {'product-color-active': current_casing == color}
                             ]">
                            <div class="name">{{index > 8 ? index+1 : `0${index+1}`}}</div>
                            <div class="product-color-img">
                                <img :src="color.img" alt="">
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/casing">Перейти в каталог обивок</RouterLink>
                </div>
                <div class="product-colors-wrapper">
                    <div class="title">Выберите цвет ножек</div>
                    <div class="flex-start product-legs-flex">
                        <div @click="current_color = color" :key="index" v-for="(color, index) in product.legs"
                             :class="[
                                'product-color',
                                {'product-color-active': current_color == color}
                             ]">
                            <div class="name">{{color.name}}</div>
                            <div class="product-color-img">
                                <img :src="color.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-page__middle container flex-center">
            <div class="product-options">
                <div class="title">Размеры</div>
                <div class="product-option flex-start" v-if="product.width">
                    <div class="key">Ширина</div>
                    <div class="value">{{product.width}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.depth">
                    <div class="key">Глубина</div>
                    <div class="value">{{product.depth}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.height">
                    <div class="key">Высота</div>
                    <div class="value">{{product.height}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.bed_width">
                    <div class="key">Ширина спального места</div>
                    <div class="value">{{product.bed_width}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.bed_length">
                    <div class="key">Длина спального места</div>
                    <div class="value">{{product.bed_length}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.weight">
                    <div class="key">Вес</div>
                    <div class="value">{{product.weight}} кг.</div>
                </div>
                <div class="product-option flex-start" v-if="product.volume">
                    <div class="key">Объем</div>
                    <div class="value">{{product.volume}} куб. м.</div>
                </div>
            </div>
            <div class="product-options">
                <div class="title">Комплектация</div>
                <div class="product-option flex-start" v-if="product.size">
                    <div class="key">Размер в разложенном виде</div>
                    <div class="value">{{product.size}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.box">
                    <div class="key">Бельевой ящик</div>
                    <div class="value">{{product.box}} см.</div>
                </div>
                <div class="product-option flex-start" v-if="product.has_pillows">
                    <div class="key">Наличие декоративных подушек</div>
                    <div class="value">{{product.has_pillows ? 'Да' : 'Нет'}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.has_armrests">
                    <div class="key">Наличие подлокотников</div>
                    <div class="value">{{product.has_armrests ? 'Да' : 'Нет'}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.mechanism">
                    <div class="key">Механизм трансформации</div>
                    <div class="value">{{product.mechanism}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.linings">
                    <div class="key">Деревяные накладки <br>(на подклокотники)</div>
                    <div class="value">{{product.linings}}</div>
                </div>
            </div>
            <div class="product-options">
                <div class="title">Внешний вид</div>
                <div class="product-option flex-start" v-if="product.frame_material">
                    <div class="key">Материал каркаса</div>
                    <div class="value">{{product.frame_material.join(', ')}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.upholstery_material">
                    <div class="key">Материал обивки</div>
                    <div class="value">{{product.upholstery_material.join(', ')}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.filler_material">
                    <div class="key">Материал наполнителя</div>
                    <div class="value">{{product.filler_material.join(', ')}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.support_material">
                    <div class="key">Материал опор</div>
                    <div class="value">{{product.support_material.join(', ')}}</div>
                </div>
            </div>
            <div class="product-options">
                <div class="title">Особенности</div>
                <div class="product-option flex-start" v-if="product.has_guaranty">
                    <div class="key">Гарантия</div>
                    <div class="value">{{product.has_guaranty ? 'Да' : 'Нет'}}</div>
                </div>
                <div class="product-option flex-start" v-if="product.country">
                    <div class="key">Страна производителя</div>
                    <div class="value">{{product.country}}</div>
                </div>
                <p>{{product.features_description}}</p>
            </div>
        </div>

        <section class="product-page__bottom main-products">
            <div class="container">
                <h2>Возможно вам понравятся</h2>
                <div class="main-products__flex flex-start">
                    <RouterLink :to="'/products/' + product.slug" class="main-product"
                                v-for="(product, index) in new_products"
                                :key="index">
                        <img :src="generateImgUrl(product.product_img)" alt="" class="main-product__bg">
                        <div class="title">{{product.catalog_name}}</div>
                        <div class="price">{{new Intl.NumberFormat('ru-RU').format(product.price)}} P.</div>
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel2'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Product",
        components: {carousel},
        computed: mapGetters(['products']),
        data: () => ({
            loading: true,
            phone: null,
            sliderCurrentIndex: 0,
            breadcrumbs: [],
            mainSliderOptions: {
                items: 1,
                nav: true,
                navText: ['<span></span>',
                    '<span></span>']
            },
            thumbsOptions: {
                items: 4,
                nav: false,
                margin: 11
            },
            product: {},
            new_products: [],
            current_casing: null,
            current_color: null
        }),
        methods: {
            ...mapActions(['addToBasket']),
            isInBasket() {
                return this.products.some(item => item.product_id == this.product.id)
            },
            calcSale() {
                return Math.ceil((this.product.old_price - this.product.price) / (this.product.old_price / 100))
            },
            mainTranslateHandler(e) {
                this.sliderCurrentIndex = e.item.index
                const to = Math.floor(e.item.index / this.thumbsOptions.items)
                this.$refs.thumbs.owl.trigger('to.owl.carousel', to)
            },
            thumbClickHandler(index) {
                this.sliderCurrentIndex = index
                this.$refs.main.owl.trigger('to.owl.carousel', index)
            },
            async getProduct() {
                this.loading = true
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/products/${this.$route.params.slug}`,
                    method: 'GET'
                })
                this.product = {
                    id: res.data.id,
                    images: res.data.images_set ? res.data.images_set.map(i => ({
                        src: `${process.env.VUE_APP_SERVER_URL}${i.img_thumb}`
                    })) : false,
                    name: res.data.name,
                    in_stock: res.data.in_stock,
                    price: res.data.price,
                    old_price: res.data.old_price,
                    casings: res.data.casings ? res.data.casings.map(c => ({
                        img: `${process.env.VUE_APP_SERVER_URL}${c.img_thumb}`,
                        id: c.id
                    })) : false,
                    legs: res.data.colors ? res.data.colors.map(c => ({
                        name: c.name,
                        img: `${process.env.VUE_APP_SERVER_URL}${c.img_thumb}`,
                        id: c.id
                    })) : false,
                    width: res.data.width,
                    depth: res.data.depth,
                    height: res.data.height,
                    weight: res.data.weight,
                    bed_width: res.data.bed_width,
                    bed_length: res.data.bed_length,
                    volume: res.data.volume,
                    size: res.data.size,
                    box: res.data.box,
                    has_pillows: res.data.has_pillows,
                    has_armrests: res.data.has_armrests,
                    has_guaranty: res.data.has_guaranty,
                    linings: res.data.linings,
                    features_description: res.data.features_description,
                    description: res.data.description,
                    mechanism: res.data.mechanism ? res.data.mechanism.name : false,
                    frame_material: res.data.frame_material.length ? res.data.frame_material.map(i => i.name) : false,
                    upholstery_material: res.data.upholstery_material.length ? res.data.upholstery_material.map(i => i.name) : false,
                    filler_material: res.data.filler_material.length ? res.data.filler_material.map(i => i.name) : false,
                    support_material: res.data.support_material.length ? res.data.support_material.map(i => i.name) : false,
                    country: res.data.country.name
                }
                this.current_casing = this.product.casings[0]
                this.current_color = this.product.legs[0]
                this.new_products = res.data.similar_products
                this.breadcrumbs = []
                this.breadcrumbs.unshift({
                    name: res.data.name,
                    is_link: false
                })
                this.createBreadcrumbs(res.data.category)
                this.breadcrumbs.unshift({
                    name: 'Главная',
                    is_link: true,
                    path: '/'
                })
                this.loading = false
            },
            generateImgUrl(img) {
                return `${process.env.VUE_APP_SERVER_URL}${img}`
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
        },
        mounted() {
            this.getProduct()
        },
        watch: {
            $route() {
                this.getProduct()
            }
        }
    }
</script>

<style scoped>

</style>