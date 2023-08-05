"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';
const CustomButton = ({title, containerStyles,textStyles,rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button disabled={false}
     type={"button"}
    className={`custom-btn ${containerStyles} ${textStyles}`}
    onClick={handleClick}>
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton