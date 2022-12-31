import coverImage from '../../images/cover-image.jpg';

export default function Home() {
    return (
        <div className="home-container">
            <div>
                <h1>hello from home</h1>
            </div>
                
            <div>
                <img src={coverImage} alt="clothing"/>
            </div>
        </div>
    )
}

// https:"//source.unsplash.com/random/?fashion"
