import ListOfCharacters from "@/components/ListOfCharacters";
import Paginate from "@/components/Paginate";
import { useState } from "react";

const getData = async (page: number) => {
  const res = await  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

export default async function Home({searchParams}: {
  searchParams: {
    page: string
  }
}) {
  const page = typeof searchParams.page === "string" ? +searchParams.page : 1;
  const data = await getData(page)
  
  


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl text-center text-blue-600 font-semibold">Rick and Morty Characters</h1>
      
      <div className="max-w-5xl w-full items-center mt-5 flex flex-col gap-4">
        <div><ListOfCharacters items={data.results}/></div>        
        <div>
          <Paginate 
            page={page} 
            totalPages={data.info.pages}
          />
        </div>
      </div>      
    </main>
  )
}
