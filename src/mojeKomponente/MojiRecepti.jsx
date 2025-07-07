import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReceptKartica from './ReceptKartica';

function MojiRecepti() {
  const [recepti, setRecepti] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => {
        const jela = response.data.meals;
        if (jela) {
          setRecepti(jela);
        } else {
          setRecepti([]);
        }
      })
      .catch((error) => console.error("Greška pri dohvatanju jela:", error));
  }, []);

  return (
    <div className='recepti-grid'>
      

      {recepti.map((recept) => {
        // Generisanje sastojaka
        const sastojci = [];
        for (let i = 1; i <= 20; i++) {
          const sastojak = recept[`strIngredient${i}`];
          const kolicina = recept[`strMeasure${i}`];
          if (sastojak && sastojak.trim() !== "") {
            sastojci.push(`${kolicina ? kolicina : ""} ${sastojak}`);
          }
        }

        return (
          <ReceptKartica
            key={recept.idMeal}
            slika={recept.strMealThumb}
            naziv={recept.strMeal}
            opis={recept.strInstructions || "Opis nije dostupan."}
            kategorija={recept.strCategory}
            kuhinja={recept.strArea}
            youtube={recept.strYoutube}
            sastojci={sastojci}
          />
        );
      })}
    </div>
  );
}

export default MojiRecepti;
