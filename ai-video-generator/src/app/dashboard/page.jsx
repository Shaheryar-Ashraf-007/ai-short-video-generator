"use client"
import { Button } from '../../components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import Link from 'next/link'


const Dashboard = () => {

  const [videoList, setVideoList] = useState([])
  return (
   <div className=" ml-12 md:ml-72 mt-12 mr-12">
    <div className="flex items-center justify-between">
    <h1 className='text-2xl font-bold text-primary'>Dashboard</h1>
    
      <Link href={"/dashboard/create-new"}>
      <Button>
      + Create New 
    </Button>
    </Link>
    </div>

    {videoList?.length==0&&<div>
      <EmptyState/>
      </div>}
   </div>
  )
}

export default Dashboard