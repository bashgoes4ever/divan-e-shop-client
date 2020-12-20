<template>
    <div class="category__filters">
        <div class="categories">
            <div class="category" v-for="(category, index) in categories" :key="index">
                <span @click="category.is_open = !category.is_open" class="category__name">{{category.name}}</span>
                <div class="category__menu" v-if="category.is_open">
                    <RouterLink :key="i" :to="'/' + subcat.slug" v-for="(subcat, i) in category.children">
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
        <div class="filter-checkboxes">
            <div class="title">Механизм трансформации</div>
            <div class="filter-checkbox" v-for="(checkbox, index) in checkboxes" :key="index">
                <input v-model="checkbox.is_checked" type="checkbox" name="checkbox" :id="`check${index}`">
                <label :for="`check${index}`">{{checkbox.name}}</label>
            </div>
        </div>

        <button class="button">Применить фильтры</button>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
        name: "CategoryFilters",
        components: {
            VueSlider
        },
        data: () => ({
            categories: [],
            value: [0, 50],
            sliders: [
                {
                    name: 'Цена',
                    unit: 'р.',
                    min: 100,
                    max: 500,
                    value: [100, 500]
                },
                {
                    name: 'Ширина',
                    unit: 'см.',
                    min: 20,
                    max: 500,
                    value: [20, 500]
                },
                {
                    name: 'Высота',
                    unit: 'см.',
                    min: 20,
                    max: 500,
                    value: [20, 500]
                }
            ],
            checkboxes: [
                {
                    name: 'Аккордион',
                    is_checked: false
                },
                {
                    name: 'Выкатной',
                    is_checked: false
                },
                {
                    name: 'Дельфин',
                    is_checked: false
                }
            ]
        }),
        methods: {
            async getBreadcrumbs() {
                const res = await this.axios({url: `${process.env.VUE_APP_SERVER_URL}api/v1/categories/?slug=${this.$route.params.slug}`, method: 'GET'})
                this.categories = res.data.children.map(item => ({
                    name: item.name,
                    children: item.children.map(child => ({
                        name: child.name,
                        slug: `/catalog/${child.slug}`
                    })),
                    is_open: false
                }))
            },
        },
        mounted() {
            this.getBreadcrumbs()
        }
    }
</script>

<style scoped>

</style>