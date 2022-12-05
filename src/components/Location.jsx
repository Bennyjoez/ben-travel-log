export default function Location(props) {
    let gallery = props.gallery.map(item => {
        let id = item.id
        let image = item.image

        return(
            <img src={image} id={id} className="gallery-images" key={id}/>
        )
    })
    let navTags = props.gallery.map(item => {
        let id = `#${item.id}`
        return(
            // <a href={id} ></a>
            <a href={id}></a>
        )
    })
    
    return (
        <div className="tile">
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
            <div className="gallery">
                {gallery}
            </div>
            <div className="gallery-nav" >
                {navTags}
            </div>
        </div>
    )
}