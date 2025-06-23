import React from 'react';
import { Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import HomeNewslaterSection from './HomeNewslaterSection';

import BlogsRightImg1 from './assets/BlogsRightImg1.jpg';
import BlogsRightImg2 from './assets/BlogsRightImg2.jpg';
import BlogsRightImg3 from './assets/BlogsRightImg3.jpg';
import BlogsRightImg4 from './assets/BlogsRightImg4.jpg';
import BlogsRightImg5 from './assets/BlogsRightImg5.jpg';
import BlogsRightImg6 from './assets/BlogsRightImg6.jpg';
import BlogsRightImg7 from './assets/BlogsRightImg7.jpg';
import BlogsRightImg8 from './assets/BlogsRightImg8.jpg';

const images = [
    { src: BlogsRightImg1, alt: 'Gallery Image 1' },
    { src: BlogsRightImg2, alt: 'Gallery Image 2' },
    { src: BlogsRightImg3, alt: 'Gallery Image 3' },
    { src: BlogsRightImg4, alt: 'Gallery Image 4' },
    { src: BlogsRightImg5, alt: 'Gallery Image 5' },
    { src: BlogsRightImg6, alt: 'Gallery Image 6' },
    { src: BlogsRightImg7, alt: 'Gallery Image 7' },
    { src: BlogsRightImg8, alt: 'Gallery Image 8' }
];

function GalleryPage() {
    return (
        <>
            <BreadcrumbFixedTop Title="Gallery" Subtitle="Gallery" />
            <section className="gallery pt-3">
                <Container>
                    <div className="row gallery-content">
                        {images.map((image, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
                                <a className="popup-view" href={image.src}>
                                    <img className="img-fluid rounded shadow-sm" src={image.src} alt={image.alt} />
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    );
}

export default GalleryPage;