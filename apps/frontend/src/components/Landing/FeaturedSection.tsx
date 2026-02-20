import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU6jA4ekrtkIBc6H_EiRMB0HrogRk_vloKpFnUsT07n7BoxO7_N5vjoV5wJ-H4b_RctsbwxY3_vlvPmCmWJkFY-HN-rLsKs8PEP8jPnouj2fbKNCwWl5EhcWZxK-K6t0l2nmwFVz7A1czkTaY0RD1-6GChrwlOqdWP0YAbYdwWnGPwCjlzHqy1nM6bQoYdDqt9oNH4_hPNFzI9zxKKzc0_-A7tzemBW1I1deU-tPbRzyqSygNKucV2Zcxhg9bK6q8zd6Z3nMo8UcQ",
        name: "Handcrafted Wool Overcoat",
        price: "$850.00",
        badge: "New"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJZ2fzrNhdFFxg5uXdHjvmY3zKap4Mti6p6S9KziQGdwi6B6aVSMzARD03lLCx6wqZL7wOYAbeh75ickkLHOtRpZUMPRyh4Yz43u-9ri4B5kB62VTe4k9fUqOwQ8hoShWY-0-RXMrQ6APWNndrmA1AfWjOHkbZgt9JkwzcaTENaUr_3sx2Ngkp3F5xJwroYaJZtD3Y6NevNv4Wdf8F1dNrJOfSBCaWEq03nVhEUTnIghIFxxCdwGAc_ZXyMBGN5q1fr4ezDATBKfg",
        name: "Silk Blouse",
        price: "$320.00",
        badge: "Essentials",
        badgeColor: "text-slate-400"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUpViAZr8WxMdSrO-Z--qa6D2P1Eyqk8Jk4CP6S7-CnOpH0mGLFkPgPpVr_GrlzstSbtyRTydvIJRX_HyBp62e5W_u9NBLsTEIk165-bt2-7dxUoDbna0MRPa3lLs1W4HxgoGskBFu_nuKLv3_DqVv_YY-GN61jI25gqOVDJ3c5Kf5Xl7W5kNYX3D_Thwx40ZC4J2Qhw_9xMNJ0B2bbGy5ahGUMsVwpEfuRRtArV1k09qrO201_OVjLBP4ZVgvjvf9ny16apsoXXM",
        name: "Italian Leather Tote",
        price: "$1,200.00",
        badge: "Limited",
        badgeColor: "text-slate-400"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmk0yzQqumLd08WHPyqDbxmm86lEcTgyUc6SPzyYzEDROTCmsJsfB9ETo44fK9mQ4SS-7QeF9okVAXnwkbhVdRXmcKpwSZ3o1s2jTRy5FzXJ7UPQ4OceZq7xeO5aXntDB3_G82sAQmNROp8WvNRtjselz9_dQyoZJeqHFpJWDhMgVEnpy2_xwIzSbDDF8R-jIFkwJtroZ1Mm7ZUc4WxHAa7CpqdYV460VNx2_axlzAB33PAsPRERmCZVq87BPAVf0UZgSGWoMVEkI",
        name: "Minimalist Watch",
        price: "$450.00",
        badge: "Accessories",
        badgeColor: "text-slate-400"
    }
];

const FeaturedSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20 gsap-reveal">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">Curated Essentials</h2>
                    <p className="text-slate-500 dark:text-slate-400">Our signature pieces, designed in our London studio and handcrafted using the finest ethically sourced materials.</p>
                </div>
                <a className="text-primary font-semibold flex items-center gap-2 group" href="#">
                    Explore all categories
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedSection;
