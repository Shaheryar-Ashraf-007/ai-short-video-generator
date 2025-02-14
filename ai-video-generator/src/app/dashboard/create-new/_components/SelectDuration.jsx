"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select"
  import { useState } from 'react';

const SelectDuration = ({onUserSelect}) => {
  const [selectOptions, setSelectOptions] = useState([]);

  return (
    <div>
      <h1 className=" text-primary text-xl md:text-2xl font-bold">Duration</h1>
      <p className="font-medium text-gray-500">
        Select the duration of your video
      </p>

      <Select
        onValueChange={(value) => {
          setSelectOptions(value);
          value != "Custom Prompt" && onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full text-lg mt-2 p-6">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="30 Seconds">
              30 Seconds
            </SelectItem>

            <SelectItem value="60 Seconds">
              60 Seconds
            </SelectItem>
        </SelectContent>
      </Select>

    </div>
  );
};
export default SelectDuration;
