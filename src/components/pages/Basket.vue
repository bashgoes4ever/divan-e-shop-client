<template>
    <div class="basket-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Корзина</span>
            </span>
        </div>

        <h2 v-if="!ordered" class="container basket-title">{{generateTitle()}}</h2>

        <div v-if="products.length && !ordered" class="basket__flex flex-between container">
            <div class="basket__left">
                <div class="basket__items">
                    <div class="basket__item flex-start" v-for="(product, index) in products" :key="index">
                        <div class="basket__item__img">
                            <img :src="generateImgUrl(product.img)" alt="">
                        </div>
                        <div class="basket__item__info">
                            <div class="title">{{product.name}}</div>
                            <div class="price-wrap1 price-wrap flex-start">
                                <span class="price">{{new Intl.NumberFormat('ru-RU').format(product.price)}} р.</span>
                                <span v-if="product.old_price" class="old-price">{{new Intl.NumberFormat('ru-RU').format(product.old_price)}} р.</span>
                                <span class="sale" v-if="product.old_price">-{{calcSale(product)}}%</span>
                            </div>

                            <div class="product-options basket-options">
                                <div class="product-option flex-start">
                                    <div class="key">Габариты:</div>
                                    <div class="value">{{product.options.map(el => el.value).join(' x ')}}</div>
                                </div>
                                <div class="product-option flex-start">
                                    <div class="key">Материал:</div>
                                    <div class="value">{{product.material}}</div>
                                </div>
                                <div class="product-option flex-start" v-if="product.mechanism">
                                    <div class="key">Механизм:</div>
                                    <div class="value">{{product.mechanism}}</div>
                                </div>
                                <div class="product-option flex-start">
                                    <div class="key">Цвет:</div>
                                    <div class="value">{{product.color}}</div>
                                </div>
                            </div>

                            <div class="product-quantity flex-start middle">
                                <div class="key">Количество</div>
                                <div class="quantity-input">
                                    <div @click="quantityChangeHandler(product, -1)"
                                         class="quantity-input__button take">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="2" viewBox="0 0 7 2"
                                             fill="none">
                                            <path d="M6.83789 0.558594V1.72754H0.808594V0.558594H6.83789Z"
                                                  fill="black"/>
                                        </svg>
                                    </div>
                                    <input disabled type="text" :value="product.quantity">
                                    <div @click="quantityChangeHandler(product, 1)" class="quantity-input__button add">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"
                                             fill="none">
                                            <path d="M5.2207 8.24316H4.05176V4.82422H0.720703V3.64648H4.05176V0.227539H5.2207V3.64648H8.55176V4.82422H5.2207V8.24316Z"
                                                  fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                                <div @click="removeFromBasket(product.id)" class="remove-product">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                         fill="none">
                                        <path d="M21.2891 2.92969H16.8945V2.19727C16.8945 0.985693 15.9088 0 14.6973 0H10.3027C9.09116 0 8.10547 0.985693 8.10547 2.19727V2.92969H3.71094C2.49937 2.92969 1.51367 3.91538 1.51367 5.12695V6.5918C1.51367 6.99629 1.8416 7.32422 2.24609 7.32422H3.03628L4.32471 22.9954C4.32485 22.9975 4.32505 22.9996 4.32524 23.0017C4.42886 24.1409 5.36963 25 6.51348 25H18.4865C19.6304 25 20.5711 24.1409 20.6747 23.0017C20.6749 22.9996 20.6751 22.9975 20.6752 22.9954L21.9637 7.32422H22.7539C23.1584 7.32422 23.4863 6.99629 23.4863 6.5918V5.12695C23.4863 3.91538 22.5006 2.92969 21.2891 2.92969ZM9.57031 2.19727C9.57031 1.79341 9.89888 1.46484 10.3027 1.46484H14.6973C15.1011 1.46484 15.4297 1.79341 15.4297 2.19727V2.92969H9.57031V2.19727ZM19.2157 22.8715C19.1801 23.25 18.8669 23.5352 18.4865 23.5352H6.51348C6.13301 23.5352 5.81992 23.25 5.78428 22.8715L4.50605 7.32422H20.4939L19.2157 22.8715ZM22.0215 5.85938H21.2891H3.71094H2.97852V5.12695C2.97852 4.7231 3.30708 4.39453 3.71094 4.39453H8.83789H16.1621H21.2891C21.6929 4.39453 22.0215 4.7231 22.0215 5.12695V5.85938Z"
                                              fill="#E03E3E"/>
                                        <path d="M12.5 8.78906C12.0955 8.78906 11.7676 9.11699 11.7676 9.52148V19.873C11.7676 20.2775 12.0955 20.6055 12.5 20.6055C12.9045 20.6055 13.2324 20.2775 13.2324 19.873V9.52148C13.2324 9.11699 12.9045 8.78906 12.5 8.78906Z"
                                              fill="#E03E3E"/>
                                        <path d="M16.8945 8.78906C16.49 8.78906 16.1621 9.11699 16.1621 9.52148V19.873C16.1621 20.2775 16.49 20.6055 16.8945 20.6055C17.299 20.6055 17.627 20.2775 17.627 19.873V9.52148C17.627 9.11699 17.299 8.78906 16.8945 8.78906Z"
                                              fill="#E03E3E"/>
                                        <path d="M8.10547 8.78906C7.70098 8.78906 7.37305 9.11699 7.37305 9.52148V19.873C7.37305 20.2775 7.70098 20.6055 8.10547 20.6055C8.50996 20.6055 8.83789 20.2775 8.83789 19.873V9.52148C8.83789 9.11699 8.50996 8.78906 8.10547 8.78906Z"
                                              fill="#E03E3E"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basket__total-wrapper">
                    <div v-if="calcTotalSale() != '0'" class="basket__sale basket__total-item flex-start">
                        <div class="title">Сумма скидки</div>
                        <div class="value">{{calcTotalSale()}} руб.</div>
                    </div>
                    <div class="basket__delivery basket__total-item flex-start">
                        <div class="title">
                            <input type="checkbox" id="delivery_c" v-model="delivery">
                            <label for="delivery_c">С доставкой</label>
                        </div>
                        <div class="value">{{total_delivery}} руб.</div>
                    </div>
                    <div class="basket__price basket__total-item flex-start">
                        <div class="title">Итого:</div>
                        <div class="value">
                            <div class="price-wrap1 price-wrap flex-start">
                                <span class="price">{{calcTotalPrice()}} р.</span>
                                <span v-if="calcTotalOldPrice() != calcTotalPrice()" class="old-price">{{calcTotalOldPrice()}} р.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form class="form basket__right">
                <div class="title">Введите контактные данные</div>
                <input type="text" v-model="name" placeholder="Ф.И.О.">
                <input type="text" v-model="phone" placeholder="Телефон">
                <input type="text" v-model="email" placeholder="Email">
                <input type="text" placeholder="Город" v-model="user_city">
                <input type="text" v-model="address" placeholder="Адрес доставки">
                <textarea v-model="comment" placeholder="Комментарий к заказу"></textarea>
                <div class="title">Выберите способ оплаты</div>
                <div class="basket-pay-type">
                    <input @click="payment_type = 'Банковская карта'" :checked="payment_type == 'Банковская карта'" type="radio" name="pay" id="pay1" value="bank_card">
                    <label class="flex-start middle" for="pay1">
                        <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clip-path="url(#clip0)">
                                <path d="M2.9687 3.67145H19.0313C20.6683 3.67145 22 5.00319 22 6.64015V15.3598C22 16.9968 20.6683 18.3285 19.0313 18.3285H2.9687C1.33174 18.3285 0 16.9968 0 15.3598V6.64015C0 5.00319 1.33174 3.67145 2.9687 3.67145ZM19.0313 5.47849H2.9687C2.32815 5.47849 1.80704 5.9996 1.80704 6.64015V7.34288H20.193V6.64015C20.193 5.9996 19.6718 5.47849 19.0313 5.47849ZM2.9687 16.5215H19.0313C19.6718 16.5215 20.193 16.0004 20.193 15.3598V9.14992H1.80704V15.3598C1.80704 16.0004 2.32815 16.5215 2.9687 16.5215Z"
                                      fill="black"/>
                                <path d="M16.5072 11.4733H17.884C18.383 11.4733 18.7875 11.8778 18.7875 12.3768C18.7875 12.8758 18.383 13.2803 17.884 13.2803H16.5072C16.0082 13.2803 15.6036 12.8758 15.6036 12.3768C15.6036 11.8778 16.0082 11.4733 16.5072 11.4733Z"
                                      fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="22" height="22" fill="white" transform="matrix(-1 0 0 1 22 0)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                        <span class="text">Банковская карта</span>
                    </label>
                </div>
                <div class="basket-pay-type">
                    <input @click="payment_type = 'Наличные'" :checked="payment_type == 'Наличные'" type="radio" name="pay" id="pay2" value="cash">
                    <label class="flex-start middle" for="pay2">
                        <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clip-path="url(#clip0)">
                                <path d="M18.7769 3.22417C14.4791 -1.07359 7.52248 -1.07423 3.22412 3.22417C-1.07369 7.52189 -1.07438 14.4786 3.22412 18.777C7.52188 23.0748 14.4785 23.0754 18.7769 18.777C23.0747 14.4793 23.0754 7.52254 18.7769 3.22417ZM11.0005 20.1915C5.9326 20.1915 1.80957 16.0684 1.80957 11.0006C1.80957 5.9327 5.9326 1.80971 11.0005 1.80971C16.0683 1.80971 20.1914 5.93274 20.1914 11.0006C20.1914 16.0685 16.0684 20.1915 11.0005 20.1915Z"
                                      fill="black"/>
                                <path d="M12.3764 5.50839H9.16465C8.66576 5.50839 8.26133 5.91282 8.26133 6.41171V10.0967H7.32937C6.83048 10.0967 6.42606 10.5011 6.42606 11C6.42606 11.4989 6.83048 11.9033 7.32937 11.9033H8.26133V12.8496H7.32937C6.83048 12.8496 6.42606 13.2541 6.42606 13.753C6.42606 14.2518 6.83048 14.6563 7.32937 14.6563H8.26133V15.5883C8.26133 16.0872 8.66576 16.4916 9.16465 16.4916C9.66353 16.4916 10.068 16.0872 10.068 15.5883V14.6563H11.9176C12.4165 14.6563 12.8209 14.2518 12.8209 13.753C12.8209 13.2541 12.4165 12.8496 11.9176 12.8496H10.068V11.9033H12.3764C14.1395 11.9033 15.5739 10.4689 15.5739 8.70587C15.5739 6.94277 14.1395 5.50839 12.3764 5.50839ZM12.3764 10.0966H10.068V7.31498H12.3764C13.1433 7.31498 13.7672 7.93887 13.7672 8.70579C13.7672 9.4727 13.1434 10.0966 12.3764 10.0966Z"
                                      fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="22" height="22" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                        <span class="text">Наличные</span>
                    </label>
                </div>
                <div class="basket-pay-type">
                    <input @click="payment_type = 'Рассрочка'" :checked="payment_type == 'Рассрочка'" type="radio" name="pay" id="pay3" value="credit">
                    <label class="flex-start middle" for="pay3">
                        <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13" fill="none">
