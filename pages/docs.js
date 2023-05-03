import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Button } from 'flowbite-react'

const docs = () => {
  return (
    <div>
      <div className="pup_text px-2 py-2 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-10 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
            Practical Report and Presentation Templates
          </h2>
          <p className="max-w-3xl mt-3  leading-6 text-indigo-200">
            Welcome to the practical report and presentation templates page! This page is designed to provide VPPCOE professors and students with a variety of templates to help them create professional and effective reports and presentations. We understand that academic projects can be time-consuming and challenging, which is why we've curated this collection of templates to make the process easier and more efficient for you.
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <a href="http://0.0.0.0:8055/admin/login" target="_blank">
              <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400" >
                LOGIN TO CollabTrack
              </button>
            </a>
          </div>
          <p className="mt-3 text-sm leading-5 text-indigo-200">

          </p>
          <p className="text-sm leading-5 text-indigo-200">
            To access CollabTrack, click on the button below and you will be redirected to the login page. If you don't have an account yet, you can create one by contacting the VPPCOE IT department. Once you log in, you will have access to all the features and tools that CollabTrack has to offer.
          </p>
        </div>
      </div>
      <section className={styles.section}>

        <div className={styles.doc_card_container}>
          <div id='color_cards' className={styles.color_card}>
            <Image src='./word_240.svg' width='300' height='280' />
            <a className="flex items-center justify-end">
              <button className="flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
              </button>
            </a>
          </div>


          <div id='color_cards' className={styles.color_card}>
            <Image src='./ppt_240.svg' width='300' height='280' />
            <a className="flex items-center justify-end">
              <button className="flex bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
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