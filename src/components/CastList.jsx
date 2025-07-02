import { useSelector } from "react-redux";
import { ProflieCard } from "./ProflieCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RESPONSIVE } from "../utils/constants";

const CastList = () => {
const {credits} = useSelector((store)=>store.movies.selectedMovie);
const validCast = credits?.cast?.filter(cast => cast && cast.profile_path);

  return ( credits && 
    <div className="py-2 px-4 md:px-16 ">
        <h2 className='text-2xl font-semibold py-4 px-2 text-white'>Cast & Crew</h2>
         <Carousel
                        responsive={RESPONSIVE}
                        infinite={false}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                    >
         {  validCast.map((member)=> 
            <ProflieCard key={member?.id} profile={member?.profile_path} original_name={member?.original_name} character={member?.character}/>
            )
         }
        </Carousel>
    </div>
  )
}

export default CastList;