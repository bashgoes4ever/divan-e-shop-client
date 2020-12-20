<template>
    <div>
        <section class="block1">
            <carousel
                    class="block1__slider"
                    :items="carouselOptions.items"
                    :nav="carouselOptions.nav"
                    :navText="carouselOptions.navText"
                    :autoplay="carouselOptions.autoplay"
                    :loop="carouselOptions.loop"
                    v-if="slider.length > 0"
            >
                <div class="block1__slide flex-start middle" v-for="(slide, index) in slider" :key="index">
                    <img :src="generateImgUrl(slide.img)" alt="" class="block1__slide__bg">
                    <div class="container">
                        <div class="sale" v-if="slide.title_second">{{slide.title_second}}</div>
                        <h3 v-if="slide.title_main" v-html="slide.title_main"></h3>
                        <div v-if="slide.text" class="text" v-html="slide.text"></div>
                        <a v-if="slide.link" :href="slide.link" class="button">{{slide.link_text}}</a>
                    </div>
                </div>
            </carousel>
        </section>

        <section class="block2">
            <div class="container">
                <h2 class="section__title"><span>Подберите мебель для своего интерьера</span></h2>
                <div class="block2__flex flex-between" v-if="categories">
                    <RouterLink v-for="(category, index) in categories" :to="'/catalog/'+category.slug" :key="index"
                                class="block2__item">
                        <img :src="generateImgUrl(category.img_thumb)" alt="" class="block2__item__bg">
                        <div class="title">{{category.name}}</div>
                        <div class="text">Более {{category.products_count}} моделей</div>
                    </RouterLink>
                </div>
            </div>
        </section>

        <section class="block3">
            <div class="container">
                <h2 class="section__title"><span>Мебель в интернет-магазине</span><br><span>Беру Диван.рф</span></h2>

                <div class="block3__flex flex-between middle">
                    <div class="block3__item">
                        <div class="block3__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                 fill="none">
                                <path d="M36.9528 11.1999C36.5276 8.259 35.115 5.55459 32.9181 3.5085C30.4887 1.24603 27.3217 0 24.0002 0C20.6787 0 17.5117 1.24603 15.0822 3.5085C12.8853 5.55459 11.4728 8.259 11.0475 11.1999C6.31548 13.2662 3.19473 17.9798 3.19473 23.1978C3.19473 30.4146 9.06601 36.2858 16.2827 36.2858C18.5069 36.2858 20.6745 35.7202 22.5938 34.6632V48H25.4063V34.6632C27.3255 35.7202 29.4931 36.2858 31.7173 36.2858C38.9341 36.2858 44.8053 30.4145 44.8053 23.1978C44.8056 17.9798 41.6848 13.2661 36.9528 11.1999ZM31.7175 33.4733C29.4231 33.4733 27.2053 32.7072 25.4065 31.3056V22.704L31.7139 19.3876L30.4049 16.8983L25.4065 19.5264V13.9903H22.594V25.7602L17.5955 23.132L16.2865 25.6213L22.594 28.9377V31.3056C20.7951 32.7072 18.5773 33.4733 16.2829 33.4733C10.6169 33.4733 6.00742 28.8637 6.00742 23.1978C6.00742 18.8655 8.74736 14.9759 12.8254 13.5189L13.6856 13.2116L13.7545 12.3007C13.9493 9.72553 15.1015 7.33397 16.9991 5.56669C18.9061 3.79059 21.3925 2.8125 24.0002 2.8125C26.6079 2.8125 29.0943 3.79059 31.0014 5.56659C32.8989 7.33387 34.0512 9.72534 34.246 12.3007L34.3149 13.2115L35.1751 13.5188C39.2531 14.9758 41.9931 18.8654 41.9931 23.1977C41.9931 28.8637 37.3835 33.4733 31.7175 33.4733Z"
                                      fill="#A4BFDE"/>
                            </svg>
                        </div>
                        <div class="title">Экологичные <br>материалы</div>
                        <div class="text">В производстве мы применяем <br>экологически чистые материалы</div>
                    </div>
                    <div class="block3__item">
                        <div class="block3__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                 fill="none">
                                <path d="M44.9163 30.6954V12.4834L23.2943 0L1.67245 12.4834V37.4502L23.2943 49.9336L29.0463 46.6127C31.0892 48.7013 33.9367 50 37.0821 50C43.2828 50 48.3275 44.9553 48.3275 38.7546C48.3275 35.5971 47.0189 32.7399 44.9163 30.6954ZM23.2943 3.3873L40.5159 13.3302L33.372 17.4548L16.1504 7.51191L23.2943 3.3873ZM21.8275 45.6993L4.60605 35.7564V15.8708L21.8275 25.8137V45.6993ZM6.07284 13.3302L13.2168 9.20557L30.4384 19.1484L23.2943 23.273L6.07284 13.3302ZM24.7611 45.6993V25.8136L41.9826 15.8707V28.6345C40.5006 27.9139 38.8378 27.5093 37.0821 27.5093C30.8814 27.5093 25.8367 32.554 25.8367 38.7547C25.8367 40.7489 26.3592 42.6232 27.2734 44.2489L24.7611 45.6993ZM37.0821 47.0664C32.499 47.0664 28.7703 43.3377 28.7703 38.7546C28.7703 34.1715 32.499 30.4428 37.0821 30.4428C41.6652 30.4428 45.3939 34.1715 45.3939 38.7546C45.3939 43.3377 41.6653 47.0664 37.0821 47.0664Z"
                                      fill="#A4BFDE"/>
                                <path d="M40.5554 34.4937L35.7523 39.3232L33.6009 37.1936L31.5371 39.2783L35.7686 43.4671L42.6354 36.5622L40.5554 34.4937Z"
                                      fill="#A4BFDE"/>
                            </svg>
                        </div>
                        <div class="title">Доставка <br>до двери</div>
                        <div class="text">Доставим мебель в удобное <br>для вас время к Вам домой</div>
                    </div>
                    <div class="block3__item">
                        <div class="block3__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                 fill="none">
                                <path d="M34.375 5.85938V2.92969H29.3945V0H20.6055V2.92969H15.5273V5.85938H7.42188V50H42.5781V5.85938H34.375ZM18.457 5.85938H23.5352V2.92969H26.4648V5.85938H31.4453V8.78906H18.457V5.85938ZM39.6484 47.0703H10.3516V8.78906H15.5273V11.7188H34.375V8.78906H39.6484V47.0703Z"
                                      fill="#A4BFDE"/>
                                <path d="M28.4687 33.7329L23.6719 38.5562L21.5233 36.4292L19.4622 38.5113L23.6881 42.6944L30.5459 35.7989L28.4687 33.7329Z"
                                      fill="#A4BFDE"/>
                                <path d="M34.7656 16.1133H15.2344V19.043H34.7656V16.1133Z" fill="#A4BFDE"/>
                                <path d="M34.7656 21.9727H15.2344V24.9023H34.7656V21.9727Z" fill="#A4BFDE"/>
                                <path d="M25 27.832H15.2344V30.7617H25V27.832Z" fill="#A4BFDE"/>
                            </svg>
                        </div>
                        <div class="title">Гарантия <br>до 3 лет</div>
                        <div class="text">Предоставим гарантию и <br>постгарантийное обслуживание</div>
                    </div>
                    <div class="block3__item">
                        <div class="block3__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                 fill="none">
                                <path d="M44.1406 23.5352C35.1409 23.5352 30.6964 19.4534 25.9908 15.132C21.0792 10.6213 16.0003 5.95703 5.85938 5.95703C2.62852 5.95703 0 8.58555 0 11.8164C0 13.8971 1.07461 15.5301 2.92969 16.3582V44.043H5.85938V41.1133H47.0703V44.043H50V29.3945C50 26.1637 47.3715 23.5352 44.1406 23.5352ZM24.0092 17.2898C26.4492 19.5307 28.9309 21.8092 32.0535 23.5352H14.6484C13.5815 23.5352 12.5813 23.8231 11.7188 24.3234V11.8164C11.7188 10.9725 11.538 10.1704 11.2154 9.44473C16.8381 10.7048 20.3447 13.9244 24.0092 17.2898ZM4.7373 13.8881C3.53789 13.5994 2.92969 12.9024 2.92969 11.8164C2.92969 10.201 4.24395 8.88672 5.85938 8.88672C7.4748 8.88672 8.78906 10.201 8.78906 11.8164V32.3242H5.85938V14.1581L4.7373 13.8881ZM47.0703 38.1836H5.85938V35.2539H47.0703V38.1836ZM47.0703 32.3242H11.7188V29.3945C11.7188 27.7791 13.033 26.4648 14.6484 26.4648H44.1406C45.7561 26.4648 47.0703 27.7791 47.0703 29.3945V32.3242Z"
                                      fill="#A4BFDE"/>
                            </svg>
                        </div>
                        <div class="title">Широкий <br>ассортимент</div>
                        <div class="text">Более 1000 моделей мягкой <br>мебели в ассортименте</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="block4 main-products">
            <div class="container">
                <h2 class="section__title"><span>Самые популярные товары</span></h2>
                <div class="main-products__flex flex-start">
                    <RouterLink :to="'/products/' + product.slug" class="main-product" v-for="(product, index) in new_products.data"
                                :key="index">
                        <img :src="generateImgUrl(product.product_img)" alt="" class="main-product__bg">
                        <div class="title">{{product.catalog_name}}</div>
                        <div class="price">{{new Intl.NumberFormat('ru-RU').format(product.price)}} P.</div>
                    </RouterLink>
                </div>
                <div class="main-products__nav flex-center middle" v-if="new_products.count > 1">
                    <div :class="[
                        'prev',
                        {'disabled': !new_products.has_prev}
                    ]" @click="getProducts(+new_products.current_page - 1)"></div>

                    <div :class="[
                            'page-btn',
                            {'active': button == new_products.current_page}
                        ]"
                         v-for="button in new_products.count"
                         :key="button" @click="getProducts(+button)">
                        {{button > 9 ? button : `0${button}`}}
                    </div>

                    <div :class="[
                        'next',
                        {'disabled': !new_products.has_next}
                    ]" @click="getProducts(+new_products.current_page + 1)"></div>
                </div>
            </div>
        </section>

        <section class="block5 main-products">
            <div class="container">
                <h2 class="section__title"><span>Текущие акции</span></h2>

                <div class="main-products__flex flex-start">
                    <RouterLink :to="'/products/' + product.slug" class="main-product" v-for="(product, index) in sale_products.data"
                                :key="index">
                        <img :src="generateImgUrl(product.product_img)" alt="" class="main-product__bg">
                        <div class="title">{{product.catalog_name}}</div>
                        <div class="price">{{new Intl.NumberFormat('ru-RU').format(product.price)}} P. <span
                                class="old-price">{{new Intl.NumberFormat('ru-RU').format(product.old_price)}} P.</span></div>
                    </RouterLink>
                </div>
                <div class="main-products__nav flex-center middle" v-if="sale_products.count > 1">
                    <div :class="[
                        'prev',
                        {'disabled': !sale_products.has_prev}
                    ]" @click="getProducts(+sale_products.current_page - 1)"></div>

                    <div :class="[
                            'page-btn',
                            {'active': button == sale_products.current_page}
                        ]"
                         v-for="button in sale_products.count"
                         :key="button" @click="getSaleProducts(+button)">
                        {{button > 9 ? button : `0${button}`}}
                    </div>

                    <div :class="[
                        'next',
                        {'disabled': !sale_products.has_next}
                    ]" @click="getProducts(+sale_products.current_page + 1)"></div>
                </div>
            </div>
        </section>

        <section class="block6 form-section">
            <div class="container">
                <div class="form-section__content">
                    <img src="/static/img/block6/bg.png" alt="" class="form-section__bg">
                    <div class="flex-start">
                        <div class="form-section__right">
                            <div class="title">Затрудняетесь <br>с выбором <br>мягкой мебели?</div>
                            <div class="text">Оставьте заявку, мы вас <br>проконсультируем</div>
                        </div>
                        <form class="form">
                            <input v-model="form.name" type="text" placeholder="Ваше имя">
                            <input v-model="form.phone" type="text" placeholder="Ваш телефон">
                            <button class="button">Получить консультацию</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="block7">
            <div class="container">
                <h2 class="section__title"><span>Сервис и условия</span></h2>
                <div class="flex-between block7__flex">
                    <div class="block7__item">
                        <img src="/static/img/block7/1.png" alt="" class="block7__item__bg block7__bg-bot">
                        <div class="title">Доставка по москве <br>и московской области</div>
                    </div>
                    <div class="block7__item">
                        <img src="/static/img/block7/2.png" alt="" class="block7__item__bg block7__bg-top">
                        <div class="title">Мебель <br>в рассрочку</div>
                    </div>
                    <div class="block7__item">
                        <img src="/static/img/block7/3.png" alt="" class="block7__item__bg block7__bg-bot">
                        <div class="title">Гарантия <br>на мебель</div>
                    </div>
                    <div class="block7__item">
                        <img src="/static/img/block7/4.png" alt="" class="block7__item__bg block7__bg-bot">
                        <div class="title">Любые способы <br>оплаты</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="block8">
            <div class="container block8__flex flex-between middle">
                <div class="block8__right">
                    <h2 class="section__title">
                        <span>Мягкая мебель от магазина</span><br>
                        <span>Беру диван</span>
                    </h2>
                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более
                        менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных
                        выступлений в домашних условиях. <br><br>При создании генератора мы использовали небезизвестный
                        универсальный код речей.</p>
                </div>
                <div class="block8__left">
                    <carousel
                            :items="carouselOptions.items"
                            :nav="carouselOptions.nav"
                            :navText="carouselOptions.navText"
                            :autoplay="carouselOptions.autoplay"
                            :loop="carouselOptions.loop"
                    >
                        <div class="block8__slide">
                            <img src="/static/img/block8/1.png" alt="">
                        </div>
                        <div class="block8__slide">
                            <img src="/static/img/block8/1.png" alt="">
                        </div>
                    </carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel2'

    export default {
        name: "Home",
        components: {carousel},
        props: ['slider'],
        data: () => ({
            carouselOptions: {
                items: 1,
                loop: true,
                nav: true,
                navText: ['<span></span>',
                    '<span></span>'],
                autoplay: true
            },
            categories: null,
            new_products: [],
            sale_products: [],
            form: {
                name: null,
                phone: null
            }
        }),
        methods: {
            async getCategories() {
                const res = await this.axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/home/categories/`, method: 'GET'})
                this.categories = res.data
            },
            async getProducts(page) {
                if (!this.new_products.count || (page <= this.new_products.count && page > 0 && page != this.new_products.current_page)) {
                    const res = await this.axios({
                        url: `${process.env.VUE_APP_SERVER_URL}api/v1/home/products/?page=${page}`,
                        method: 'GET'
                    })
                    this.new_products = res.data
                }
            },
            async getSaleProducts(page) {
                if (!this.new_products.count || (page <= this.new_products.count && page > 0 && page != this.new_products.current_page)) {
                    const res = await this.axios({
                        url: `${process.env.VUE_APP_SERVER_URL}api/v1/home/sale-products/?page=${page}`,
                        method: 'GET'
                    })
                    this.sale_products = res.data
                }
            },
            generateImgUrl(img) {
                return `${process.env.VUE_APP_SERVER_URL}${img}`
            }
        },
        mounted() {
            this.getCategories()
            this.getProducts(1)
            this.getSaleProducts(1)
        }
    }
</script>