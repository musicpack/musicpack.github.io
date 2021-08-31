import React from "react"
import AppLayout from "../components/AppLayout"
import HomeIntro from "../components/HomeIntro"
import { introData1, introData2, introData3 } from "../data/IntroData"

const Home = () => {
  return (
    <div>
      <AppLayout>
        <HomeIntro {...introData1} />
        <HomeIntro {...introData2} />
        <HomeIntro {...introData3} />
      </AppLayout>
    </div>
  )
}

export default Home
