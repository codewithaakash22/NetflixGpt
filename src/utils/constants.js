export const Profile_URL = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const BANNER = "https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg";
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_AUTH,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {identifier: 'en', name:'English'},
  {identifier:'hi', name:'Hindi'}
];


export const RESPONSIVE= {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 5,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 3,
            slidesToSlide: 1
        }
};