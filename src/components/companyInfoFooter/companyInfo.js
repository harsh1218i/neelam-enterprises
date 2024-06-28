// import { MapProvider } from "../../../providers/map-provider";
// import { MapComponent } from "./map";

export default function CompanyInfo() {
    return (
        <>
            <div>
                <div>
                    <span>Ashok Buildcon</span>
                </div>
                <div className="company-info">
                    <h4>Address</h4>
                    <div>
                        <span>BM-4</span>
                        <span>Deen Dayal Nagar</span>
                        <span>Gwalior - 474005</span>
                        <span>Madhya Pradesh</span>
                        <span><a href="https://maps.app.goo.gl/R3NK78yeTTReqcAF9" target="blank">Directions</a>
                            {/* <MapProvider>
                                <MapComponent />
                            </MapProvider> */}
                        </span>
                    </div>
                </div>
                <div className="company-info">
                    <h4>Contact Us</h4>
                </div>
                <div className="company-info">
                    <h4>Discover</h4>
                </div>
            </div>
        </>
    )
}