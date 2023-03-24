import  'tw-elements';
import img1 from '../asset/carousel1.jpeg'
import img2 from '../asset/carousel2.jpeg'
import img3 from '../asset/carousel3.jpeg'


const Carousel = () => {
    return ( 
        <div
  id="carouselExampleControls"
  class="relative w-[60%]"
  data-te-carousel-init
  data-te-carousel-slide
  data-te-interval="5000">
    <div
    class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={img1}
        class="block w-full"
        alt="Wild Landscape" />
        <div
        class="absolute w-full bottom-0 hidden py-5 pb-10 text-center text-white md:block bg-main" >
        <h5 class="text-xl">DISKUSI KOLABORASI ANTARA PPTIK ITB, PUSTEKHAN ITB DAN PINDAD</h5>
        <p>
        16 FEB, 2023
        </p>
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={img2}
        class="block w-full"
        alt="Camera" />
        <div
        class="absolute w-full bottom-0 hidden py-5 pb-10 text-center text-white md:block bg-main" >
        <h5 class="text-xl">DISKUSI KOLABORASI ANTARA BPPTIK KEMENKOINFO</h5>
        <p>
        2 FEB, 2023 
        </p>
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={img3}
        class="block w-full"
        alt="Exotic Fruits" />
        <div
        class="absolute w-full bottom-0 hidden py-5 pb-10 text-center text-white md:block bg-main" >
        <h5 class="text-xl">PERTEMUAN PPTIK ITB DAN UBL</h5>
        <p>
        2 MAR, 2023
        </p>
      </div>
    </div>
  </div>
  <button
    class="absolute top-0 bottom-0 left-[-10px] z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-100 hover:outline-none focus:text-white focus:no-underline focus:opacity-100 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="prev">
    <span class="inline-block h-10 w-10 bg-main rounded-lg shadow-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <button
    class="absolute top-0 bottom-0 right-[-10px] z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-100 hover:outline-none focus:text-white focus:no-underline focus:opacity-100 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="next">
    <span class="inline-block h-10 w-10 bg-main rounded-lg shadow-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
     );
}
 
export default Carousel;