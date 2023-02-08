
import './cardList.css'
import Card from "../card/Card";
const CardList=({ monsters })=>  {
        // console.log(this.props);
        return (
            <div className="card-list">
                {
                    monsters.map((monster) => {
                       
                        return (<Card monster={monster}/>)
                    })
                }

            </div>
        )
    }

export default CardList;