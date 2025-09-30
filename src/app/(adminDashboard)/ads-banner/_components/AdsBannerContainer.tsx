import { AdsBannerForm } from './AdsBannerForm/AdsBannerForm'
import AdsBannerHistoryTableContainer from './AdsBannerHistoryTable/AdsBannerHistoryTableContainer'

export default function AdsBannerContainer() {
  return (
    <div className='space-y-10'>
        <AdsBannerForm />
        <AdsBannerHistoryTableContainer />
    </div>
  )
}
