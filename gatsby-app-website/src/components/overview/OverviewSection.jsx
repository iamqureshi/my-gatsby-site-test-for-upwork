import * as React from "react";

const OverviewSection = () => {
    const list = [
        {
            icon: "teer.png",
            title: "Overview",
        },
        {
            icon: "handshake.png",
            title: "Get Debt Help",
        },
        {
            icon: "consolidation.png",
            title: "Debt Consolidation",
        },
        {
            icon: "debt.png",
            title: "Debt Settlement",
        },
    ];

    return (
        <div className="overview-border">
            <div className="container py-20">
                <div className="flex overview-cards justify-between">
                    {list.map((item) => (
                        <div key={item.title} className="overview-section item-center">
                            <div>
                                <img
                                    src={`/assets/${item.icon}`}
                                    alt={item.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="overview-section-text">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;
