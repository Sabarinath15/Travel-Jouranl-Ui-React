import { FaMapMarkerAlt } from "react-icons/fa";


const Tile = (props) => {
    return (
        <div className="tile">
            <div className="img-con">
                <img src={`../images/${props.detail.imageUrl}`} alt="" />
            </div>
            <div className="info-con">
                <div className="top">
                    <p><span><FaMapMarkerAlt /></span>{props.detail.location}</p>
                    <a href={`${props.detail.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1>{props.detail.title}</h1>
                <p className="date">{`${props.detail.startDate} - ${props.detail.endDate}`}</p>
                <p>{props.detail.description}</p>
            </div>
        </div>
    );
}

export default Tile;