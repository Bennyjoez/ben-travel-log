export default function Location(props) {
    return (
        <div className="location">
            <img src={props.coverImg} alt="cover image" className="cover-image"/>
            <div className="aside">
                <div className="destination">
                    <i className="fa-solid fa-location-dot icon"></i>
                    <h2 className="country-name">{props.country}</h2>
                    <p><a href={props.link} target="_blank" className="link">View on google maps</a></p>
                </div>
                <h2 className="location-visited">{props.location}</h2>
                <p className="description">
                    {props.description}
                    <span >
                        <a href={props.more} target="_blank" className="learn-more">Learn more about {props.location}</a>
                    </span>
                </p>
            </div>
        </div>
    )
}