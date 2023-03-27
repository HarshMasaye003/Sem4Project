import React from 'react'
import styles from '@/styles/Home.module.css'

const about = () => {
  return (
    <div>
      <section className={styles.about_section}>
        <div className='flex justify-items-center'>
          <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                <p class="my-4">If you care for your time, I hands down would go with this."</p> */}
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="./logo_men.png" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Pranav Yamgekar</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Role: Backend developer</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p> */}
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="./logo_men.png" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Harsh Masaye</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Role: Frontend developer</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p> */}
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="./logo_women.png" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Meghna Gade</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Role: Backend & design</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p> */}
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="./logo_women.png" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Prerna Patil</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Role: Frontend & Documentation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

      </section>
    </div>
  )
}

export default about