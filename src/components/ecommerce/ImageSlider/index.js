import { useEffect, useState } from "react";

function ImageSlider({ width, height }) {
    //fetch
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    //position
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchImages = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10`)
            const data = await response.json();
            setImages(data);
            setIsLoading(false)
        } catch (e) {
            setError('Fail to load data')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchImages();
        return () => { fetchImages() }
    }, [])

    const handleClickPrevious = (e) => {
        e.preventDefault();
        let index = (currentIndex === 0) ? (images.length - 1) : (currentIndex - 1);
        setCurrentIndex(index)
    }

    const handleClickNext = (e) => {
        e.preventDefault();
        let index = (currentIndex === images.length - 1) ? 0 : (currentIndex + 1);
        setCurrentIndex(index)
    }
    const renderImage = () => {
        let image = images[currentIndex];
        return (
            <div></div>
        )
    }
    const renderIndicator = () => {

    }

    if (error) return <h1>{error}</h1>
    if (isLoading) return <h1>...Loading data</h1>

    return (
        <>
            <div>image slider</div>
            <div class="container">
                <div class="image-container" style={`width:${width}; height:${height} `}>
                    <button class="arrow arrow-left" onClick={handleClickPrevious}>
                        <span> - </span>
                    </button>
                    <div class="current-images">
                        {renderImage()}
                    </div>
                    <button class="arrow arrow-right" onClick={handleClickNext}>
                        <span>+</span>
                    </button>
                    <div class="button-indicators">
                        {renderIndicator()}
                    </div>
                </div>

            </div>
        </>
    )

}

export default ImageSlider;