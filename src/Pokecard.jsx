import './Pokecard.css'

function Pokecard(props) {

  const PokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.props.id}.png`;
  
  return (
    <div className="card">
      <p><b>{props.props.name}</b></p>
      <img src={PokemonImage} alt={`Pokemon ${props.props.id}`} />
      <p><b>Type: </b>{props.props.type}</p>
      <p><b>EXP: </b>{props.props.base_experience}</p>
    </div>
  )
}

export default Pokecard
