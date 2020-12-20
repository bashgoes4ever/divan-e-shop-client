<template>
    <div class="service-page">
        <div class="container breadcrumbs">
            <span class="path-wrapper">
                <RouterLink to="/">Главная / </RouterLink>
                <span>Контакты</span>
            </span>
        </div>

        <div class="container flex-between service-flex">
            <AboutSideMenu></AboutSideMenu>
            <div class="service__right">
                <h2>Контакты</h2>
                <p>Контакты для оформления заказа и оплате, по вопросам доставки </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="url(#pattern0)"/>
</mask>
<g mask="url(#mask0)">
<rect width="16" height="16" fill="#7A8787"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00666667)"/>
</pattern>
<image id="image0" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                    {{contacts.phone1}}
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17" fill="none">
<mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
<rect width="17" height="17" fill="url(#pattern5)"/>
</mask>
<g mask="url(#mask5)">
<rect width="17" height="17" fill="#7A8787"/>
</g>
<defs>
<pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image5" transform="scale(0.00666667)"/>
</pattern>
<image id="image5" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                    {{contacts.email1}}
                </p>
                <p class="mt-30">Контакты для сотрудничества</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="url(#pattern0)"/>
</mask>
<g mask="url(#mask0)">
<rect width="16" height="16" fill="#7A8787"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00666667)"/>
</pattern>
<image id="image0" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                    {{contacts.phone2}}
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17" fill="none">
<mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
<rect width="17" height="17" fill="url(#pattern5)"/>
</mask>
<g mask="url(#mask5)">
<rect width="17" height="17" fill="#7A8787"/>
</g>
<defs>
<pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image5" transform="scale(0.00666667)"/>
</pattern>
<image id="image5" width="150" height="150" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
                    {{contacts.email2}}
                </p>
                <img src="/static/img/about/3.png" alt="" class="mt-30">

            </div>
        </div>
    </div>
</template>

<script>
    import AboutSideMenu from '../../layout/AboutSideMenu'
    import {mapGetters} from 'vuex'

    export default {
        name: "Contacts",
        components: {AboutSideMenu},
        computed: mapGetters(['contacts']),
    }
</script>

<style scoped>

</style>