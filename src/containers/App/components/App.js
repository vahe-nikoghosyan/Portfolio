import { useMediaQuery } from "react-responsive";

import AboutMe from "./AboutMe/AboutMe";
import Menu from "./Menu/Menu";
import Social from "./Social/Social";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1225px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Router>
      <div className="App">
        <Menu
          isDesktopOrLaptop={isDesktopOrLaptop}
          isTabletOrMobile={isTabletOrMobile}
        />
        {isDesktopOrLaptop && <Social />}
        <Switch>
          <div className="content">
            <Route exact path="/my-skills">
              <div>my skills</div>
            </Route>
            <Route exact path="/work">
              <div>work</div>
            </Route>
            <Route exact path="/blog">
              <div>Blog</div>
            </Route>
            <Route exact path="/contact">
              <div>Contact</div>
            </Route>
            <Route exact path="/">
              <AboutMe />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
