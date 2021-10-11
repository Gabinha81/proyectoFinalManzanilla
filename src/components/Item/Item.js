import { Link } from 'react-router-dom';
import './item.css';


const Item = ({item: { id, title, description, pictureUrl,category }}) => {
    return(
        <div className="caja">
            <img src={pictureUrl} alt={id} width="340" />
            <h3>{title}</h3>
            <strong>{category}</strong>
            <p>{description}</p>
            <Link to={`/item/${id}`}> <button>VER MAS</button> </Link>   
        </div>
    )
    
}
export default Item;