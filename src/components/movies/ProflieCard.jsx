import {IMG_CDN_URL} from '../../utils/constants';

export const ProflieCard = ({profile, character, original_name}) => {
  return ( profile &&
    <div className='cursor-pointer ml-2 md:mx-1'>
        <img className='rounded-lg w-40 h-50 object-cover' src={IMG_CDN_URL + profile} alt='poster'/>
        <div className='text-white py-2 text-sm mx-1'>
        <p>{character}</p>
        <p className='text-gray-500 pt-1'>{original_name}</p>
        </div>
    </div>
  )
}
