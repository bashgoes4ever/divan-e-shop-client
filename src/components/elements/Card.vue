<template>
    <div class="product-card">
        <div class="product-card-top">
            <div class="sale" v-if="product.old_price">- {{calcSale()}}%</div>
            <RouterLink :to="`/products/${product.slug}`" class="image">
                <img :src="generateImgUrl(product.product_img)" alt="">
            </RouterLink>
            <div class="product-card-middle flex-center">
                <div class="product-card-middle-item">
                    <div class="title">{{product.category.name}}</div>
                    <div class="text">{{product.catalog_name}}</div>
                </div>
                <div class="product-card-middle-item">
                    <div class="title">Стоимость</div>
                    <div class="text">{{new Intl.NumberFormat('ru-RU').format(product.price)}} руб.
                        <div v-if="product.old_price" class="old-price">{{new
                            Intl.NumberFormat('ru-RU').format(product.old_price)}} руб.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-card-bottom">
            <div class="product-card-options flex-between">
                <div class="product-card-option" v-if="product.width">
                    <div class="title">Ширина</div>
                    <div class="product-card-option-value">{{product.width}} см.</div>
                </div>
                <div class="product-card-option" v-if="product.height">
                    <div class="title">Высота</div>
                    <div class="product-card-option-value">{{product.height}} см.</div>
                </div>
                <div class="product-card-option" v-if="product.depth">
                    <div class="title">Глубина</div>
                    <div class="product-card-option-value">{{product.depth}} см.</div>
                </div>
            </div>
            <RouterLink :to="`/products/${product.slug}`" tag="button" class="button">Подробнее</RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['product'],
        methods: {
            calcSale() {
                return Math.ceil((this.product.old_price - this.product.price) / (this.product.old_price / 100))
            },
            generateImgUrl(img) {
                return `${process.env.VUE_APP_SERVER_URL}${img}`
            }
        }
    }
</script>

<style scoped>

</style>