<path d="M2.32812 10.5938C1.41667 9.54688 0.960938 8.14844 0.960938 6.39844C0.960938 4.64844 1.41667 3.2526 2.32812 2.21094C3.23958 1.16406 4.35677 0.640625 5.67969 0.640625C7.0026 0.640625 8.11979 1.16406 9.03125 2.21094C9.94271 3.2526 10.3984 4.64844 10.3984 6.39844C10.3984 8.14844 9.94271 9.54688 9.03125 10.5938C8.11979 11.6354 7.0026 12.1562 5.67969 12.1562C4.35677 12.1562 3.23958 11.6354 2.32812 10.5938ZM7.76562 9.45312C8.34896 8.70833 8.64062 7.6901 8.64062 6.39844C8.64062 5.10677 8.34896 4.09115 7.76562 3.35156C7.1875 2.61198 6.49219 2.24219 5.67969 2.24219C4.86719 2.24219 4.16927 2.61198 3.58594 3.35156C3.00781 4.09115 2.71875 5.10677 2.71875 6.39844C2.71875 7.6901 3.00781 8.70833 3.58594 9.45312C4.16927 10.1927 4.86719 10.5625 5.67969 10.5625C6.49219 10.5625 7.1875 10.1927 7.76562 9.45312ZM16.375 1.36719C16.8698 1.85156 17.1172 2.4349 17.1172 3.11719C17.1172 3.79948 16.8698 4.38542 16.375 4.875C15.8802 5.35938 15.2734 5.60156 14.5547 5.60156C13.8411 5.60156 13.237 5.35938 12.7422 4.875C12.2474 4.38542 12 3.79948 12 3.11719C12 2.4349 12.2474 1.85156 12.7422 1.36719C13.237 0.882812 13.8411 0.640625 14.5547 0.640625C15.2734 0.640625 15.8802 0.882812 16.375 1.36719ZM13.6484 2.21094C13.4036 2.45573 13.2812 2.76042 13.2812 3.125C13.2812 3.48438 13.4036 3.78646 13.6484 4.03125C13.8932 4.27604 14.1953 4.39844 14.5547 4.39844C14.9193 4.39844 15.224 4.27604 15.4688 4.03125C15.7135 3.78646 15.8359 3.48438 15.8359 3.125C15.8359 2.76042 15.7135 2.45573 15.4688 2.21094C15.224 1.96615 14.9193 1.84375 14.5547 1.84375C14.1953 1.84375 13.8932 1.96615 13.6484 2.21094ZM13.2812 12L20.3203 0.796875H21.7578L14.7188 12H13.2812ZM18.6641 11.4297C18.1693 10.9453 17.9219 10.362 17.9219 9.67969C17.9219 8.9974 18.1693 8.41406 18.6641 7.92969C19.1589 7.44531 19.763 7.20312 20.4766 7.20312C21.1953 7.20312 21.8021 7.44531 22.2969 7.92969C22.7917 8.41406 23.0391 8.9974 23.0391 9.67969C23.0391 10.362 22.7917 10.9453 22.2969 11.4297C21.8021 11.9141 21.1953 12.1562 20.4766 12.1562C19.763 12.1562 19.1589 11.9141 18.6641 11.4297ZM21.3906 10.5938C21.6354 10.349 21.7578 10.0443 21.7578 9.67969C21.7578 9.3151 21.6354 9.01042 21.3906 8.76562C21.1458 8.52083 20.8411 8.39844 20.4766 8.39844C20.1172 8.39844 19.8151 8.52083 19.5703 8.76562C19.3255 9.01042 19.2031 9.3151 19.2031 9.67969C19.2031 10.0443 19.3255 10.349 19.5703 10.5938C19.8151 10.8385 20.1172 10.9609 20.4766 10.9609C20.8411 10.9609 21.1458 10.8385 21.3906 10.5938Z"
      fill="black"/>
