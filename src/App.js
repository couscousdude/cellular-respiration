import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Link, ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { purple, orange } from '@material-ui/core/colors';
import NotFound from './components/NotFound';
import Learn from './components/Learn/Learn';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{height: '70px'}}>
          <Navbar />
        </div>
        <div style={{height: '30px'}}>
          <Footer>
            <Link 
              align='left'
              style={{marginLeft: 20}}
              variant='body1'
              href='https://www.github.com/couscousdude'
              rel='noopener noreferrer'
              target='_blank'
            >
                Designed by Youwen Wu
            </Link>
          </Footer>
        </div>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={() => (
              <Redirect to='/home' />
            )}
          />
          <Route exact path='/home' component={Home} />
          <Route exact path='/learn' component={Learn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
