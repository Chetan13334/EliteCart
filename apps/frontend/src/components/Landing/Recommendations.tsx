import React from 'react';

const recommendations = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYYvWdEPPi5Mknagym8pROC_mu472EXNJ7_SMtbrVGdpIyGVToD4_GmOOv7Lssv8n8nt5TBVeLUC74q2hocZy7IlmxWuFsfxpz4MJEjyNBYJdZ4TiEeOyAt2wis2WLLVI-O08YOVME0rRvqVJwxjXSLzV688TJY6hJ2HaxYWrJkOoUoynOGql3eTRds3Sccq0i8-ZlHBarW2hxNYSk10046yh0XHH-olI_Cr5IbmzlkmRIWbcbgA0Xp_BPqCTg4jhaGtDq4OR5FQM",
        name: "Chelsea Boots",
        price: "$210"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABYja7ujYBA1DKDjDZkAaMYC_cszKfD4S0Hrp1qxxzfCYgweE7hd9VD727iW3jZvVwql5oO_thF5HN3QNwVKjERkYJI1sA1Bgi0hB4nFOq5KLUn6uw_uxK9fFDG7_wLcTTPlYfck2dGMjxzNTeAL-UcHDlDdxM4ic70uBPpOtUimKqyP9sKm6M0rsX3GryXsXU_8HEtoHoxCGGexwRBVeroLWsDYC80KbeagEVKG3oiyQ0_nSRWoYfqCO1OzIOeNki2TUZ869dO0c",
        name: "Cashmere Scarf",
        price: "$180"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZWQE6OgZ7VpD-_7Q2dw2wH_k3x78KW3FA0zF-a7mfcOQQPp0A_MpAiSn7sQFSHCbO7c13jEsYS37Wi0aNYPcOYuDZ7WnN9pryjJFawKqDrz4sCIi41qTW88J1QnRP3fQHg1aHeW_aE3O4RAe4bvIXZJ1zuogkODygbKu5Rz56SvPUGMcaJQUJwJa2SNUHxHa-kW7Am_uLJ4GPdMgni-_6odM0OwkG675yblDpCGjfcK8d8aHmJuNDM0vDkJK8Tw43q9A2nfw_l6k",
        name: "Tailored Trousers",
        price: "$155"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATYTj6_xHCCTNYcU0rr8jP9O5fmpKgSws1p8zwyy1hX0h2iK_nsciBQsLP6S1_WYaTNJ0KoC_gYjPl8fXC_iswGQEQOUbZNuEwagq8Grl3f0kR2unyJfKsEevGfmEnzVcu_JISdUE0qQa8Yd4YBfAkuvJWDuxbdmASr2CO6EDwKvzBuTFTfWhBwJBWSoCaOAjJsgZ91Pz67xwKjyFcAKNeldSyIsuCRd1TNLJJwSv2UDK0S72EuuoFaOnTOIKALMupTpbQGO0fWQk",
        name: "Linen Shirt",
        price: "$89"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGWJ95HuMro_gYRGaQs3gWm1LD6iV0zdMoDsxY4Q_rF-oeXJrXFtO38i3i34G5-_rWSA_AwqE3cFWmcXE7onmWLAiNVN_NL-b_gMuhZ56rrfYA1kJS2cPr-xMjTbz6jSBhSGe0Z7glq8CjVTQTb_6aOCw843rz5I5r5De0KnzB-5dE7fR9B7iuPBuEZ1intvpdiYlFIPwu9ytvQ5jUTMwKY1OdI7qppJeht9BeweLjf2J4b1IOd5XqJjtVIjuS_Fp8Aa-6I2gSPqQ",
        name: "Raw Denim",
        price: "$120"
    }
];

const Recommendations = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24 gsap-reveal">
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
                <h2 className="text-xl font-medium text-slate-500 uppercase tracking-widest">Personalized for You</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {recommendations.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="aspect-square bg-white dark:bg-slate-800 rounded-lg overflow-hidden mb-3 border border-slate-200 dark:border-slate-800">
                            <img
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                        <h4 className="text-sm font-semibold truncate text-slate-900 dark:text-white">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recommendations;
