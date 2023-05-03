import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Button } from 'flowbite-react'

const docs = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.doc_card_container}>
          <div id='color_cards' className={styles.color_card}>
            <Image src='./word_240.svg' width='300' height='280' />
            <a className="flex items-center justify-end">
              <button class="flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
              </button>
            </a>
          </div>


          <div id='color_cards' className={styles.color_card}>
            <Image src='./ppt_240.svg' width='300' height='280' />
            <a className="flex items-center justify-end">
              <button class="flex bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                Button
              </button>
            </a>
          </div>
        </div >
      </section >
    </div >
  )
}

export default docs