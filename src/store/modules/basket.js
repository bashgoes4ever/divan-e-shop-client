import axios from 'axios'

const createProduct = (item) => {
    return {
        id: item.id,
        product_id: item.product.id,
        name: item.product.catalog_name,
        img: item.product.images_set[0].img,
        price: +item.product.price,
        old_price: +item.product.old_price,
        options: [
            {
                name: 'Ширина',
                value: `${item.product.width} см.`
            },
            {
                name: 'Высота',
                value: `${item.product.height} см.`
            },
            {
                name: 'Глубина',
                value: `${item.product.depth} см.`
            }
        ],
        material: item.casing.name,
        color: item.color.name,
        mechanism: item.product.mechanism ? item.product.mechanism.name : false,
        quantity: item.quantity,
        delivery_price: item.delivery_price
    }
}

export default {
    state: {
        status: '',
        basket: [],
        total_price: 0,
        total_items: 0,
        session_key: ''
    },
    mutations: {
        setBasket(state, data) {
            state.status = data
        },
        removeBasket(state) {
            state.status = ''
            state.basket = []
            state.total_price = 0
            state.total_items = 0
            state.session_key = ''
        },
        basketRequest(state) {
            state.status = 'pending'
        },
        itemAdded(state, data) {
            const product = createProduct(data)
            state.status = 'added'
            state.basket.push(product)
            state.total_items = state.total_items + 1
        },
        removeFromBasket(state, id) {
            state.status = 'removed'
            const index = state.basket.findIndex(item => item.id == id)
            state.basket.splice(index, 1)
            state.total_items = state.total_items - 1
        },
        changeQuantity(state, data) {
            state.status = 'quantity changed'
            const index = state.basket.findIndex(item => item.id == data.id)
            state.basket[index].quantity = data.quantity
        },
        basketLoaded(state, data) {
            state.status = 'loaded'
            state.basket = data.data.products.map(item => createProduct(item))
            state.total_items = data.data.products.length
            state.session_key = data.session_key
        }
    },
    actions: {
        setBasket({commit}, data) {
            commit('setBasket', data)
        },
        getBasket({commit}) {
            return new Promise((resolve, reject) => {
                commit('basketRequest')

                axios(`${process.env.VUE_APP_SERVER_URL}api/v1/basket/`, {
                    method: 'GET',
                })
                    .then(res => {
                        commit('basketLoaded', res.data)
                        const session_key = res.data.session_key
                        localStorage.setItem('session_key', session_key)
                        axios.defaults.headers.common['Authorization'] = session_key
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        removeBasket({commit}) {
            commit('removeBasket')
            localStorage.removeItem('session_key')
            delete axios.defaults.headers.common["Authorization"]
        },
        addToBasket({commit}, data) {
            return new Promise((resolve, reject) => {
                commit('basketRequest')
                axios({
                    url: `${process.env.VUE_APP_SERVER_URL}api/v1/basket/product/`, method: 'POST', data: {
                        quantity: data.quantity,
                        product: data.product,
                        casing: data.casing,
                        color: data.color
                    }
                })
                    .then(res => {
                        commit('itemAdded', res.data)
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        removeFromBasket({commit}, id) {
            return new Promise((resolve, reject) => {
                commit('basketRequest')
                axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/basket/product/${id}`, method: 'DELETE'})
                    .then(res => {
                        commit('removeFromBasket', id)
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        changeQuantity({commit}, data) {
            return new Promise((resolve, reject) => {
                commit('basketRequest')
                axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/basket/product/${data.id}`, method: 'PUT', data: {
                        quantity: data.quantity
                    }})
                    .then(res => {
                        commit('changeQuantity', {id: data.id, quantity: data.quantity})
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        }
    },
    getters: {
        products: state => state.basket,
        total_price: state => state.total_price,
        total_items: state => state.total_items,
        total_delivery: state => state.basket.reduce((acc, item) => {
            return acc + item.delivery_price*item.quantity
        }, 0)
    }
}