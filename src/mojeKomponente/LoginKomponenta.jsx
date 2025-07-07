import React, {useState} from 'react'

function LoginKomponenta() {

    const [ulogovan, setUlogovan] = useState(false);
    const [korisnickoIme, setKorisnickoIme] = useState('');
    const[sifra, setSifra] = useState('');


    const korisnici = [
        { korisnickoIme: 'markoMarkovic', sifra: '12345' },
        { korisnickoIme: 'anaAnic', sifra: '54321'},
        { korisnickoIme: 'PetarPetrovic', sifra: '123123' }
    ];

    function handleLogin(e) {
        e.preventDefault();
        const korisnik = korisnici.find(k => k.korisnickoIme === korisnickoIme && k.sifra === sifra);
        
        if (korisnik) {
            setUlogovan(true);
            setKorisnickoIme('');
            setSifra('');
            alert(`Dobrodošli, ${korisnik.korisnickoIme}!`);
        } else {
            alert('Neispravno korisničko ime ili šifra');
            

        }
    }


  return (
    <div>
        {ulogovan ? (
            <div>
                <h1>Dobrodošli!</h1>
                <button onClick={() => {setUlogovan(false)
                    alert('Uspešno ste se odjavili!');
                }}>Odjavi se</button>
            </div>
                ):(
            <div>
                <h1>Prijava</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="korisnik">Korisnik:</label>
            <input type="text" 
                    id="korisnik" 
                    value = {korisnickoIme}
                    onChange={(e) => setKorisnickoIme(e.target.value)}
                    required/>
            <br />

            <label htmlFor="sifra">Šifra:</label>
            <input type="password" 
            id="sifra"
            value = {sifra}
            onChange={(e) => setSifra(e.target.value)}
            required
             />

            <br />

            <button type="submit">Uloguj se</button>
        </form>
        </div>

                )}

    </div>
  )
}

export default LoginKomponenta