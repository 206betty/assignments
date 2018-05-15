import React from "react"
import Welcome from "./Welcome";

const App = () => {

    const styles = {
        style1: {
            backgroundColor: "green"
        }
    }
    return (
        <div>
           <Welcome Title= "People Change" Artist="Mipso" Information="Chapel Hill Indie quartet" uniqueStyle="title1"/>

           <Welcome Title= "Hold Your Head Up High" Artist="Darlingside" Information="Boston based quartet" uniqueStyle="title2"/>

           <Welcome Title= "Silver Lining" Artist="Mt. Joy" Information="Philadelphia Indie Group" uniqueStyle="title3"/>

           <Welcome Title= "The Night We Met" Artist="Lord Huron" Information="LA based musician" uniqueStyle="title4"/>

           <Welcome Title= "My Arms Were Always Around You" Artist="Peter Bradley Adams" Information="Birmingham Alabama musician" uniqueStyle="title5"/>

           <Welcome Title= "Palace" Artist="Matthew Hegarty" Information="British singer/somgwriter" uniqueStyle="title6"/>

           <Welcome Title= "Arrows" Artist="Haux" Information="London based singer/songwriter" uniqueStyle="title7"/>

           <Welcome Title= "Crack The Case" Artist="Dawes" Information="LA based American Folk band" uniqueStyle="title8"/>

           <Welcome Title= "Desdemona" Artist="Andrea von Kampen" Information="Decatur Georgia singer/songwriter" uniqueStyle="title9"/>

           <Welcome Title= "If You Need To Keep Time On Me" Artist="Fleet Foxes" Information="Seattle based Indie Folk band" uniqueStyle="title10"/>
        </div>
    )
}
export default App;
