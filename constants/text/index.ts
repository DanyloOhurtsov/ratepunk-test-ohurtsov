import { NavBar_Links_types } from "../types";
import {
    Twitter,
    Facebook,
    TikTok,
    Instagram,
    LinkedIn,
    Voucher,
    CollectCoins,
    Invite,
} from "@/public";

export const NavBar_Links: NavBar_Links_types[] = [
    {
        id: 1,
        label: "Chrome Extension",
        url: "chrome-extension",
    },
    {
        id: 2,
        label: "Price Comparison",
        url: "price-comparison",
    },
    {
        id: 3,
        label: "Blog",
        url: "blog",
    },
];

export const Footer_QuickLinks = [
    {
        id: 1,
        label: "Price Comparison",
        url: "price-comparison",
    },
    {
        id: 2,
        label: "Chrome Extension",
        url: "chrome-extension",
    },
    {
        id: 3,
        label: "How It Works",
        url: "how-it-works",
    },
    {
        id: 4,
        label: "Ratepunk Blog",
        url: "blog",
    },
    {
        id: 5,
        label: "Privacy Policy",
        url: "privacy-policy",
    },
];

export const Footer_SocialLinks = [
    {
        id: 1,
        image: Instagram,
        url: "https://www.instagram.com/ratepunk/",
    },
    {
        id: 2,
        image: Facebook,
        url: "https://www.facebook.com/r8punk/",
    },
    {
        id: 3,
        image: LinkedIn,
        url: "https://www.linkedin.com/company/ratepunk/",
    },
    {
        id: 4,
        image: Twitter,
        url: "https://twitter.com/rate_punk",
    },
    {
        id: 5,
        image: TikTok,
        url: "https://www.tiktok.com/@ratepunk",
    },
];

export const Hero_Roadway = [
    {
        id: 1,
        label: "invite friends",
        description: "Refer friends with your unique referral link.",
        step: "Step 1",
        image: Invite,
    },
    {
        id: 2,
        label: "collect coins",
        description:
            "Get 1 coin for each friend that installs our extension using your referral link.",
        step: "Step 2",
        image: CollectCoins,
    },
    {
        id: 3,
        label: "get voucher",
        description:
            "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
        step: "Step 3",
        image: Voucher,
    },
];
