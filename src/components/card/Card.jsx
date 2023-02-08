
import './card.css'
const Card =({monster})=>{


    const{id,name,email}=monster
    return(
        <div className="card-container" key={id}>
        <img alt={`monsters ${name}`}
            src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <h4>userName:{monster.username}</h4>
        <p>{email}</p>

    </div>
    )
}

export default Card;