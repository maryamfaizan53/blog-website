'use client'
import {PortableTextComponents} from '@portabletext/react';

export const components:PortableTextComponents = {
    block:{
        h4:({children})=><h4 className='text-3xl font-bold text-black'>{children}</h4>

    },

    listItem:{
        bullet:({children})=><li className='list-disc marker:text-black list-inside ml-4'>{children}</li>
    },

    marks:{
        strong:({children})=><strong className='font-bold text-black dark:text-white'>{children}</strong>
    }
}