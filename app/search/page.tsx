"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div dir='rtl'>
        <Header/>
        <Footer/>
    </div>
  )
}

export default page