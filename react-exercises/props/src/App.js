import React from "react"
import Welcome from "./Welcome";

const App = () => {

    const styles = {
        style1: {
            backgroundColor: "green"
        }
    }
            const song = [
           {
               Title: "People Change",
               Artist: "Mipso",
               Information:"Chapel Hill Indie quartet",
               uniqueStyle:"title1"
           },
           {
                Title: "Hold Your Head Up High",
                Artist: "Darlingside",
                Information: "Boston based quartet",
                uniqueStyle: "title2"
           },
           {
                Title: "Silver Lining",
                Artist: "Mt. Joy",
                Information: "Philadelphia Indie Group",
                uniqueStyle:"title3"
           },
           {
                Title: "The Night We Met",
                Artist: "Lord Huron",
                Information: "LA based musician",
                uniqueStyle: "title4"
           },
           {
                Title: "My Arms Were Always Around You",
                Artist:"Peter Bradley Adams",
                Information:"Birmingham Alabama musician",
                uniqueStyle:"title5"
           },
           {
                Title: "Palace",
                Artist: "Matthew Hegarty",
                Information: "British singer/somgwriter",
                uniqueStyle:"title6"
           },
           {
                Title: "Arrows", 
                Artist: "Haux",
                Information:"London based singer/songwriter",
                uniqueStyle:"title7"
           },
           {
                Title: "Crack The Case",
                Artist: "Dawes",
                Information:"LA based American Folk band",
                uniqueStyle:"title8"
           },
           {
                Title: "Desdemona",
                Artist: "Andrea von Kampen",
                Information: "Decatur Georgia singer/songwriter",
                uniqueStyle:"title9"
           },
           {
                Title: "If You Need To Keep Time On Me",
                Artist:"Fleet Foxes",
                Information: "Seattle based Indie Folk band",
                uniqueStyle:"title10"
           }
            ]
            const mappedSongs = song.map((song, i) => {
               return(
                   <Welcome
                   key={song.Title +i}
                   Title={song.Title}
                   Artist={song.Artist}
                   information={song.Information}
                   uniqueStyle={song.uniqueStyle}/>
               ) 
            })
           return (
            <div>
                {mappedSongs}
            </div>
    );
}
export default App;
