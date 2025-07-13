import {IMG_CDN_URL} from '../../utils/constants';

export const MovieCard = ({poster}) => {
  return ( poster &&
    <div className=' cursor-pointer transition-all duration-300 ease-in-out md:hover:p-0 p-1'>
        <img className='rounded-lg ' src={IMG_CDN_URL + poster} alt='poster'/>
    </div>
  )
}
