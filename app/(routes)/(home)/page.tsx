"use client"
import "swiper/css"
import BannerImage from "@/public/svg/container_image.svg"
import Image from "next/image"

import { ArrowBackIcon } from "@chakra-ui/icons"
import {Swiper,SwiperSlide} from "swiper/react"
import { useEffect, useState,useRef} from "react"
import { IoIosArrowBack } from "react-icons/io";

interface BannerSlides{
    title : string,
    caption : string
}

const list_banner:BannerSlides[] = [
    {
        title:"Title Content 1",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate fuga vitae praesentium cupiditate itaque fugit quae nesciunt tempore dolorum ut tempora, suscipit dolor unde distinctio placeat delectus. Soluta, eos!"
    },
    {
        title:"Title Content 2",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate fuga vitae praesentium cupiditate itaque fugit quae nesciunt tempore dolorum ut tempora, suscipit dolor unde distinctio placeat delectus. Soluta, eos!"
    },
    {
        title:"Title Content 3",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate fuga vitae praesentium cupiditate itaque fugit quae nesciunt tempore dolorum ut tempora, suscipit dolor unde distinctio placeat delectus. Soluta, eos!"
    },
    {
        title:"Title Content 4",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate fuga vitae praesentium cupiditate itaque fugit quae nesciunt tempore dolorum ut tempora, suscipit dolor unde distinctio placeat delectus. Soluta, eos!"
    }
]

const SlideItem = ({item,indexSelected,index}:{item:BannerSlides,indexSelected:number,index:number})=>{
    
    return (<div className="inner_shadow items-center ring-[-1px_5px_15px_-10px_rgba(255,255,255,0.51)]-sm mx-auto h-fit flex rounded-[22px] md:pl-[60px] pl-[30px] bg-[#121130] justify-between ">
        <div></div>
        <div className="md:w-[500px] w-full flex z-[10] absolute flex-col items-start md:gap-y-[15px] gap-y-[5px]">
            <div style={{display:"grid",gridTemplateRows:(indexSelected == index?"1fr":"0fr"),opacity: (index == indexSelected?"1":"0")}} className="transition-all overflow-hidden duration-[1500ms] " >
                <span className="font-bold overflow-hidden md:text-[22px] text-[20px] text-orange-600">{item.title}</span>
            </div>
            <div className={"transition-all duration-[1500ms] overflow-hidden " + (index == indexSelected?"w-full":"w-0")}>
                <p className="md:text-gray-300 text-white md:text-[16px] text-[14px] md:w-[500px] w-[300px] overflow-hidden">{item.caption}</p>
            </div>
            
        </div>
        <div className="transition-all duration-[1500ms]" style={{opacity:(index == indexSelected?"0.6":"0")}}>
            <BannerImage />
        </div>
        
    </div>)
}

export default function Home(){
    const swiperRef:Swiper = useRef()
    const [PageIndex,SetPageIndex] = useState(0)
    return (
        <div className="h-full w-full flex items-center justify-center bg-[#121130]">
            <div className="container mx-auto gap-y-[20px] lg:px-[100px] md:px-[60px] sm:px-[40px] px-[20px] flex flex-col items-center">
                <div className="flex w-full group flex-row items-center gap-x-[10px]">
                    <IoIosArrowBack onClick={()=>{swiperRef.current.slidePrev()}} className="group-hover:opacity-[1] md:block hidden opacity-0 transition-all ml-[10px] hover:ml-[0px] hover:mr-[10px]"/>
                    <Swiper
                        className="mySwiper w-full"  
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true} onSlideChange={(index)=>{SetPageIndex(index.realIndex)}} onSwiper={(swiper)=>{swiperRef.current = swiper}}
                    >
                        {list_banner.map((item,index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    <SlideItem indexSelected={PageIndex} item={item} index={index} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <IoIosArrowBack  onClick={()=>{swiperRef.current.slideNext()}} className="group-hover:opacity-[1] opacity-0 md:block hidden transition-all rotate-180 mr-[10px] hover:mr-[0px] hover:ml-[10px]"/>   
                </div>
                <div className="flex items-center flex-row gap-x-[10px] ">
                    {
                        list_banner.map((item,index)=>{
                            return <div key={index + list_banner.length} className={"rotate-45 w-[10px] inner_shadow_pg h-[10px] transition-all " + (index == PageIndex ? "bg-orange-600":"bg-transparent")} ></div>
                        })
                    }
                    
                </div>

            </div>
            
        </div>
    )
}