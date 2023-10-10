import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import LinkWrapper from "./LinkWrapper";

interface PaginateProps {
    page:number;
    totalPages: number;
}

const Paginate  = ({page, totalPages}: PaginateProps) => {

    const getPageIndexOptions = (maxNumberOfOptions: number, pageSize: number, pageIndex: number) => {
        const options = [];
        const pivot = Math.ceil(maxNumberOfOptions/2);
        const lastPageIndex = pageSize;
        
        if (lastPageIndex <= maxNumberOfOptions) {
          while(options.length < lastPageIndex) options.push(options.length+1);
        } else if (pageIndex < pivot) {
          while(options.length < maxNumberOfOptions) options.push(options.length+1);
        } else if (pageIndex > (lastPageIndex - pivot)) {
          while(options.length < maxNumberOfOptions) options.unshift(lastPageIndex - options.length + 1);
        } else {
          for (var i = pageIndex - (pivot - 1); options.length < maxNumberOfOptions; i++) {
            options.push(i + 1);
          }
        }    
        return options;
    }

    return (
        <div className="flex items-center">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">                
                <LinkWrapper isDisabled={page===1} href={`?page=${page-1}`} 
                >
                    <span className="sr-only">Previous</span>
                    <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                </LinkWrapper>
                
                {
                    getPageIndexOptions(5, totalPages, page).map((item) => (
                        <Link href={`?page=${item}`} key={item}
                        className={`${item === page ? 
                            'relative z-10 inline-flex items-center border-white border rounded-lg text-white px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 
                            'relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-900 focus:z-20 focus:outline-offset-0'}`}                         
                        >
                             {item}
                        </Link>
                    ))
                }
                <LinkWrapper isDisabled={page===totalPages} href={`?page=${page+1}`} 
                >
                     <span className="sr-only">Next</span>
                    <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                </LinkWrapper>
            </nav>
        </div>
    )
}

export default Paginate