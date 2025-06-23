

import b1img from './assets/b1img.jpg'
import b3img from './assets/b3img.jpg'
import b4img from './assets/b4img.jpg'

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import BlogsRightImg7 from './assets/BlogsRightImg7.jpg'
import BlogsRightImg10 from './assets/BlogsRightImg10.jpg'
import BlogsRightImg2 from './assets/BlogsRightImg2.jpg'
import BlogsRightImg4 from './assets/BlogsRightImg4.jpg'
import BlogsRightImg5 from './assets/BlogsRightImg5.jpg'
import BlogsRightImg9 from './assets/BlogsRightImg9.jpg'

import Blogsrightbottomsale from './assets/Blogsrightbottomsale.webp'
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import BlogsLeftCard from './BlogsLeftCard';
import BlogsRightCard from './BlogsRightCard';
import HomeNewslaterSection from './HomeNewslaterSection';
import { useProductContext } from './Context/ProductContext';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function BlogPage() {
    const { handleCategoryFilter } = useProductContext();
    return (
        <>
            <BreadcrumbFixedTop Title="Blogs" Subtitle="Blogs" />
            <section className="blog-section padding-all">
                <Container>
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogsLeftCard Blogcattitle="25 January 2018" Image={b1img} Heading="you how all this mistaken idea of denouncing pleasure and praising pain was born" Admin="Posted By :  Admin" Likes="5 Hits" Comments="10 Comment" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Blogcattitle="29 January 2018" Image={b3img} Heading="Barbeque Techniques Two Methods To Consider" Admin="Posted By :  Admin" Likes="5 Hits" Comments="10 Comment" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Blogcattitle="29 January 2018" Image={b4img} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Admin="Posted By :  Admin" Likes="5 Hits" Comments="10 Comment" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Blogcattitle="29 January 2018" Image={BlogsRightImg10} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Admin="Posted By :  Admin" Likes="5 Hits" Comments="10 Comment" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                        </div>

                        <div className="col-lg-4">
                            <div className="">
                                <div className="bg-red-bottom-arrow-btn">
                                    <a className='btn'>Latest Post</a>
                                    <span></span>
                                </div>
                                <BlogsRightCard Image={BlogsRightImg10} PostName="Home Design Here" Posttext="25 January 2018" Likes="5 Hits" />
                                <BlogsRightCard Image={BlogsRightImg2} PostName="Home Design Here" Posttext="25 January 2018" Likes="15 Hits" />
                                <BlogsRightCard Image={BlogsRightImg7} PostName="Home Design Here" Posttext="25 January 2018" Likes="17 Hits" />
                                <BlogsRightCard Image={BlogsRightImg4} PostName="Home Design Here" Posttext="25 January 2018" Likes="4 Hits" />
                                <BlogsRightCard Image={BlogsRightImg5} PostName="Home Design Here" Posttext="25 January 2018" Likes="3 Hits" />
                                <BlogsRightCard Image={BlogsRightImg9} PostName="Home Design Here" Posttext="25 January 2018" Likes="3 Hits" />

                                <div className="mb-0 md-mb-3 keepintouch">
                                    <div className=' latest-post'>
                                        <h4>KEEP IN TOUCH</h4>
                                        <span></span>
                                    </div>
                                    <div className='d-flex'>
                                        <ul className='p-0'>
                                            <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <FacebookIcon className='me-2 text-primary fs-4' />FACEBOOK
                                            </li>
                                           <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <InstagramIcon className='me-2 text-danger fs-4' />INSTAGRAM
                                            </li>
                                           <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <YouTubeIcon className='me-2 text-danger fs-4' />YOUTUBE
                                            </li>
                                        </ul>
                                        <ul>
                                       <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <TwitterIcon className='me-2 text-success rounded fs-4' />Twitter
                                            </li>
                                           <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <LinkedInIcon className='me-2 text-info fs-4' />LinkedIn
                                            </li>
                                           <li className='font-weight-500 font-size-14 text-uppercase mb-2'>
                                                <EmailIcon className='me-2 text-Success fs-4' />EMAIL
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-2 md-mb-0">
                                    <img src={Blogsrightbottomsale} className='img-fluid' alt="" />
                                </div>

                                <div className="popular-tags">
                                    <div className='latest-post mb-1 md-mb-4'>
                                        <h4 className='mb-3'>Popular Tags</h4>
                                        <span></span>
                                    </div>
                                    <ul className="p-0 mb-0">
                                        <li><a className="bg-orange-same-btn text-decoration-none" href="/">T-SHIRT</a></li>
                                        <li><a className="bg-orange-same-btn text-decoration-none" href="/">SHIRT</a></li>
                                        <li><NavLink className="bg-orange-same-btn text-decoration-none" onClick={() => handleCategoryFilter("Men")} to="/CategorySingle">MEN WEAR</NavLink></li>
                                        <li><NavLink className="bg-orange-same-btn text-decoration-none" onClick={() => handleCategoryFilter("Women")} to="/CategorySingle">WOMEN WEAR</NavLink></li>
                                        <li><NavLink className="bg-orange-same-btn text-decoration-none" onClick={() => handleCategoryFilter("Shoes")} to="/CategorySingle">SHOES</NavLink></li>
                                        <li><NavLink className="bg-orange-same-btn text-decoration-none" onClick={() => handleCategoryFilter("Bags")} to="/CategorySingle">BAGS</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    );
}
export default BlogPage;
