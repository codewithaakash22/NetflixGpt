import {IMG_CDN_URL} from '../utils/constants';

export const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-36 cursor-pointer transition-all duration-300 ease-in-out hover:w-40 '>
        <img className='rounded-lg ' src={IMG_CDN_URL + poster} alt='poster'/>
    </div>
  )
}
