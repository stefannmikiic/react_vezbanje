import React from 'react'

const Brojac = () => {
    const [broj, setBroj] = React.useState(0);
    const povecajBroj = () => {
        setBroj(broj + 1);
    }
  return (
    <div>
        <h1>Brojač</h1>
        <p>Ovaj brojač je samo primjer kako se može koristiti React.</p>
        <p>Trenutna vrednost: {broj}</p>
        <button onClick={povecajBroj}>Povećaj broj</button>
    </div>
  )
}

export default Brojac