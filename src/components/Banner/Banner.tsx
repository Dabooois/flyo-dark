import BannerImage from '../../assets/images/illustration-intro.png';
import Button from '../Button/Button';
import BannerMobileCurve from '../../assets/images/bg-curvy-mobile.svg';
import BannerDesktopCurve from '../../assets/images/bg-curvy-desktop.svg';
{
  /* <div className='absolute bg-banner-image bg-banner-color md:bg-md-banner-image bg-bottom bg-no-repeat bg-contain'></div>; */
}
const Banner = () => {
  return (
    <section className=' relative max-w-full '>
      <div className='bg-banner-color pt-16  md:pb-16 '>
        <div className='mb-32 lg:mb-[20rem]'>
          <div className='relative container z-10  mb-16'>
            <img src={BannerImage} className='mx-auto' alt='banner image' />
          </div>
          <div className='relative '>
            <div className='container'>
              <h1 className='text-[2.2rem] md:text-[4rem] text-center font-bold  lg:max-w-[72rem] mx-auto relative  z-10  lg:px-0'>
                All your files in one secure location, accessible anywhere.
              </h1>
            </div>
            <img
              src={BannerMobileCurve}
              alt='Mobile banner curve'
              className='absolute z-[5] bottom-0 block md:hidden w-full'
            />
          </div>
          <div className=' flex flex-col gap-8 md:gap-24 pt-8 md:pt-24 bg-body-color md:bg-transparent'>
            <div className='container  z-30 '>
              <p className='text-center mx-auto md:px-6  text-[1.4rem] md:text-[2rem] leading-normal text-slate-300   lg:max-w-[72rem]'>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
            </div>

            <Button className='z-20 px-20'> Get Started</Button>
          </div>
        </div>
      </div>
      <img
        src={BannerDesktopCurve}
        alt='Desktop banner curve'
        className='absolute z-[5] bottom-0 md:block hidden w-full'
      />
    </section>
  );
};

export default Banner;
