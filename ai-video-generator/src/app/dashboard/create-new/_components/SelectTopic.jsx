"use client"
import React, { useState } from 'react'
import { Textarea } from "../../../../components/ui/textarea"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select"

  

const SelectTopic = ({onUserSelect}) => {

    const options = ['Custom Prompt', 'Random AI story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational','Fun Facts']

    const [selectOptions, setselectOptions] = useState()
  return (
    <div className=''>
        <h1 className=' text-primary text-xl md:text-2xl font-bold'>Content</h1>
        <p className='font-medium text-gray-500'>What is the topic of your video?</p>

        <Select onValueChange={(value)=>{setselectOptions(value)
          value!='Custom Prompt' && onUserSelect('topic', value)
        }}>
            <SelectTrigger className="w-full text-lg mt-2 p-6">
                <SelectValue placeholder="Content type" />
            </SelectTrigger>
            <SelectContent>
                {options.map((item,index)=>(
                    <SelectItem value={item} key={index}>{item}</SelectItem>
                    
                ))}
            </SelectContent>
        </Select>

        {selectOptions == 'Custom Prompt'&&
        <Textarea
         className="mt-4"
         onChange = {(e)=>onUserSelect('topic' , e.target.value)
         }
         placeholder = "Write Prompt which you want to generate" />
        }

    </div>
  )
}

export default SelectTopic