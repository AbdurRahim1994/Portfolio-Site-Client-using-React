import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/Home/HomePage'
import ProjectPage from '../src/pages/Project/ProjectPage'
import ExperiencePage from '../src/pages/Experience/ExperiencePage'
import EducationPage from '../src/pages/Education/EducationPage'
import TrainingPage from '../src/pages/Training/TrainingPage'
import TechnologyPage from '../src/pages/Technology/TechnologyPage'
import ContactPage from '../src/pages/Contact/ContactPage'
import ReferencePage from '../src/pages/Reference/ReferencePage'
import FullScreenLoader from '../src/components/MasterLayout/FullScreenLoader'
import NotFoundPage from '../src/pages/NotFound/NotFoundPage'
import MasterLayout from './components/MasterLayout/MasterLayout'

function App() {
  return (
    <div className="App">
      <MasterLayout></MasterLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/project' element={<ProjectPage></ProjectPage>}></Route>
          <Route path='/experience' element={<ExperiencePage></ExperiencePage>}></Route>
          <Route path='/education' element={<EducationPage></EducationPage>}></Route>
          <Route path='/training' element={<TrainingPage></TrainingPage>}></Route>
          <Route path='/technology' element={<TechnologyPage></TechnologyPage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/reference' element={<ReferencePage></ReferencePage>}></Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
      <FullScreenLoader></FullScreenLoader>
    </div>
  );
}

export default App;
