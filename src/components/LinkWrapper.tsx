import Link from "next/link";

interface LinkWrapperProps {
    isDisabled: boolean;
    href: string;
    children: React.ReactNode;
}

const LinkWrapper = ({
    isDisabled,
    href,
    children
}: LinkWrapperProps) => {

    if(isDisabled) {
        return <div className="relative inline-flex items-center rounded-lg px-2 
        py-2 text-gray-500 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">{children}</div>
    }

    return <Link href={href}
                className="relative inline-flex items-center rounded-lg px-2 
                py-2 text-gray-500 hover:bg-gray-900 focus:z-20 focus:outline-offset-0"
            >
                {children}
            </Link>
}

export default LinkWrapper