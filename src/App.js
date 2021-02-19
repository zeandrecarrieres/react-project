import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { Transition } from 'react-transition-group'
import { gsap } from 'gsap'

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact }
]

function App() {

  return (
    <>
      <Router>
        <main>
          <Navbar />
          <section className="container">
            <Transition  className="fade">
              <Switch>
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <Component />
                    )}
                  </Route>
                ))}
                <Route path="/" exact component={Home}>
                </Route>

                <Route path="/projects" component={Projects}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
            </Transition>
          </section>
        </main>
      </Router>
    </>
  );
}
export default App;