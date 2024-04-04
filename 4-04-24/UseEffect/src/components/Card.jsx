import "./Card.css"

const Card = (props) => {

    const{name, image, email, gender} = props

    return ( 
        <>
            <div className="card-wrap">
                <img src={image} alt="image from backend"></img>
                <div className="content-wrap">
                    <h1 className="card-name">{name}</h1>
                    <p className="card-email">{email}</p>
                    <p className="card-gender">{gender}</p>
                </div>
            </div>
        </>
     );
}
 
export default Card;