import React from 'react';
import SuperHero from './SuperHeros';
import data from './SuperHeros.json';

const App = () => {
  
    const sayCatchphrase = (catchPhrase) => {
      alert(catchPhrase)
    }

    const mappedHeros = data.SuperHeros.map((hero, i) => {
      return (
        <SuperHero 
          name={hero.name} 
          sayCatchphrase={sayCatchphrase} 
          catchPhrase={hero.catchPhrase}
          imgUrl={hero.imgUrl} 
          key={hero.name + i} />
      )
    })

    return (
      <div>
        { mappedHeros }
      </div>
    );
}

export default App;