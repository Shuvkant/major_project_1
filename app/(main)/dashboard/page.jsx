import React from "react"
import WelcomeContainer from "./_components/WelcomeContainer"
import CreateOptions from "./_components/CreateOptions"
import LatestInterviesList from "./_components/LatestInterviewsList"
function Dashboard() {
  return (
    <div>
      {/* <WelcomeContainer /> */}
      <h2 className="my-3 font-bold text-2xl">Dashboard</h2>
      <CreateOptions />
      <LatestInterviesList />
    </div>
  )
}

export default Dashboard
