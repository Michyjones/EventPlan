import { Route, Switch } from 'react-router-dom';
import Dasnboard from '../../features/event/dashboard/dashboard';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailed from '../../features/event/eventdetailed/EventDetailed';
import SettingDashboardPage from '../../features/user/setting/SettingDashboardPage';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import EventForm from '../../features/event/EventForm/EventForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route path="/(.+)" render={() => (
         <div>
         <NavBar />
         <Container className="main">
           <Switch>
             <Route path="/dashboard" component={Dasnboard} />
             <Route path="/event:id" component={EventDetailed} />
             <Route path="/profile:id" component={UserDetailedPage} />
             <Route path="/settings" component={SettingDashboardPage} />
             <Route path="/people" component={PeopleDashboard} />
             <Route path="/createevent" component={EventForm} />
           </Switch>
         </Container>
       </div>
    

      )} />
      </div>

     
  );
}

export default App;
