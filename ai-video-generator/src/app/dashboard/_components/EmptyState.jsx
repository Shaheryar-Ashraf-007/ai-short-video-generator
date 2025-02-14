import React from 'react'
import { Button } from '../../../components/ui/button.jsx'
import Link from 'next/link.js'

const EmptyState = () => {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
        <h2>You don't have any short video crerated </h2>
        <Link href={'/dashboard/create-new'}>
        <Button>
            Create a new short video
        </Button>
        </Link>
    </div>
  )
}

export default EmptyState