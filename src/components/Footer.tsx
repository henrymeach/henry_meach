'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import { useState } from 'react'
import IconLink from './IconLink'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'

const jacquard = localFont({ src: '../../public/fonts/Jacquard12-Regular.ttf' })

function Tooltip ({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`${className} rounded bg-white py-1 px-2`}>
      <p className='p-default !text-sm'>{text}</p>
    </div>
  )
}

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Footer ({
  id,
  className
}: {
  id?: string
  className?: string
}) {
  const email: string = 'henrymeach2@gmail.com'
  const [clicked, setClicked] = useState<boolean>(false)
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onCopy = async () => {
    await navigator.clipboard.writeText(email).then(() => {
      setClicked(true)
    })

    setTimeout(() => {
      setClicked(false)
    }, 3000)
  }

  function onSubmit (data: FormData) {
    sendEmail(data);
  }

  return (
    <footer
      className={`${className} flex flex-col bg-gray-900 h-screen`}
      id={id}
    >
      <section className='my-10 space-y-7 flex-grow'>
        <div>
          <h2 className='h2-no-colour text-white'>Contact Me</h2>
          <p className='p-no-colour'>
            My inbox is always open for opportunities, so feel free to reach
            out!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} method='POST'>
          <div className='space-y-5 mb-5'>
            <div className='flex flex-row max-w-[475] gap-5'>
              <div className='w-[50%]'>
                <label className='block p-no-colour font-bold mb-1'>
                  Your Name <sup>(required)</sup>
                </label>
                <input
                  type='name'
                  className='rounded bg-stone-200 text-sm text-black px-2 py-1 w-full'
                  {...register('name', { required: true })}
                />
              </div>
              <div className='w-[50%]'>
                <label className='block p-no-colour font-bold mb-1'>
                  Your Email <sup>(required)</sup>
                </label>
                <input
                  type='email'
                  className='rounded bg-stone-200 text-sm text-black px-2 py-1 w-full'
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <div>
              <label className='block p-no-colour font-bold mb-1'>
                Message <sup>(required)</sup>
              </label>
              <textarea
                className='rounded bg-stone-200 text-sm text-black w-full max-w-[475] h-50 px-2 py-1'
                {...register('message', { required: true })}
              />
            </div>
          </div>

          <div className='flex justify-end max-w-[475]'>
            <button
              type='submit'
              className='block rounded bg-blue-500 px-6 py-2 cursor-pointer hover:bg-blue-600 active:bg-blue-700'
            >
              <p className='p-no-colour font-bold'>Submit Email</p>
            </button>
          </div>
        </form>

        <div>
          <p className='p-no-colour flex'>
            Alternatively, feel free to send me an email at
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
          <p className='p-no-colour flex items-center'>
            Or check out my
            <IconLink
              title='LinkedIn'
              href='https://www.linkedin.com/in/henry-meach-26245716b/'
              src='/logos/linkedin/InBug-White.png'
              className='text-orange-400 hover:text-orange-600'
            />
            and my
            <IconLink
              title='GitHub'
              href='https://www.github.com/henrymeach/'
              src='/logos/github/github-mark-white.png'
              className='text-orange-400 hover:text-orange-600'
            />
          </p>
        </div>
      </section>

      <p
        className={`${jacquard.className} p-no-colour !text-2xl flex justify-center mb-3`}
      >
        {`© ${new Date().getFullYear()} — Henry Meach`}
      </p>
    </footer>
  )
}
