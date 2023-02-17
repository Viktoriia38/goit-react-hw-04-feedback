import { useState } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveGoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };

  const onLeaveNeutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onLeaveBadFeedback = () => {
    setBad(prevState => prevState + 1);
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        onLeaveGoodFeedback();
        break;

      case 'neutral':
        onLeaveNeutralFeedback();
        break;

      case 'bad':
        onLeaveBadFeedback();
        break;
    }
  };

  const countTotalFeedback = () => {
    return Object.values({ good, neutral, bad }).reduce(
      (acc, item) => acc + item,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.ceil((good / (good + neutral + bad)) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            className="feedback-title"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
