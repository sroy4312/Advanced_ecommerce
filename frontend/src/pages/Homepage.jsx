import React from 'react';
import MainCarousel from '../components/MainCarousel';
import HomeSectionCarousel from '../components/HomeSectionCarousel';
import { mens_kurta } from "../data/men's_kurta";
import { mens_shoes } from "../data/men's_shoes";
import { mens_shirts } from "../data/men's_shirt";
import { womens_lehangas } from "../data/women\'s_lehangas";
import { womens_dress } from "../data/women\'s_dress";

const Homepage = () => {
  return (
    <div className='pt-7'>
        <MainCarousel />
        <div className='py-10 space-y-10 flex flex-col justify-center mx-5 lg:mx-10'>
            <HomeSectionCarousel sectionName={"Men's Kurta"} data={mens_kurta} />
            <HomeSectionCarousel sectionName={"Men's Shoes"} data={mens_shoes} />
            <HomeSectionCarousel sectionName={"Men's Shirt"} data={mens_shirts} />
            <HomeSectionCarousel sectionName={"Women's Lehanga"} data={womens_lehangas} />
            <HomeSectionCarousel sectionName={"Women's Dress"} data={womens_dress} />
        </div>
    </div>
  )
}

export default Homepage;