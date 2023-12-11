import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react'

const Page = () => {

    return (
        <>
            <Navbar />
            <div className='pt-24 px-6 grid gap-y-3'>
                <h2 className='text-3xl'>Product by <Link className='underline' target='_blank' href={'https://www.virtuwed.id'}>virtuwed.id</Link></h2>
                <p>Developed by <Link className='underline text-sky-500' href='https://hasnat.fun' target='_blank'>Hasnat</Link></p>
            </div >
        </>
    )
}

export default Page