import { FcLike } from "react-icons/fc";

const Card = ({course}) => {


    return(
        <div className="card">
            <div>
                <img className="card-img" src={course.image.url} alt={course.image.alt}></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>
            <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Card;