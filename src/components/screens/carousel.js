import CarouselBootstrap from 'react-bootstrap/Carousel'
import BedBike from '../../assets/img/bed_bike.jpg'
import fieldHouse from '../../assets/img/fieldHouse_Chicago.jpg'
import freeHand from  '../../assets/img/freehand_florida.jpeg'
import generatorCopenhagen from '../../assets/img/generator_copenhagen.jpg'
import wiredJapan from '../../assets/img/wired_japan.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'

const Carousel = () => {
    return (
        <CarouselBootstrap>
            <CarouselBootstrap.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={BedBike}
                    alt="First slide"
                    height={600}
                    style={{objectFit:'cover'}}
                />
                <CarouselBootstrap.Caption>
                <h3>Bed & Bike, Willemstad, Curaçao</h3>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={1000}>
                <img
                className="d-block w-100"
                src={fieldHouse}
                alt="Second slide"
                height={600}
                style={{objectFit:'cover'}}
                />
                <CarouselBootstrap.Caption>
                <h3>FieldHouse Jones, Chicago</h3>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={1000}>
                <img
                className="d-block w-100"
                src={freeHand}
                alt="Third slide"
                height={600}

                style={{objectFit:'cover'}}
                />
                <CarouselBootstrap.Caption>
                <h3>Freehand, Miami Beach, Florida</h3>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={1000}>
                <img
                className="d-block w-100"
                src={generatorCopenhagen}
                alt="Fourth slide"
                height={600}

                style={{objectFit:'cover'}}
                />
                <CarouselBootstrap.Caption>
                <h3>Generator Hostel, Copenhagen</h3>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item interval={1000}>
                <img
                className="d-block w-100"
                src={wiredJapan}
                alt="Fifth slide"
                height={600}

                style={{objectFit:'cover'}}
                />
                <CarouselBootstrap.Caption>
                <h3>The Wired, Tokyo</h3>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
        </CarouselBootstrap>
    )
}
export default Carousel