import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className={styles.section}>

        <div class="container m-auto flex px-5 py-24 items-center justify-center flex-col bg-black text-white">
          <Image class="lg:w-2/6 md:w-3/6 w-4/6 mb-10 object-cover object-center rounded" alt="hero" src="/./logo1.png" width='1000' height='50' />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-700">Microdosing synth tattooed vexillologist</h1>
            <p class="leading-relaxed mb-8">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div class="flex justify-center">
              <a href="http://0.0.0.0:8055/admin/login" target="_blank">
                <button class="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
