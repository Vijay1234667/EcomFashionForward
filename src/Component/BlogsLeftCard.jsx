import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import TelegramIcon from '@mui/icons-material/Telegram';



const BlogsLeftCard = ({ Blogcattitle, Image, Heading, Paragraph, Btn, Admin, Likes, Comments }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="row blog-row-cols flex-column-reverse flex-md-row mb-3">
                <div className="col-lg-6 col-md-6 inner">
                    <img src={Image} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className=''>
                        <h6 className='post-head-orange-heading mb-2'>{Blogcattitle}</h6>
                        <h5 className='md-mb-2 mb-0 one-leter-spacing text-capitalize same-line-height'>{Heading}</h5>
                        <ul className='d-flex align-items-baseline p-0 mb-1'>
                            <li className='secondary-color'>
                                {Admin}
                            </li>
                            <li className='ms-1 secondary-color'>
                                <Checkbox {...label} icon={<FavoriteBorder className='text-danger fs-5' />} checkedIcon={<Favorite />} />{Likes}
                            </li>
                            <li className='ms-3 secondary-color'>
                                <TelegramIcon className='fs-5 text-info' /> {Comments}

                            </li>
                        </ul>
                        <p className='text-paragraph'>{Paragraph}</p>
                        <div className='mb-2'>
                            <a href="/" className='btn bg-orange-same-btn'>{Btn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsLeftCard
