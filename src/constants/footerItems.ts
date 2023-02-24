const discover  = require('../assets/img/footer/discover@2x.png');
const geolocation = require('../assets/img/footer/location@2x.png');
const cart = require('../assets/img/footer/cart@2x.png');
const favorite = require('../assets/img/footer/favorites@2x.png');
const mine = require('../assets/img/footer/notif@2x.png');

const discover_active  = require('../assets/img/footer/discover_active@2x.png');
const geolocation_active = require('../assets/img/footer/location_active@2x.png');
const cart_active = require('../assets/img/footer/cart_active@2x.png');
const favorite_active = require('../assets/img/footer/favorites_active@2x.png');
const mine_active = require('../assets/img/footer/notif_active@2x.png');

export const FOOTER_ITEMS = [
    {
        item:"discover",
        img: discover,
        img_active: discover_active,
    },
    {
        item: "location",
        img: geolocation,
        img_active: geolocation_active,
    },
    {
        item: "cart",
        img: cart,
        img_active: cart_active,
    },
    {
        item: "favorite",
        img: favorite,
        img_active: favorite_active,
    },
    {
        item: "mine",
        img: mine,
        img_active: mine_active,
    }
]