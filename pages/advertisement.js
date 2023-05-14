import React from 'react'
import { Router, useRouter } from "next/router";
import {useEffect, useState} from 'react'


const Advertisement = ({vaules}) => {
  return (
    <div  className='bg-gray-800'> {vaules}</div>
  )
}

export default Advertisement