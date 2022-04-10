import React from "react";
import './SeasonDisplay.css'
import Timer from "./Timer";
const confinge = {
   summer: {text:'IS HEHR SUMMER',iconName:'sun'},
   winter:{text:'IS HEHR WINTER',iconName:'snowflake'}
}
const getSeason = (lat, month) => {
   if (month > 2 && month < 9) {
     return lat > 0 ? 'summer': 'winter'
   } else {
      return lat > 0 ? 'winter' : "summer"
  }
}

const SeasonDisplay = (props) => {
   const season = getSeason(props.lat, new Date().getMonth())
      
   const { text, iconName } = confinge[season]
   return (
      <div className={`season-display ${season}`} >
         <i className={`icone-left massive ${iconName} icon`} />
         <h1>{text}</h1>
          <Timer/>
         <i className={`icone-right massive ${iconName} icon`} />
      </div>
   );
};
export default SeasonDisplay;