</svg>
                        </span>
                        <span class="text">Рассрочка</span>
                    </label>
                </div>
                <button class="button" @click.prevent="createOrder()">Оформить заказ</button>


            </form>
        </div>

        <div class="container" v-if="ordered">
            <h2>Спасибо за ваш заказ! <br>Мы свяжемся с вами в ближайшее время для подтверждения заказа.</h2>
            <RouterLink to="/" class="button home-btn" tag="button">На главную</RouterLink>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        name: "Basket",
        props: ['city'],
        computed: mapGetters(['total_items', 'products', 'total_price', 'total_delivery']),
        data: () => ({
            delivery: true,
            user_city: null,
            name: null,
            phone: null,
            email: null,
            address: null,
            comment: null,
            payment_type: 'Банковская карта',
            ordered: false
        }),
        mounted() {
            this.user_city = this.city
        },
        watch: {
            city() {
                this.user_city = this.city
            }
        },
        methods: {
            ...mapActions(['removeFromBasket', 'changeQuantity', 'removeBasket', 'getBasket']),
            calcSale(product) {
                return Math.ceil((product.old_price - product.price) / (product.old_price / 100))
            },
            quantityChangeHandler(product, quantity) {
                if (product.quantity + quantity > 0) {
                    const q = +product.quantity + quantity
                    this.changeQuantity({id: product.id, quantity: q})
                }
            },
            generateTitle() {
                if (!this.products.length) {
                    return 'Корзина пока пустая'
                } else if (this.products.length == 1) {
                    return `${this.products.length} товар в корзине`
                } else if (this.products.length > 1 && this.products.length < 5) {
                    return `${this.products.length} товара в корзине`
                } else {
                    return `${this.products.length} товаров в корзине`
                }
            },
            calcTotalPrice() {
                let price = this.products.reduce(((sum, cur) => sum + cur.price * cur.quantity), 0)
                this.delivery ? price += this.total_delivery : null
                return new Intl.NumberFormat('ru-RU').format(price)
            },
            calcTotalOldPrice() {
                let price = this.products.reduce(((sum, cur) => {
                    if (cur.old_price) {
                        return sum + cur.old_price * cur.quantity
                    } else {
                        return sum + cur.price * cur.quantity
                    }
                }), 0)
                this.delivery ? price += this.total_delivery : null
                return new Intl.NumberFormat('ru-RU').format(price)
            },
            calcTotalSale() {
                const product_prices = this.products.reduce(((sum, cur) => {
                    if (cur.old_price) {
                        return sum + (cur.old_price - cur.price) * cur.quantity
                    } else {
                        return sum
                    }
                }), 0)
                return new Intl.NumberFormat('ru-RU').format(product_prices)
            },
            generateImgUrl(img) {
                return `${process.env.VUE_APP_SERVER_URL}${img}`
            },
            async createOrder() {
                this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/order/`,
                    data: {
                        'customer_name': this.name,
                        'customer_phone': this.phone,
                        'customer_email': this.email,
                        'customer_city': this.user_city,
                        'customer_address': this.address,
                        'comment': this.comment,
                        'payment_type': this.payment_type,
                        'delivery': this.delivery
                    },
                    method: 'POST'
                }).then(async (res) => {
                    if (res.status == 201) {
                        await this.removeBasket()
                        this.getBasket()
                        this.ordered = true
                    } else {
                        alert('При создании заказа возникли ошибки. Проверьте правильность введенных данных.')
                    }
                }).catch(err => {
                    console.log(err)
                    alert('При создании заказа возникли ошибки. Проверьте правильность введенных данных.')
                })

            }
        }
    }
</script>

<style scoped>
    .home-btn {
        width: 260px;
        height: 60px;
        display: block;
        margin-top: 50px;
    }
</style>