'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import IconLink from './IconLink'
import ContactForm from './ContactForm'

export const jacquard = localFont({ src: '../../public/fonts/Jacquard12-Regular.ttf' })

function Tooltip ({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`${className} rounded bg-white py-1 px-2`}>
      <p className='p-default !text-sm'>{text}</p>
    </div>
  )
}

export default function Footer ({
  id,
  className
}: {
  id?: string
  className?: string
}) {
  const email: string = 'henrymeach2@gmail.com'
  const [clicked, setClicked] = useState<boolean>(false)
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, []);

  const onCopy = async () => {
    await navigator.clipboard.writeText(email).then(() => {
      setClicked(true)
    })

    setTimeout(() => {
      setClicked(false)
    }, 3000)
  }

  return (
    <footer
      className={`${className} edge flex flex-col bg-gray-900 min-h-screen`}
      id={id}
    >
      <section className='my-10 space-y-7 flex-grow'>
        <div className='text-white'>
          <h2 className='h2-no-colour'>Contact Me</h2>

          <div className='p-no-colour text-white flex flex-wrap space-x-6 mb-6 md:max-w-[500px]'>
              <IconLink
                title='LinkedIn'
                href='https://www.linkedin.com/in/henry-meach-26245716b/'
                src='/logos/linkedin/InBug-White.png'
                className='text-orange-400 hover:text-orange-600'
              />
              <IconLink
                title='GitHub'
                href='https://www.github.com/henrymeach/'
                src='/logos/github/github-mark-white.png'
                className='text-orange-400 hover:text-orange-600'
              />
              <IconLink
                title='Resume'
                href='/documents/henry-meach-cv.pdf'
                src='/icons/pdf-white.svg'
                className='text-orange-400 hover:text-orange-600'
              />
            </div>

          <p className='p-no-colour'>
            My inbox is always open for opportunities, so feel free to reach
            out!
          </p>
        </div>

        <ContactForm />

        <div>
          <p className='p-no-colour text-white flex flex-wrap md:max-w-[500px]'>
            Or, feel free to send me an email at
            <button
              onClick={() => onCopy()}
              className='flex relative items-center space-x-1 cursor-pointer rounded hover:text-orange-600 text-orange-400 px-1 active:scale-98'
            >
              {clicked ? (
                <Tooltip
                  text='Copied!'
                  className='absolute left-1/2 -translate-x-1/2 bottom-[120%]'
                />
              ) : null}
              <span className='font-bold'>{email}</span>
              <Image
                src='/icons/copy.svg'
                alt='Copy email button'
                width={20}
                height={20}
              />
            </button>
            </p>
            <div>
            </div>
            
        </div>
      </section>

      <p
        className={`${jacquard.className} p-no-colour text-white !text-2xl flex justify-center mb-3`}
      >
        {`© ${year} — Henry Meach`}
      </p>
    </footer>
  )
}
