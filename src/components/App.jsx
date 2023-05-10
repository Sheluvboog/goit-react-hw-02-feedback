import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./Sections/Section";
import { Statistics } from "./statistics/Statistics";
import { Notification } from "./notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  update = nameFeedback => {
    this.setState(oldState => {
      let obj = { ...oldState };

      obj[nameFeedback] = oldState[nameFeedback] + 1;

      return obj;
    })
    
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad))
      * 100 || 0
    );
  }

  render() {
    return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
      >
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.update}
          />
        </Section>

        {this.countTotalFeedback() === 0 ? (<Notification message={"There is no feedback"} />) : (
          <Statistics
          recall={
          Object.keys(this.state)}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()}
          statics={this.state}
          />
        )}

        
    </div>
  );
  }
};
