import { FcLike } from "react-icons/fc";

const Card = ({course}) => {


    return(
        <div className="card">
            <div>
                <img className="card-img" src={course.image.url} alt={course.image.alt}></img>
                <div className="like-btn-div">
                    <button className="like-btn">
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-content-header">{course.title}</h3>
                <p className="card-content-para">{course.description}</p>
            </div>
        </div>
    )
}

export default Card;