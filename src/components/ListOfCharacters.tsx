import Image from "next/image";

interface ListOfCharactersProps  {
    image: string;
    id: number;
    name: string
}

const ListOfCharacters = async ({items}: {items: ListOfCharactersProps[]}) => {

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
          {
            items.map((item:ListOfCharactersProps) => (
              <div key={item.id} className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src={item.image} alt={item.name} width={250} height={250} className="h-64 w-64 object-cover rounded-xl" />
                  <h6 className="text-white">{item.name}</h6>
                </div>
              </div>
            ))
          }
        </div>
    )
}

export default ListOfCharacters