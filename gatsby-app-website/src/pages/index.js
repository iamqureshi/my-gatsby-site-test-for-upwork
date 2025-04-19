import * as React from "react"
import WarningNotes from "../common/WarningNotes.jsx"
import HeroSection from "../components/heroSection/HeroSection.jsx"
import OverviewSection from "../components/overview/OverviewSection.jsx"
import "../styles/globals.css"

const IndexPage = () => (
  <>
    <WarningNotes />
    <div className="flex-center logo-top-bar">
      <img className="logo-image" src="assets/logo.png" alt="logo.png" />
    </div>
    <main>
      <HeroSection />
      <OverviewSection />
      <div className="container pt-54">
        <div className="top-debt">
          <p>The top debt settlement companies in April 2025</p>
          <div className="left-section-of-top-debt relative">
            <div className="pl-30 text-of-debt">
              1. Overall choice partner: <a href="/">National Debt Relief</a>
            </div>
            <div className="pl-30 text-of-debt">
              2. Lowest fees for services partner: <a href="/">Freedom Debt Relief</a>
            </div>
            <div className="pl-30 text-of-debt">
              3.Best for small debt amounts partner: <a href="/">United Debt Settlement</a>
            </div>
            <div className="pl-30 text-of-debt">
              3.Best customer service partner: <a href="/">Accredited Debt Relief</a>
            </div>
          </div>
        </div>
      </div>
      <div className="table-image w-full">
        <img src="/assets/table.png" alt="table.png" />
      </div>
    </main>
  </>
)

export default IndexPage
