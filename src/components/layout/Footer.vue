<template>
    <footer>
        <div class="container">
            <div class="flex-between">
                <div class="footer__left">
                    <RouterLink class="footer__logo" to="/">Беру диван</RouterLink>
                    <form class="form">
                        <div class="title">Подпишитесь на наши новости и скидки</div>
                        <input type="text" placeholder="Ваш Email">
                        <button class="button">Отправить</button>
                    </form>
                    <div v-if="contacts.instagram || contacts.facebook" class="title">Присоединяйтесь к нам в соц.сетях</div>
                    <div v-if="contacts.instagram || contacts.facebook" class="socials flex-start">
                        <a v-if="contacts.instagram" :href="contacts.instagram" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="19" viewBox="0 0 19 19" fill="none">
<rect width="19" height="19" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00666667)"/>
</pattern>
<image id="image0" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                        </a>
                        <a v-if="contacts.facebook" :href="contacts.facebook" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" fill="url(#pattern1)"/>
<defs>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1" transform="scale(0.00666667)"/>
</pattern>
<image id="image1" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                        </a>
                    </div>
                </div>
            
                <div class="footer__nav">
                    <div class="title">Каталог мебели</div>
                    <ul v-if="categories">
                        <li v-for="(category, i) in categories"
                        :key="i">
                            <RouterLink :to="`/catalog/${category.slug}`">{{category.name}}</RouterLink>
                        </li>
                    </ul>
                </div>
                
                <div class="footer__nav">
                    <div class="title">О компании</div>
                    <ul>
                        <li>
                            <RouterLink to="/about/manufacturing">О производстве</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about/addresses">Адреса магазинов</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about/designers">Дизайнерам</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about/sales">Акции</RouterLink>
                        </li>
                    </ul>
                </div>
                
                <div class="footer__nav">
                    <div class="title">Сервис</div>
                    <ul>
                        <li>
                            <RouterLink to="/service/delivery">Доставка и оплата</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/service/assemble">Услуги подъема</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/service/guaranties">Гарантия и возврат</RouterLink>
                        </li>
                    </ul>
                </div>
                
                <div class="footer__nav">
                    <div class="title">Контакты</div>
                    <ul>
                        <li><a :href="`tel:${contacts.phone1}`">{{contacts.phone1}}</a></li>
                        <li><a :href="`mailto:${contacts.email1}`">{{contacts.email1}}</a></li>
                        <li>{{contacts.work_time}}</li>
                    </ul>
                    <button class="button">Написать нам</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Footer",
        props: ['categories'],
        computed: mapGetters(['contacts']),
    }
</script>

<style scoped>

</style>