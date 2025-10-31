import React from "react";
import './HightlightsDetails.css'

type HightlightsDetailsProps = {
    title: string,
    information: string
}

const HightlightsDetails: React.FC<HightlightsDetailsProps> = ({ title, information }) => {
    return(
        <main className="HightlightsDetails">
            <h2>{title}</h2>
            <h3>{information}</h3>
            <hr/>
        </main>
    )
}

export default HightlightsDetails