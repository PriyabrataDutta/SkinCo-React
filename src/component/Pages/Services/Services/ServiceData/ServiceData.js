import React from "react"
import ServiceBanner from "./ServiceDataBanner.js/ServiceDataBanner"
import ServiceDataBody from "./ServiceDataBody/ServiceDataBody"

const ServiceData = (props) => {
    return(
        <div style={{background:"black"}}>
        <React.Fragment>
            
            <ServiceBanner/>
            <ServiceDataBody/>
        </React.Fragment>
        </div>
    )

}
export default ServiceData