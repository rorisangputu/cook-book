import CallToAct from "../components/CallToAct"
import DownloadApp from "../components/DownloadApp"
import Hero from "../components/Hero"
import HomeReviews from "../components/HomeReviews"
import Popular from "../components/Popular"




const Home = () => {

    return (
        <div className="">
            <Hero />
            <Popular />
            <CallToAct />
            <HomeReviews />
            <DownloadApp />
        </div>
    )
}

export default Home