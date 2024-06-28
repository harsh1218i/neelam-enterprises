import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import WebsiteCover from "../components/websiteCover/websiteCover";
import ContactUsForm from "../components/contactUsForm/contactUsForm";

export default function ContactUsPage() {
    return (
        <>
            <Header></Header>
            <WebsiteCover comingFrom="contact-us"></WebsiteCover>
            <div>
                <div className="flex justify-center items-center flex-col md:flex-row my-10 xl:mx-20 lg:mx-10 mx-5 py-10 xl:px-20 lg:px-10 px-5">
                    <div className="md:basis-1/3">
                        <h2>Join Us</h2>
                        <p>ABC is actively seeking new opportunities. We’d love to hear from you.</p>
                        <h2>Address</h2>
                        <p>133 Pearl Street, Suite 300 <br/>Boston, MA 02110 <br/>
                        <a href="https://maps.app.goo.gl/R3NK78yeTTReqcAF9" target="blank">Directions</a>
                        </p>
                        <h2>Phone</h2>
                        <p>Phone No: <a href="tel:+917415939251">+91-7415939251</a></p>
                        <p>Phone No: <a href="tel:+917415939251">+91-7415939251</a></p>
                        <h2>Email</h2>
                        <p><a href="mailto:chauhanharshvardhansingh4@gmail.com">chauhanharshvardhansingh4@gmail.com</a></p>
                    </div>
                    <div className="flex w-full flex-col md:ml-5 md:basis-2/3">
                        <ContactUsForm></ContactUsForm>
                        {/* <span><input size={40} maxLength={80} aria-required="true" aria-invalid="false" placeholder="Name*" type="text" name="Name"/></span>
                        <span><input size={40} maxLength={80} aria-required="true" aria-invalid="false" placeholder="Email*" type="text" name="Name"/></span>
                        <span><input size={40} maxLength={80} aria-required="true" aria-invalid="false" placeholder="Phone*" type="text" name="Name"/></span>
                        <span><input size={40} maxLength={80} aria-required="true" aria-invalid="false" placeholder="Your Message*" type="text" name="Name"/></span>
                        <input size={40} maxLength={80} aria-required="true" aria-invalid="false" placeholder="Your Message*" type="submit" name="Name"/> */}
                    </div>
                    {/* <ContactUsForm></ContactUsForm> */}
                </div>
            </div>
            <CompanyInfo></CompanyInfo>
            <Footer></Footer>
        </>
    );
}