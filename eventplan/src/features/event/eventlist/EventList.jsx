import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const {events, onOpen, deleteEvent} = this.props;
    return (
      <div>
        <h2>Event List</h2>
        {events.map((event) => (
          <EventListItem key={event.id} event={event}  onOpen= {onOpen} deleteEvent={deleteEvent}/>
        ))}
      </div>
    );
  }
}

export default EventList;
