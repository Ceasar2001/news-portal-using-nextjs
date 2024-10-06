import React from 'react'
import Image from 'next/image'
import bannerImg from "@/assets/banner.jpg"
import { Button } from './ui/button'


const Banner = () => {
  return (
    <section className='bg-gray-100 py-8'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-col-4 items-center gap-8 px-4 sm:px-6 lg:px-8 py-5'>
          <div className='w-full'>
            <Image
              src={bannerImg}
              alt="Picture of the author"
              placeholder='blur'
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
              {/* content */}
              <div className='flex flex-col space-y-4'>
                <h4 className="text-sm font-medium text-gray-900">Dying Light Beast</h4>
                <h2 className="text-3xl font-bold text-gray-900">Dying Light Beast uses advance unreal engine 5</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi blanditiis ipsam dolorem <br /> necessitatibus incidunt reiciendis expedita soluta dignissimos nam magnam?
                </p>

                <Button variant="default">Read more</Button>
              </div>
        </div>
    </section>
  )
}

export default Banner 