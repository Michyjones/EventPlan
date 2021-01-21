import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import EventList from '../eventlist/EventList';
import EventForm from '../EventForm/EventForm';


const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/27.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/10.jpg'
      }
    ]
  }
]

class Dashboard extends Component {
  state= {
      events: eventsDashboard,
      isOpen: false
    }
  handleFormOpen = () =>{
    this.setState({
      isOpen: true
    })
  }
  handleCancel = () =>{
    this.setState({
      isOpen: false
    })
  }
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                <EventList events={this.state.events}/>
                </Grid.Column>
                <Grid.Column width={6}>
                <Button onClick= {this.handleFormOpen} positive content="Create Event"/>
                {this.state.isOpen &&
                <EventForm handleCancel= {this.handleCancel}/>}
                </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard;