const FeedbackOptions = ({good, neutral, onLeaveFeedback }) => {
  return (
        <div>
          <h4>Please leave feedback</h4>
          <button onClick={() => onLeaveFeedback('good')}>Good</button>
          <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
          <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
        </div>
  );
};

export default FeedbackOptions;