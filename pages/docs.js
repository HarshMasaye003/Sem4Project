import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Button } from 'flowbite-react'

const docs = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className="container px-5 py-24 sm:py-10 mx-auto">
          {/* <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1> */}
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div id='color_cards' className="h-full bg-gray-800 bg-opacity-10 p-8 rounded">
                {/* <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> */}
                <Image src='./word_240.svg' width='300' height='280' />
                <a className="inline-flex items-center">
                  <button class="flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Button
                  </button>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-10 p-8 rounded">
                {/* <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> */}
                <Image src='./ppt_240.svg' width='300' height='280' />
                <a className="inline-flex items-center">
                  <button class="flex bg-transparent hover:bg-orange-500 text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                    Button
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default docs