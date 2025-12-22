import './App.css';
import Navmenu from './components/Navmenu';
import HeroContainer from './components/HeroContainer';
import EducationCertification from './components/EducationCertification';
import ProjectsContainer from './components/ProjectsContainer';
import SkillStackContainer from './components/SkillsStackContainer';
import AchievementsContainer from './components/AchievementsContainer';
import ContactMeContainer from './components/ContactMeContainer';

function App() {
  return (
    <>
      <Navmenu />
      <HeroContainer />
      <EducationCertification />
      <ProjectsContainer />
      <SkillStackContainer />
      <AchievementsContainer />
      <ContactMeContainer />
    </>
  );
}

export default App;
