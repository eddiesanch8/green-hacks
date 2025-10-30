import React from "react";
import '../styles/ResultCard.css'

function ResultCard({plant}) {

    return (
        <div className="cardParent  lighten-3">
            <div className="topSection">
                <div>                        
                    <p>Zone: {plant.growingZones}</p>
                </div>
                <div className="bookmark__div">                    
                    <i className="material-icons orange-text text-darken-2">bookmark</i>
                </div>
            </div>
            <div className="midSection">
                <div className="IMG">
                    {plant.icon}                
                </div>
                <div className="infoList">
                    <ul>
                        <li><p>Plant Name: {plant.name}({plant.scientificName})</p></li>
                        <li>Plant Type: {plant.type}</li>
                        <li>Season to Plant: {plant.season}</li>
                    </ul>
                </div>
            </div>
            <div className="description">Description: Full sun to partial shade; highly drought-tolerant once established. Plant in average to poor soil—rich soil encourages excessive foliage over flowers. Space 12-18 inches apart. Deadhead regularly to extend blooming. Minimal water needed except during extreme drought. Divide every 3-4 years.</div>
            <div className="description">Plant Care: {plant.care}</div>
            <div className="description">Fun Fact: {plant.funFact}</div>
        </div>
    )
}

export default ResultCard;