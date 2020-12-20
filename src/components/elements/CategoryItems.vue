<template>
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
</template>

<script>
    import Card from './Card'

    export default {
        components: {Card},
        name: "CategoryItems",
        props: ['products', 'sort'],
        data: () => ({
            select: {
                is_open: false,
                current: {
                    name: 'Популярности'
                },
                options: [
                    {
                        name: 'Популярности',
                        sort: 'priority',
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
            quantity: 30,
            quantities: [30, 60, 90],
        }),
        methods: {
            onClose() {
                this.select.is_open = false
            },
            selectOption(index) {
                this.select.current = this.select.options[index]
                this.select.options.map((item, idx) => {
                    idx == index ? item.is_active = true : item.is_active = false
                })
            },
            quantityChangeHandler(index) {
                this.quantity = this.quantities[index]
            }
        },
    }
</script>

<style scoped>

</style>