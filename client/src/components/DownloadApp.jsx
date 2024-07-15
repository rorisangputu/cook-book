import app from '../assets/app.png'
import android from '../assets/Android-App.png'
import apple from '../assets/apple.png'

const DownloadApp = () => {
    return (
        <div className='w-full bg-[#f7f7f7] py-12'>
            <div className='w-[90%] md:container lg:w-[90%] xl:container mx-auto flex justify-center md:justify-between lg:justify-center bg-[#1d9451] flex-col md:flex-row rounded-xl md:h-[50vh]'>

                <div className='w-full md:w-[40%] text-center md:text-left p-7 flex justify-center items-center'>
                    <div className='text-white w-[80%]'>
                        <h1 className='text-3xl md:text-4xl font-medium mb-4'>Download App</h1>
                        <p className='font-light mb-6'>
                            Download the app from App Store or Google Play. Culinary exploration awaits!
                        </p>
                        <div className='flex justify-center md:justify-start space-x-4'>
                            <img src={apple} alt="App Store" className='h-12' />
                            <img src={android} alt="Google Play" className='h-12' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-end w-full md:w-[40%] '>
                    <img src={app} alt="App" className='h-[200px] md:h-[400px] w-auto' />
                </div>

            </div>
        </div>
    )
}

export default DownloadApp