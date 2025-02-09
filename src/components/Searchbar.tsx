import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Searchbar = () => {

    const route = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if(name){
            route.push(`/list?name=${name}`)
        }
    }
  return (
    <div>
      <form className='flex items-center justify-between bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
        <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none'/>
        <button className='cursor-pointer'>
            <Image src="/search.png" alt='' width={16} height={16} />
        </button>
      </form>
    </div>
  )
}

export default Searchbar
