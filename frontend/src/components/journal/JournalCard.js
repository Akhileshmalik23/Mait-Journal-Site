import React from 'react'

const Journals = [
  {
    title:"Modern Finance",
    last_updated:"24 Jan 2024",
    author: "Aditya jaiswal",
    publisher:"Jaypee Brothers Medical Publisher",
    country:"India",
    lang:"English",
    subjects:"Finance",
  },
  {
    title:"Communications in Advanced Mathematical Sciences",
    last_updated:"01 Dec 2020",
    author: "Kumar harsh",
    publisher:"Jaypee Brothers Medical Publisher",
    country:"India",
    lang:"English",
    subjects:"Mathematics",
  },
  {
    title:"Annals of Oncology Research and Therapy",
    last_updated:"26 Aug 2021",
    author: "Abhyuday pratap singh",
    publisher:"Jaypee Brothers Medical Publisher",
    country:"India",
    lang:"English",
    subjects:"Meical Science",
  },
  {
    title:"Bengal Physician Journal",
    last_updated:"24 Jul 2018",
    author: "Akhilesh malik",
    publisher:"Jaypee Brothers Medical Publisher",
    country:"India",
    lang:"English",
    subjects:"Medical Study",
  },
];

const Journal_post = ({
  title,
  last_updated,
  author,
  publisher,
  country,
  subjects,
  discounted_price,
}) => (
  <div className="flex justify-center">
      <div className=' flex flex-row mt-[20px] w-full h-[200px]'>
        <div>
          <img className='img rounded-3xl overflow-hidden' src="https://source.unsplash.com/170x170/?book" height={170} width={170} />
          
        </div>
        <div className="flex flex-col pl-[12px] pt-[5px] w-[100vh] ">
          <div className="flex flex-row font-sans font-semibold mb-[10px]">
            <div className="text-[18px] "> {title} </div>
          </div>
          <div className="font-bold text-gray-600 text-[12px] mb-[10px]">Last updated on {last_updated}</div>
          <div className="font-bold text-gray-600 text-[12px] mb-[10px]">Published by <span className='italic text-black'>{publisher}</span> in <span className='text-black'>{country}</span></div>
          <div className="font-bold text-gray-600 text-[12px] mb-[10px]">
          <span className='text-[14px]'>Author</span> : <span>{author}</span>
          </div>
          <div className="font-bold mt-[5px] text-[14px] mb-[10px]">
            Journal subjects: 
          </div>
          <div class="text-[14px] rounded-xl w-max px-[5px] mt-[5px] outline outline-offset-2 outline-1">
          {subjects}
          </div>
        </div>

        <div className='flex flex-col  h-full pt-[135px]'>
          <div className="flex justify-center py-[6px] w-[150px] bg-[#f81b83] text-white rounded-full focus:outline-none focus:ring focus:ring-opacity-75 border-transparent " >
            <p>See More...</p>
          </div>
        </div>


      </div>
    </div>
);


const Home = () => {
  return (
    <>
    <div className='flex flex-col w-[900px]  mx-auto  '>
      <div className='mt-[20px]  font-sans font-semibold text-[24px] mb-[10px]'>Related Journals</div>
      <div>
        {Journals.map((item, index) => (
          <Journal_post key={index} {...item} />
        ))}
      </div>
    </div>
    </>
    )
    
}

export default Home