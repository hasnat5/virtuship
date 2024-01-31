'use client'
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Page = () => {
    const btnNat = useRef<HTMLButtonElement>(null);
    // const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const buttonElement = btnNat.current;

        let count: number
        const handleClick = () => {
            switch (count) {
                case 0:
                    console.log('natkun');
                    count = 2
                    // Lakukan perubahan atau langkah tertentu sesuai kebutuhan untuk kasus pertama
                    break;
                case 1:
                    console.log('hasnat');
                    // Lakukan perubahan atau langkah tertentu sesuai kebutuhan untuk kasus kedua
                    break;
                case 2:
                    console.log('ferdi');
                    // Lakukan perubahan atau langkah tertentu sesuai kebutuhan untuk kasus ketiga
                    break;
                default:
                    break;
            }

        };

        const switchScene = (num: any) => {
            count = num
        }

        switchScene(0)

        // if (buttonElement) {
        // }
        btnNat.current?.addEventListener('click', handleClick);

        // Membersihkan event listener saat komponen unmount atau sebelum useEffect dijalankan lagi
        return () => {

            btnNat.current?.removeEventListener('click', handleClick);
        };
        // }, [clickCount]);
    }, []);

    return (
        <>
            <Navbar />
            <div className='pt-24 px-6 grid gap-y-3'>
                <h2 className='text-3xl'>Product by <Link className='underline' target='_blank' href={'https://www.virtuwed.id'}>virtuwed.id</Link></h2>
                <p>Developed by <Link className='underline text-sky-500' href='https://hasnat.fun' target='_blank'>Hasnat</Link></p>

                <button ref={btnNat}>btnNat</button>
            </div>
        </>
    );
};

export default Page;
