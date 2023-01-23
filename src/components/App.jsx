import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(0);

    return result;
  }

  leaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>

        {total ? 
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            ></Statistics>
          </Section>
        :
        <Notification message="There is no feedback" />}
      </>
    );
  }
}

export default App;
