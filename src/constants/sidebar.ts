import MyOrders from '../assets/img/icons/my_orders@2x.png';
import MyProfile from '../assets/img/icons/my_profile@2x.png';
import DeliveryAddress from '../assets/img/icons/delivery_address@2x.png';
import PaymentMethods from '../assets/img/icons/payment_methods@2x.png';
import ContactUs from '../assets/img/icons/contact_us@2x.png';
import Settings from '../assets/img/icons/settings_icon@2x.png';
import HelpAndFaqs from '../assets/img/icons/help_and_faqs@2x.png';
import { sidebarItemTypes } from '../dto/sidebarItems';


export const sidebarItems: sidebarItemTypes[] = [
    {
        item: "My Orders",
        imgSrc: MyOrders
    },
    {
        item: "My Profile",
        imgSrc: MyProfile
    },
    {
        item: "Delivery Address",
        imgSrc: DeliveryAddress
    },
    {
        item: "Payment Methods",
        imgSrc: PaymentMethods
    },
    {
        item: "Contact Us",
        imgSrc: ContactUs
    },
    {
        item: "Settings",
        imgSrc: Settings
    },
    {
        item: "Help And Faqs",
        imgSrc: HelpAndFaqs,
    }
]