import {IMG_CDN_URL} from '../../utils/constants';

export const ProflieCard = ({profile, character, original_name}) => {
  return ( profile &&
    <div className='cursor-pointer p-1'>
        <img className='rounded-lg object-cover' src={IMG_CDN_URL + profile} alt='poster'/>
        <div className='text-white py-1 text-xs mx-1'>
        <p>{character}</p>
        <p className='text-gray-500 pt-1 text-xs'>{original_name}</p>
        </div>
    </div>
  )
}
