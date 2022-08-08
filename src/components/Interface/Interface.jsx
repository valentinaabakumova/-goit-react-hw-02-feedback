import React, { Component } from 'react';
import Section from './Section';
import Feedback from './Feedback';
import Statistic from './Statistic';
import Notification from './Notification';

class Interface extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //1
  handleIncrement = event => {
    const e = event.target.name;
    this.setState(prevState => {
      return { [e]: prevState[e] + 1 };
    });
  };

  //2
  countTotalFeedback() {
    const arrayTotalCount = Object.values(this.state);
    const total = arrayTotalCount.reduce((acc, typeNumber) => {
      return acc + typeNumber;
    }, 0);
    return total;
  }

  //3
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const persentage = Math.floor((good * 100) / this.countTotalFeedback());
    return persentage;
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={'leave feedback:'}>
          <Feedback options={options} onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title="statistic:">
          {total === 0 ? (
            <Notification message="no feedback here :('" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Interface;
