import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home       from './pages/Home'
import Platform   from './pages/Platform'
import Solutions  from './pages/Solutions'
import Company    from './pages/Company'
import Support    from './pages/Support'
import Pricing    from './pages/Pricing'
import Changelog  from './pages/Changelog'
import Roadmap    from './pages/Roadmap'
import Blog       from './pages/Blog'
import Careers    from './pages/Careers'
import Contact    from './pages/Contact'
import Docs       from './pages/Docs'
import Status     from './pages/Status'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/platform"   element={<Platform />} />
        <Route path="/solutions"  element={<Solutions />} />
        <Route path="/company"    element={<Company />} />
        <Route path="/support"    element={<Support />} />
        <Route path="/pricing"    element={<Pricing />} />
        <Route path="/changelog"  element={<Changelog />} />
        <Route path="/roadmap"    element={<Roadmap />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/careers"    element={<Careers />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/docs"       element={<Docs />} />
        <Route path="/status"     element={<Status />} />
      </Routes>
    </BrowserRouter>
  )
}
