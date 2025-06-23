import React from 'react'

import { Container } from 'react-bootstrap-v5'
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const PrivacyPolicyPage = () => {
    return (
        <>
        <BreadcrumbFixedTop Title="Privacy Policy" Subtitle="Privacy Policy"/>
            <section className="Privacy-Policy-Section PrivacyAndTermsBody">
                <Container>
                    <div className="Privacy-Policy-Section-Body">
                        <div>
                            <p>
                                At VMart, json-server --watch db.json --port 3001 we value our users' trust in us and respect their privacy. We are committed to
                                protecting your information when you use our services. This Privacy Policy explains how and why
                                we collect, store, process and share your personal data when you visit or use VMart’
                                products and services (the “Services”).
                            </p>
                            <p>
                                At VMart, we value our users' trust in us and respect their privacy. We are committed to
                                protecting your information when you use our services. This Privacy Policy explains how and why
                                we collect, store, process and share your personal data when you visit or use VMart’
                                products and services (the “Services”).
                            </p>
                        </div>
                        <div>
                            <h5>Information We Collect</h5>
                            <p>When you use our Services, we collect different types of information about you. This information
                                may include, but is not limited to:</p>
                            <ul>
                                <li className="mb-2">
                                    Your name and contact details, such as your email address.
                                </li>
                                <li className="mb-2">
                                    Demographic information such as age, gender, etc.
                                </li>
                                <li className="mb-2">
                                    Technical data about the device/s you use to access our Services (including IP address,
                                    browser type and version, and operating system).
                                </li>
                                <li className="mb-2">
                                    Any preferences or settings that you have chosen in relation to our Services.
                                </li>
                                <li className="mb-2">
                                    Details of how you interact with our Services (e.g. page views, links clicked).
                                </li>
                                <li className="mb-2">
                                    We may also collect information from third-party sources, for example, if you use a
                                    third-party service like Facebook or Google to sign up for an account on VMart.
                                </li>
                                <li className="mb-2">
                                    If you have given us permission to do so, we may also collect additional information from
                                    other third-party sources.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Use of Your Data</h5>
                            <p>
                                We use the information we collect about you to provide our Services and for the purpose stated
                                in this Privacy Policy. Specifically, we use your data:
                            </p>
                            <ul>
                                <li className="mb-2">
                                    To personalise and improve your experience of our Services
                                </li>
                                <li className="mb-2">
                                    To provide customer support and troubleshooting
                                </li>
                                <li className="mb-2">
                                    To measure activity on our Services
                                </li>
                                <li className="mb-2">
                                    To understand how users interact with our services
                                </li>
                                <li className="mb-2">
                                    For marketing purposes (if you have opted for such communications)
                                </li>
                            </ul>
                            <p>
                                We may share your information with certain third parties in order to provide these services.
                                These third parties are required not to use or disclose your information other than in
                                accordance with this Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <h5>Storage and Security of Your Data</h5>
                            <p>
                                All data collected is stored securely on our servers, and we use industry-standard measures to
                                ensure that your data is protected from unauthorised access, loss or alteration. We will never
                                sell your personal data to any third parties.
                            </p>
                        </div>
                        <div>
                            <h5>Cookies</h5>
                            <p>
                                We use cookies on VMart to give you the best experience possible. Cookies are small pieces
                                of information which are stored by your browser on your device when you visit our website. We
                                may also use technologies such as web beacons, pixel tags, or local storage, which operate
                                similarly to cookies, in order to collect information about how you interact with our Services.
                                You can turn off cookies in your browser settings, but this may affect the functionality of our
                                Services.
                            </p>
                        </div>
                        <div>
                            <h5>Your Rights</h5>
                            <p>You have certain rights in relation to the personal data we hold about you. In particular, you
                                have the right to:
                            </p>
                            <ul>
                                <li className="mb-2">
                                    Access a copy of your personal data that we are processing.
                                </li>
                                <li className="mb-2">
                                    Request that we correct or delete any inaccurate or out-of-date information which we hold
                                    about you.
                                </li>
                                <li className="mb-2">
                                    Object to any processing based on our legitimate interests.
                                </li>
                                <li className="mb-2"> Withdraw your consent for us to process your personal data (if it was given).
                                </li>
                                <li className="mb-2"> Make a complaint to a supervisory authority such as the Information
                                    Commissioner's Office
                                    if you
                                    feel that we have not handled your personal data in accordance with applicable law.
                                </li>
                            </ul>
                            <p>To exercise any of these rights, please contact us at support@vmart.
                            </p>
                        </div>
                        <div>
                            <h5>Changes to this Privacy Policy</h5>
                            <p>We may change or update this Privacy Policy from time to time in order to reflect changes in the
                                law or our privacy practices. We encourage you to periodically review this page for the latest
                                information on our privacy practices. Your continued use of our Services will be subject to the
                                then-current version of this Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <h5>Contact Us Privacy Policy</h5>
                            <p>
                                If you have any questions about this Privacy Policy or how we handle your personal data, please
                                do not hesitate to contact us at support@vmart, and we will be more than happy to help.
                                You may contact the Information Commissioner's Office if you are an EU resident and wish to make
                                a complaint. Thank you for taking the time to read our Privacy Policy. We take your privacy very
                                seriously and want to ensure we handle your data responsibly. If you have any questions or
                                concerns, please do not hesitate to get in touch.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PrivacyPolicyPage
