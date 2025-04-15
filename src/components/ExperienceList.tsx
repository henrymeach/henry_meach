import { experiences, educations } from '@/data/experiences'

export default function ExperienceList () {
  return (
    <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
      <div className='flex flex-col md:w-[50%]'>
        <h2 className='h3-default mb-3'>Experience</h2>
        <div className='space-y-5'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className='rounded-sm bg-gray-50 outline-gray-100 outline-2 p-3 active:bg-white hover:bg-white active:scale-101 hover:scale-101 active:drop-shadow-lg hover:drop-shadow-lg transition'
            >
              <p className='p-default !text-sm'>{experience.timeframe}</p>
              <h3 className='p-default font-bold !text-lg'>{experience.title}</h3>
              <div className='p-default flex justify-between'>
                <p className='p-default'>{experience.company}</p>
                <p className={`p-default`}>{experience.location}</p>
              </div>
              <hr className='h-px border-0 bg-gray-300 my-2' />
              <p className='p-default !text-sm'>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col md:w-[50%]'>
        <h2 className='h3-default mb-3'>Education</h2>
        <div className='space-y-5'>
          {educations.map((education, index) => (
            <div
              key={index}
              className='rounded-sm bg-gray-50 outline-gray-100 outline-2 p-3 active:bg-white hover:bg-white active:scale-101 hover:scale-101 active:drop-shadow-lg hover:drop-shadow-lg transition'
            >
              <p className='p-default !text-sm'>{education.timeframe}</p>
              <h3 className='p-default font-bold !text-lg'>{education.degree}</h3>
              <div className='p-default flex justify-between'>
                <p className='p-default'>{education.school}</p>
                <p className={`p-default`}>{education.location}</p>
              </div>
              <hr className='h-px border-0 bg-gray-300 my-2' />
              <p className='p-default !text-sm'>{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
