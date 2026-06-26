import { ChevronRight, Plus,X } from 'lucide-react'
import React, { useState } from 'react'

const faqData = [
    {
        question: "What is Netflix?",
        paragraph1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        paragraph2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        paragraph1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
    },
    {
        question: "Where can I watch?",
        paragraph1:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        paragraph2:"You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do i cancel",
        paragraph1: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix",
        paragraph1: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids",
        paragraph1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        paragraph2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

const FaQ = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const drop = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }
  return (
    <div className='w-full h-full bg-black text-white mx-auto my-2 py-10'>
       <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
       {faqData.map((elem, index) => {
         const isOpen = openIndex === index
         return (
           <div key={elem.question} className='flex justify-center flex-col  h-full w-[95%]  text-2xl font-sans bg-[#323131] hover:bg-[#525252e8] mb-1.5'>
             <div className='flex justify-between px-5 p-5 items-center'>
               <h2>{elem.question}</h2>
               <button className='cursor-pointer' onClick={() => drop(index)} aria-expanded={isOpen} aria-controls={`dropdown-${index}`}>
                 {isOpen ? <X size={42} strokeWidth={1} /> : <Plus size={42} strokeWidth={1} />}
               </button>
             </div>
             <div
               id={`dropdown-${index}`}
               className={`mt-0.5 overflow-hidden transition-all duration-300 ease-in-out bg-[#323131] w-full  h-fit text-2xl ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
               aria-hidden={!isOpen}
             >
              <div className='h-0.5 w-full bg-black'></div>
               <div className=' flex flex-col gap-5 hover:bg-[#525252e8] p-5 '>
                 <p>{elem.paragraph1}</p>
                 <p>{elem.paragraph2}</p>
               </div>
             </div>
           </div>
         )
       })}
      <p className='flex justify-center ml-18 mt-18 mb-3 text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='flex gap-2'>
      <input className='w-1/2 border-gray-400 border px-3 py-3 ml-[20%]'  type="email" placeholder='Email address' />
      <button className='bg-red-600 hover:bg-red-700 flex p-3 text-2xl font-medium'>Get Started <ChevronRight size={40} strokeWidth={1.5} /></button>
      </div>
    </div>
  )
}

export default FaQ
