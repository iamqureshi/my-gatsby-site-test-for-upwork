import * as React from "react"

const HeroSection = () => (
    <section className="hero-section">
        <div className="container">
            <div className="flex justify-between">
                <div className="left-section w-full flex-1">
                    <div className="navigation-section noto-rashi-hebrew pb-20 flex item-center">
                        <img src="assets/home.png" alt="home.png" />
                        <p>Finance &gt; Debt Management</p>
                    </div>
                    <h1 className="noto-rashi-hebrew left-section-title">Best Debt Settlement Companies</h1>
                    <p className="noto-rashi-hebrew left-section-p">We compared 25 brands and chose the top debt relief companies</p>
                    <div className="hero-btn flex-center">
                        <p className="noto-rashi-hebrew">Find my match</p>
                    </div>
                </div>
                <div className="right-section w-full">
                    <div className="image-container relative">
                        <img src="/assets/right-card-image-1.png" alt="right-card-image-1.png" className="image-one" />
                    </div>
                    <div className="absolute-container">
                        <div className="top-sec relative pb-15">
                            <div className="relative">
                                <img src="/assets/Rectangle5.png" alt="Rectangle5.png" />
                                <div className="absolute-base">
                                    <img src="/assets/Polygon1.png" alt="Rectangle5.png" />
                                </div>
                            </div>
                            <p className="top-choice">Top choice</p>
                        </div>
                        <div className="bottom-ca">
                            <div className="flex">
                                <div className="national-card mr-20 flex-center justify-center">
                                    <img src="/assets/logo-large1.png" alt="logo-large1.png" />
                                </div>
                                <div className="w-full">
                                    <p className="w-106 pb-5">National Debt Relief</p>
                                    <div className="review-card">
                                        <img src="/assets/Star1.png" alt="Star1.png" className="review-card-image" />
                                        <p className="review-card-p">4.9</p>
                                        <p className="review-card-number">(43,985)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
)

export default HeroSection
