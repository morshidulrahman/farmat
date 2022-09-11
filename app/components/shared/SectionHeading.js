import React from 'react'
import Sectiontitle from './Sectiontitle'
import Leftright from './Leftright'
function SectionHeading({ title, text }) {
    return (
        <>
            <div className='flex items-center justify-between'>
                <Sectiontitle title={title} text={text} />
                {/* left right */}
                <Leftright />
            </div>
        </>
    )
}

export default SectionHeading