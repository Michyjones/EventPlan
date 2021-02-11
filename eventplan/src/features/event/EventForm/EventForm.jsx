import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const intialState = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: "",
};

class EventForm extends Component {
  state = {
    event: intialState
  };
  componentDidMount() {
    if (this.state.selected !== null) {
      this.setState({
        event: this.props.selected,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState({
        event: nextProps.selected || intialState,
      });
    }
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };
  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                onChange={this.onInputChange}
                value={event.title}
                placeholder="Event Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                type="date"
                onChange={this.onInputChange}
                value={event.date}
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                onChange={this.onInputChange}
                value={event.city}
                placeholder="City event is taking place"
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                onChange={this.onInputChange}
                value={event.venue}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                onChange={this.onInputChange}
                value={event.hostedBy}
                placeholder="Enter the name of person hosting"
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={handleCancel} type="button">
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EventForm;