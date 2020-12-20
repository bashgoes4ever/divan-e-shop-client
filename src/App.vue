<template>
    <div id="app">
        <Header :categories="categories" :city="city"></Header>
        <router-view :city="city" :slider="slider"></router-view>
        <Footer :categories="categories"></Footer>
    </div>
</template>

<script>
    import Header from './components/layout/Header'
    import Footer from './components/layout/Footer'
    import {mapActions} from 'vuex'

    export default {
        name: 'App',
        components: {Header, Footer},
        data: () => ({
            categories: null,
            city: null,
            contacts: null,
            slides: []
        }),
        methods: {
            ...mapActions(['getBasket', 'setContacts']),
            async getMenu() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/categories/`,
                    method: 'GET'
                })
                this.categories = res.data.map(item => ({
                    ...item,
                    submenu_active: false
                }))
            },
            async getContactsAndSlider() {
                const res = await this.axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/misc/`,
                    method: 'GET'
                })
                this.setContacts(res.data.contacts)
                this.slider = res.data.slider
            },
            getUserCity() {
                return new Promise((resolve, reject) => {
                    fetch('https://api.ipify.org?format=json')
                        .then(res => res.json())
                        .then(({ip}) => {
                            fetch(
                                `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}&token=e523a9da022aeeae14f7f6edc880f060c6bad751`
                            )
                                .then(res => res.json())
                                .then(json => {
                                    if (
                                        {}.hasOwnProperty.call(json, 'family') &&
                                        json.family.toLowerCase().indexOf('err')
                                    ) {
                                        return reject(json);
                                    }
                                    const {
                                        location: {
                                            data: {city},
                                        },
                                    } = json;
                                    resolve({city, ip});
                                });
                        });
                });
            }
        },
        mounted() {
            this.getMenu()
            this.getContactsAndSlider()
            this.getUserCity()
                .then(({city}) => {
                    this.city = city
                })
                .catch(err => {
                    console.log(err);
                });
            this.getBasket()
        }
    }
</script>

<style lang="sass">
    @import 'style/fonts'
    @import 'style/main'
    @import 'style/media'
</style>
