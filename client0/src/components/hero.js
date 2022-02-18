import React, { useEffect, useState } from "react";
import '../index.css';


const Hero = () => {
    return (
<section className="u-clearfix u-image u-section-2" id="carousel_0e21">
<div class="position-relative pt-30 pt-md-31 pt-lg-31 position-relative overflow-hidden">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-7 col-md-9">
                <div class="text-center mb-0 mb-lg-24 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
                    <h1 class="font-size-20 mb-8 mt-5">Wanna stand out in the Developer Community ?</h1>
                    <p class="font-size-7 px-lg-10 mb-0 mb-lg-0">DevQuest lets you find events, network with developers and get hired! Best part? Its completely free.</p>
                    <div class="landing_input"><input type="email" class="form-control" placeholder="Enter your email" value="" /><button type="submit">Get early access</button></div>
                    <span ></span>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 col-xs-11">
                <div class="l3-hero-image-group w-100">
                    <div class="img-1 shadow-13 aos-init" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                        <img src="/_next/static/images/Desktop-crop-9c24066ce1b0385b4296d2f84c4d002b.webp" alt="" />
                        <div class="img-2">
                            <img
                                src="data:image/webp;base64,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"
                                alt="yellow shape with right fade"
                                data-aos="fade-right"
                                data-aos-delay="700"
                                data-aos-once="true"
                                data-aos-duration="1000"
                                class="aos-init"
                            />
                        </div>
                        <div class="img-3">
                            <img
                                src="data:image/webp;base64,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"
                                alt="image three with left fade"
                                data-aos="fade-left"
                                data-aos-delay="900"
                                data-aos-once="true"
                                data-aos-duration="1000"
                                class="aos-init aos-animate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
    );
};

export default Hero;