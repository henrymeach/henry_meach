'use client';

import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import { useState } from 'react';
import clsx from 'clsx';

export type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm () {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [submitted, setSubmitted] = useState<boolean>(false);
  function onSubmit (data: FormData) {
    setSubmitted(true);
    sendEmail(data);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[475]'>
      <div className='space-y-5 mb-5'>
        <div className='flex flex-row gap-5'>
          <div className='w-[50%]'>
            <label className='block p-no-colour font-bold mb-1'>
              Your Name <sup>(required)</sup>
            </label>
            <input
              required
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
              required
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
            required
            className='rounded bg-stone-200 text-sm text-black w-full h-50 px-2 py-1'
            {...register('message', { required: true })}
          />
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          type='submit'
          className={clsx(
            'block rounded px-6 py-2 cursor-pointer transition',
            !submitted && 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
            submitted && 'bg-green-500 hover:bg-green-600 active:bg-green-700',
          )}
        >
          <p className='p-no-colour font-bold'>{`${submitted ? 'Submitted!' : 'Submit Email'}`}</p>
        </button>
      </div>
    </form>
  )
}
