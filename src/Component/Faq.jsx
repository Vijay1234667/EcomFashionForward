import Accordion from 'react-bootstrap/Accordion';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import HomeNewslaterSection from './HomeNewslaterSection';

function FaqPage() {
    return (
        <>
            <BreadcrumbFixedTop Title="Frequently asked questions" Subtitle="Faq" />
            <section className="Faq-Section padding-all">
                <div className="container">
                    <section className="mb-xl-9 mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                                    <div className="text-center mb-5">
                                        <h2 className='font-h3'>Frequently asked questions</h2>
                                        <p className="mb-0 text-paragraph">
                                            Can’t find any answer for your question? <span className='d-md-block'>Ask our customer support</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                                    <div className='Accordion-Body-section'>
                                        <Accordion >
                                            <Accordion.Item eventKey="0" className='border-1 border-black'>
                                                <Accordion.Header className='Accordion-Question'>Is lunch provided free of cost ?</Accordion.Header>
                                                <Accordion.Body className='accordion-answer'>
                                                    Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.
                                                </Accordion.Body>
                                            </Accordion.Item >
                                            <Accordion.Item eventKey="1" className='border-0'>
                                                <Accordion.Header>Do you have 2 Bedroom suites ?</Accordion.Header>
                                                <Accordion.Body className='accordion-answer'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" className='border-0'>
                                                <Accordion.Header>Are Wi-Fi costs included in the price ?</Accordion.Header>
                                                <Accordion.Body className='accordion-answer'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3" className='border-0'>
                                                <Accordion.Header>Where can I reach you for support ?</Accordion.Header>
                                                <Accordion.Body className='accordion-answer'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4" className='border-0'>
                                                <Accordion.Header>What can I reach you for support ?</Accordion.Header>
                                                <Accordion.Body className='accordion-answer'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <HomeNewslaterSection />
        </>
    );
}
export default FaqPage;