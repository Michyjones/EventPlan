import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventAttandee from './EventAttandee'

class EventListItem extends Component {
  render() {
      const {event, onOpen, deleteEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {event.attendees && event.attendees.map((attendee) => (
            <EventAttandee key ={attendee.id} attendee ={attendee} />
          ))}
          </List>
        </Segment>
        <Segment clearing>
        <span>
        {event.description}
        </span>
          <Button onClick= {deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
          <Button onClick= {onOpen(event)} as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem
