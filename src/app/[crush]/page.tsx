import Place from '@/components/Place'
import React, { Suspense } from 'react'
import { data } from './dataPano'

const Crush = ({ params }: { params: { crush: string } }) => {
    return (
        <main>
            <Suspense fallback={<p>Loading image</p>}>
                <Place crush={params.crush} dataPano={data} />
            </Suspense>
        </main>
    )
}

export default Crush