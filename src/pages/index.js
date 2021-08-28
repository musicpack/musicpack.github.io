import React from "react"
import AppLayout from "../components/AppLayout"
import HomeIntro from "../components/HomeIntro"
import { introData1 } from "../data/IntroData"

const Home = () => {
  return (
    <div>
      <AppLayout>
        <HomeIntro {...introData1} />
      </AppLayout>
    </div>
  )
}

export default Home
