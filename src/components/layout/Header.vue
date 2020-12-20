<template>
    <div>
        <div class="top-line">
            <div class="container middle flex-between top-line__flex">
                <div class="top-line__city">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5.00017 0C7.43596 0 9.41785 1.98189 9.41785 4.41792C9.41785 5.05333 9.28779 5.66 9.03149 6.22124C7.92695 8.63824 5.80924 11.1901 5.18635 11.9145C5.13968 11.9687 5.07165 11.9999 5.00005 11.9999C4.92845 11.9999 4.86042 11.9687 4.81375 11.9145C4.19111 11.1902 2.0734 8.63848 0.96849 6.22124C0.712066 5.66 0.582133 5.05333 0.582133 4.41792C0.582379 1.98189 2.56426 0 5.00017 0ZM5.00017 6.7126C6.26547 6.7126 7.29498 5.68309 7.29498 4.41779C7.29498 3.15237 6.26547 2.12287 5.00017 2.12287C3.73488 2.12287 2.70537 3.15237 2.70537 4.41779C2.70525 5.68309 3.73475 6.7126 5.00017 6.7126Z"
                              fill="#BBC6C6"/>
                    </svg>
                    <span>{{city}}</span>
                </div>

                <div class="top-line__phone">
                    <span class="text">{{contacts.phone1}}</span>
                    <span class="top-line__button">Заказать звонок</span>
                </div>
            </div>
        </div>

        <header>
            <div class="container middle flex-between header__flex">
                <RouterLink class="header__logo" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20" viewBox="0 0 139 20" fill="none">
                        <path d="M2.61914 13.7979H6.58301C7.29915 13.7979 7.89714 13.5579 8.37695 13.0781C8.86393 12.5911 9.10742 11.9896 9.10742 11.2734C9.10742 10.5501 8.86393 9.94857 8.37695 9.46875C7.89714 8.98177 7.29915 8.73828 6.58301 8.73828H2.61914V13.7979ZM6.58301 16H0.202148V0.595703H10.3213V2.79785H2.61914V6.53613H6.58301C8.00814 6.53613 9.18978 6.99089 10.1279 7.90039C11.0661 8.8099 11.5352 9.93424 11.5352 11.2734C11.5352 12.6055 11.0661 13.7262 10.1279 14.6357C9.18978 15.5452 8.00814 16 6.58301 16ZM17.4648 13.7979H26.1553V16H15.0479V0.595703H25.9404V2.79785H17.4648V6.86914H24.1787V9.07129H17.4648V13.7979ZM29.4639 0.595703H35.6191C37.0872 0.595703 38.3154 1.0791 39.3037 2.0459C40.2992 3.00553 40.7969 4.17643 40.7969 5.55859C40.7969 6.93359 40.2992 8.10091 39.3037 9.06055C38.3154 10.0202 37.0872 10.5 35.6191 10.5H31.8809V16H29.4639V0.595703ZM35.6191 2.79785H31.8809V8.29785H35.6191C36.3783 8.29785 37.0264 8.03646 37.5635 7.51367C38.1006 6.98372 38.3691 6.33203 38.3691 5.55859C38.3691 4.77799 38.1006 4.12272 37.5635 3.59277C37.0264 3.06283 36.3783 2.79785 35.6191 2.79785ZM44.8467 0.595703L49.0254 8.63086L52.7637 0.595703H55.2988L49.7988 12.2617C49.1543 13.6439 48.4525 14.6501 47.6934 15.2803C46.9414 15.9033 45.9567 16.2148 44.7393 16.2148C44.4743 16.2148 44.2129 16.1862 43.9551 16.1289C43.6973 16.0716 43.5039 16.0143 43.375 15.957L43.1924 15.8926V13.7979C43.486 13.9411 43.9264 14.0163 44.5137 14.0234C45.2298 14.0234 45.792 13.8802 46.2002 13.5938C46.6156 13.3073 46.9701 12.8633 47.2637 12.2617L47.8115 11.1553L42.3115 0.595703H44.8467Z"
                              fill="#303338"/>
                        <path d="M59.918 13.7979H60.7988C60.8704 13.7406 60.9635 13.6439 61.0781 13.5078C61.1999 13.3646 61.4111 13.0459 61.7119 12.5518C62.0127 12.0505 62.2777 11.5026 62.5068 10.9082C62.7432 10.3138 62.958 9.50456 63.1514 8.48047C63.3447 7.44922 63.4414 6.36068 63.4414 5.21484V0.595703H73.4531V13.7979H75.3223V19.2979H72.8945V16H62.335V19.2979H59.918V13.7979ZM65.8584 5.21484C65.8584 6.36068 65.7653 7.44206 65.5791 8.45898C65.4001 9.46875 65.1816 10.2852 64.9238 10.9082C64.666 11.5312 64.4082 12.0755 64.1504 12.541C63.8926 12.9993 63.6706 13.3252 63.4844 13.5186L63.2158 13.7979H71.0254V2.79785H65.8584V5.21484ZM91.2744 16H88.8574V4.89258L80.2744 16H78.1904V0.595703H80.6074V11.7139L89.1904 0.595703H91.2744V16ZM102.274 16H95.6787V0.595703H101.941C103.188 0.595703 104.251 1.00749 105.132 1.83105C106.013 2.65462 106.453 3.59993 106.453 4.66699C106.453 5.28288 106.324 5.84863 106.066 6.36426C105.816 6.87988 105.565 7.23796 105.314 7.43848L104.917 7.75C104.974 7.77865 105.053 7.82878 105.153 7.90039C105.261 7.96484 105.451 8.11165 105.723 8.34082C105.995 8.56283 106.228 8.8099 106.421 9.08203C106.621 9.35417 106.804 9.70866 106.969 10.1455C107.141 10.5752 107.227 11.0228 107.227 11.4883C107.227 12.7201 106.754 13.7799 105.809 14.668C104.863 15.556 103.685 16 102.274 16ZM98.0957 13.9053H102.274C102.991 13.9053 103.592 13.6654 104.079 13.1855C104.566 12.6986 104.81 12.097 104.81 11.3809C104.81 10.6647 104.566 10.0632 104.079 9.57617C103.599 9.08919 102.998 8.8457 102.274 8.8457H98.0957V13.9053ZM101.941 2.69043H98.0957V6.86914H101.941C102.543 6.86914 103.041 6.6722 103.435 6.27832C103.836 5.87728 104.036 5.37956 104.036 4.78516C104.036 4.18359 103.836 3.68587 103.435 3.29199C103.041 2.89095 102.543 2.69043 101.941 2.69043ZM108.526 16L114.907 0.595703H117.324L123.705 16H121.181L119.526 11.9287H112.705L111.051 16H108.526ZM116.121 3.3457L113.586 9.72656H118.646L116.121 3.3457ZM138.787 0.595703V16H136.37V9.28613H128.775V16H126.358V0.595703H128.775V7.09473H136.37V0.595703H138.787Z"
                              fill="#F8C16E"/>
                    </svg>
                </RouterLink>
                <ul class="flex-start middle header__menu">
                    <li>
                        <RouterLink to="/about">О компании</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/service">Сервис и условия</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/casing">Каталог обивок</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about/addresses">Шоурум</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about/sales">Акции</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about/contacts">Контакты</RouterLink>
                    </li>
                    <li class="header__menu__basket">
                        <RouterLink class="flex-start" to="/basket">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                 fill="none">
                                <rect width="26" height="26" fill="#E5E5E5"/>
                                <g clip-path="url(#clip0)">
                                    <rect width="1920" height="6414" transform="translate(-1491 -65)" fill="white"/>
                                    <mask id="path-1-inside-1" fill="white">
                                        <path d="M0.108316 4.55013C0.216633 4.44181 0.324999 4.33345 0.541632 4.33345H21.125L21.6667 1.51681C21.6667 1.30013 21.9917 1.0835 22.2084 1.0835H25.4584C25.7833 1.08345 26 1.30013 26 1.62513C26 1.95013 25.7833 2.16681 25.4583 2.16681H22.6416L20.0416 15.3835C19.7166 17.1168 18.0916 18.4168 16.3583 18.4168H3.9C3.575 18.4168 3.35832 18.2001 3.35832 17.8751C3.35832 17.5501 3.575 17.3334 3.9 17.3334H16.25C17.1167 17.3334 17.9833 16.9001 18.4167 16.1418L2.6 13.9751C2.38332 13.9751 2.16668 13.7584 2.16668 13.5418L0 4.87513C0 4.87513 0 4.65845 0.108316 4.55013ZM3.14168 13.0001L18.9584 15.0584L20.9084 5.30845H1.3L3.14168 13.0001Z"/>
                                    </mask>
                                    <path class="basket-svg"
                                          d="M0.108316 4.55013C0.216633 4.44181 0.324999 4.33345 0.541632 4.33345H21.125L21.6667 1.51681C21.6667 1.30013 21.9917 1.0835 22.2084 1.0835H25.4584C25.7833 1.08345 26 1.30013 26 1.62513C26 1.95013 25.7833 2.16681 25.4583 2.16681H22.6416L20.0416 15.3835C19.7166 17.1168 18.0916 18.4168 16.3583 18.4168H3.9C3.575 18.4168 3.35832 18.2001 3.35832 17.8751C3.35832 17.5501 3.575 17.3334 3.9 17.3334H16.25C17.1167 17.3334 17.9833 16.9001 18.4167 16.1418L2.6 13.9751C2.38332 13.9751 2.16668 13.7584 2.16668 13.5418L0 4.87513C0 4.87513 0 4.65845 0.108316 4.55013ZM3.14168 13.0001L18.9584 15.0584L20.9084 5.30845H1.3L3.14168 13.0001Z"
                                          fill="white" stroke="#BBC6C6" stroke-width="2" mask="url(#path-1-inside-1)"/>
                                    <mask id="path-2-inside-2" fill="white">
                                        <path d="M16.7917 19.5C18.3083 19.5 19.5 20.6917 19.5 22.2083C19.5 23.725 18.3083 24.9166 16.7917 24.9166C15.275 24.9166 14.0834 23.7249 14.0834 22.2083C14.0833 20.6917 15.275 19.5 16.7917 19.5ZM16.7917 23.8333C17.6584 23.8333 18.4167 23.0749 18.4167 22.2083C18.4167 21.3417 17.6584 20.5833 16.7917 20.5833C15.925 20.5833 15.1667 21.3417 15.1667 22.2083C15.1667 23.0749 15.925 23.8333 16.7917 23.8333Z"/>
                                    </mask>
                                    <path class="basket-svg"
                                          d="M16.7917 19.5C18.3083 19.5 19.5 20.6917 19.5 22.2083C19.5 23.725 18.3083 24.9166 16.7917 24.9166C15.275 24.9166 14.0834 23.7249 14.0834 22.2083C14.0833 20.6917 15.275 19.5 16.7917 19.5ZM16.7917 23.8333C17.6584 23.8333 18.4167 23.0749 18.4167 22.2083C18.4167 21.3417 17.6584 20.5833 16.7917 20.5833C15.925 20.5833 15.1667 21.3417 15.1667 22.2083C15.1667 23.0749 15.925 23.8333 16.7917 23.8333Z"
                                          fill="white" stroke="#BBC6C6" stroke-width="2" mask="url(#path-2-inside-2)"/>
                                    <mask id="path-3-inside-3" fill="white">
                                        <path d="M5.95831 19.5C7.47499 19.5 8.66663 20.6917 8.66663 22.2083C8.66663 23.725 7.47494 24.9166 5.95831 24.9166C4.44163 24.9166 3.25 23.7249 3.25 22.2083C3.25 20.6917 4.44168 19.5 5.95831 19.5ZM5.95831 23.8333C6.825 23.8333 7.58331 23.0749 7.58331 22.2083C7.58331 21.3417 6.825 20.5833 5.95831 20.5833C5.09163 20.5833 4.33331 21.3417 4.33331 22.2083C4.33331 23.0749 5.09168 23.8333 5.95831 23.8333Z"/>
                                    </mask>
                                    <path class="basket-svg"
                                          d="M5.95831 19.5C7.47499 19.5 8.66663 20.6917 8.66663 22.2083C8.66663 23.725 7.47494 24.9166 5.95831 24.9166C4.44163 24.9166 3.25 23.7249 3.25 22.2083C3.25 20.6917 4.44168 19.5 5.95831 19.5ZM5.95831 23.8333C6.825 23.8333 7.58331 23.0749 7.58331 22.2083C7.58331 21.3417 6.825 20.5833 5.95831 20.5833C5.09163 20.5833 4.33331 21.3417 4.33331 22.2083C4.33331 23.0749 5.09168 23.8333 5.95831 23.8333Z"
                                          fill="#754B4B" stroke="#BBC6C6" stroke-width="2"
                                          mask="url(#path-3-inside-3)"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="1920" height="6414" fill="white" transform="translate(-1491 -65)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{{total_items}}</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </header>

        <nav class="top-nav" v-if="categories">
            <div class="container flex-between nav__flex">
                <li
                        v-for="(link, index1) in categories"
                        :key="index1"
                        @mouseover="showSubmenu(link, index1)"
                        @mouseleave="hideSubmenu(link)"
                        @click="hideSubmenuImmediatly(link)"
                >
                    <RouterLink :to="`/catalog/${link.slug}`">{{link.name}}</RouterLink>
                    <div v-if="link.submenu_active && link.children" class="submenu">
                        <div class="container flex-start">
                            <div class="submenu-flex-item submenu-category flex-between"
                                 v-for="(sublink, index2) in submenuBig(link.children)"
                                 :key="index2">
                                <ul class="submenu-category-links">
                                    <li class="submenu-link-header">
                                        <RouterLink :to="`/catalog/${sublink.slug}`">{{sublink.name}}</RouterLink>
                                    </li>
                                    <li class="submenu-link-li" v-for="(category, index3) in sublink.children"
                                        :key="index3">
                                        <RouterLink :to="`/catalog/${category.slug}`">{{category.name}}</RouterLink>
                                    </li>
                                </ul>
                                <ul class="submenu-category-links">
                                    <li class="submenu-header">
                                        Механизм <br>трансформации
                                    </li>
                                    <li class="submenu-link-li" v-for="(category, index3) in sublink.mechanisms"
                                        :key="index3">
                                        <RouterLink :to="`/catalog/${sublink.slug}?mechanism=${category.mechanism.id}`">{{category.mechanism.name}}</RouterLink>
                                    </li>
                                </ul>
                            </div>
                            <div v-if="submenuSmall(link.children).length" class="submenu-flex-item submenu-item-small">
                                <ul class="submenu-category-links"
                                    v-for="(sublink, index2) in submenuSmall(link.children)"
                                    :key="index2">
                                    <li class="submenu-link-header">
                                        <RouterLink :to="`/catalog/${sublink.slug}`">{{sublink.name}}</RouterLink>
                                    </li>
                                    <li class="submenu-link-li" v-for="(category, index3) in sublink.children"
                                        :key="index3">
                                        <RouterLink :to="`/catalog/${category.slug}`">{{category.name}}</RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Header",
        props: ['categories', 'city'],
        data: () => ({
            timer: null,
            menu: []
        }),
        computed: mapGetters(['total_items', 'contacts']),
        methods: {
            showSubmenu(menu, index) {
                clearTimeout(this.timer)
                this.menu.forEach((item, idx) => {
                    idx != index ? item.submenu_active = false : null
                })
                menu.submenu_active = true
            },
            hideSubmenu(menu) {
                this.timer = setTimeout(() => {
                    menu.submenu_active = false
                }, 500)
            },
            hideSubmenuImmediatly(menu) {
                menu.submenu_active = false
            },
            submenuBig(menu) {
                return menu.filter(item => item.mechanisms.length)
            },
            submenuSmall(menu) {
                return menu.filter(item => !item.mechanisms.length)
            }
        }
    }
</script>

<style scoped>

</style>