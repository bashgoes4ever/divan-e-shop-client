<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Доставка и подъем</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <ServiceSideMenu></ServiceSideMenu>

            <div class="delivery__right service__right">
                <div class="delivery__tabs flex-between">
                    <div @click="tab = 1" :class="[
                        'delivery__tab',
                        {'delivery__tab-active': tab == 1}
                    ]">
                        <span>Доставка</span>
                    </div>
                    <div @click="tab = 2" :class="[
                        'delivery__tab',
                        {'delivery__tab-active': tab == 2}
                    ]">
                        <span>Подъем</span>
                    </div>
                </div>
                <div class="delivery__content" v-if="tab == 1">
                    <table>
                        <tr v-for="(tr, index) in delivery" :key="index">
                            <td>{{tr.name}}</td>
                            <td>{{tr.delivery_price}} руб.</td>
                            <td>В пределах МКАД</td>
                        </tr>
                    </table>
                    <h2>Доставка за преедлы Мкад</h2>
                    <p>- 40 рублей х 1 км дополнительно (при доставке до 40 км в Москвоской области) <br>- Доставка
                        свыше 40 км в область (цена договорная)</p>
                    <div class="delivery__flex flex-start">
                        <div class="widget-wrapper">
                            <iframe
                                    src="https://widgets.dellin.ru/calculator?derival_to_door=off&arrival_to_door=on&disabled_calculation=off&insurance=0&package=1"
                                    width="335"
                                    height="390"
                                    scrolling="no"
                                    frameborder="0">
                            </iframe>
                        </div>
                        <p>Интернет-магазин «Беру-диван.рф» доставляет мебель по всей России. Доставка выполняется
                            транспортной компанией. <br><br>Стоимость доставки зависит от веса и габаритов изделия,
                            расстояния от пункта назначения до места загрузки ТК.<br><br>Чтобы узнать примерную
                            стоимость доставки, воспользуйтесь ОНЛАЙН-КАЛЬКУЛЯТОРОМ. Выберите из
                            списка нужное изделие, либо укажите объем груза, вес товара в полной комплектации и с
                            упаковкой.

                        </p>
                    </div>
                </div>

                <div class="delivery__content" v-if="tab == 2">
                    <table>
                        <tr v-for="(tr, index) in lift" :key="index">
                            <td>{{tr.name}}</td>
                            <td>{{tr.lift_price}} руб.</td>
                            <!--<td>В пределах МКАД</td>-->
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ServiceSideMenu from '../../layout/ServiceSideMenu'

    export default {
        name: "Delivery",
        components: {ServiceSideMenu},
        data: () => ({
            tab: 1,
            delivery: [],
            lift: []
        }),
        methods: {
            async getDeliveryPrices() {
                const res = await this.axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/delivery-prices/`, method: 'GET'})
                this.delivery = res.data
            },
            async getLiftPrices() {
                const res = await this.axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/lift-prices/`, method: 'GET'})
                this.lift = res.data
            }
        },
        mounted() {
            this.getDeliveryPrices()
            this.getLiftPrices()
        }
    }
</script>

<style scoped>

</style>