import React from 'react'
import HomeBannerimg4 from "./assets/HomeBannerimg4.jpg"
import HomeBannerimg5 from "./assets/HomeBannerimg5.jpg"
import HomeBannerimg6 from "./assets/HomeBannerimg6.png"
import { Container } from 'react-bootstrap-v5'

const HomeBannerPage = () => {
    return (
        <>
            <section className='mb-5'>
                <Container >
                    <div className="row g-0 p-0 align-items-baseline">
                        <div className="col-lg-6 col-md-12 mb-md-3 mb-1">
                            <div className="row align-items-baseline g-0">
                                <div className="col-md-6 col-6">
                                    <div className='flashimagelight'>
                                        <img src={HomeBannerimg4} className='img-fluid' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className='flashimagelight'>
                                        <img src={HomeBannerimg5} className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg6} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default HomeBannerPage
