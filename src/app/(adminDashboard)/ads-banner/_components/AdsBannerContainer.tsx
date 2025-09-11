import React from 'react'
import { AdsBannerForm } from './AdsBannerForm/AdsBannerForm'
import AdsHistoryTable from './AdsHistoryTable'

export default function AdsBannerContainer() {
  return (
    <div className='space-y-10'>
        <AdsBannerForm />
        <AdsHistoryTable />
    </div>
  )
}
