import {IMG_CDN_URL} from '../../utils/constants';

export const MovieCard = ({poster}) => {
  return ( poster &&
    <div className=' md:w-36  cursor-pointer transition-all duration-300 ease-in-out md:hover:w-40 ml-2 md:mx-0'>
        <img className='rounded-lg ' src={IMG_CDN_URL + poster} alt='poster'/>
    </div>
  )
}
