function Pozdrav(props) {

    const { ime } = props; // Destrukturiranje objekta props
    const sad = new Date().toLocaleTimeString();
  return (
    <div>Pozdrav, {ime} 
        <br />
        Trenutno vrijeme: {sad}
        <br />
        <button onClick={() => alert(`Pozdrav, ${ime}!`)}>Klikni me</button>
       
    
    </div>
  )
}

export default Pozdrav