import React from 'react'
import Sectiontitle from './Sectiontitle'
import Leftright from './Leftright'
function SectionHeading({ title, text, categories, nobutton }) {
    return (
        <>
            <div className='flex items-center justify-between'>
                <Sectiontitle title={title} text={text} categories={categories} />
                {/* left right */}
                {
                    !nobutton && (
                        <Leftright />
                    )
                }
            </div>
        </>
    )
}

export default SectionHeading