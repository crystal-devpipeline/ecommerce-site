import coverImage from '../../images/clothing.jpg';

export default function Home() {
    return (
        <div className="hero-container">
            <h1>Welcome to Crystolivia!</h1>
            <div className="hero-image">
                <img src={coverImage} alt="clothing"/>
            </div>
        </div>
    )
}


