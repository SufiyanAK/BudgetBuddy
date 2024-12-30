import { ReactNode, useState } from 'react';
import './Body.css'
import { Link } from 'react-router-dom';

type SectionProps = {
    name: string,
    component: ReactNode
    path: string
}
interface BodyProps {
    children?: ReactNode;
    sections?: SectionProps[];
}
const Body = ({ children, sections = [] }: BodyProps) => {
    const [activeSection, setActiveSection] = useState<string | undefined>(sections?.[0]?.name)



    const handleSectionClick = (sectionName: string) => {
        setActiveSection(sectionName);

    };

    return (
        <>
            <section className='m-4 space-y-4 text-secondary'>
                <div className='flex gap-x-4 gap-y-2 flex-wrap'>
                    {
                        sections?.map((section) => {
                            const activeStyle = activeSection !== section.name ? 'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-primary' : 'bg-primary text-secondary';
                            return (
                                <Link
                                    key={section.name}
                                    to={`${section.path}`}
                                >
                                    <button
                                        onClick={() => handleSectionClick(section.name)}
                                        className={`${activeStyle} px-4 py-2 text-sm flex-1 sm:flex-none sm:text-lg min-w-[200px] hover:text-secondary hover:bg-primary rounded-md shadow-md font-bold cursor-pointer duration-300`}
                                    >
                                        {section.name}
                                    </button>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={`my-1`}>
                    {children}
                </div>
            </section>
        </>
    )
};

export default Body;
