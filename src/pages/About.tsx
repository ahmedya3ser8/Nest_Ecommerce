import AboutInfo from "../components/about-page/about-info/AboutInfo";
import AboutProvider from "../components/about-page/about-provider/AboutProvider";
import AboutCount from "../components/about-page/count/AboutCount";
import AboutPerformance from "../components/about-page/performance/AboutPerformance";
import AboutTeam from "../components/about-page/team/AboutTeam";

function About() {
  return (
    <main className="overflow-hidden">
      <AboutInfo />
      <AboutProvider />
      <AboutPerformance />
      <AboutCount />
      <AboutTeam />
    </main>
  )
}

export default About;