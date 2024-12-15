import "./Plans.css";
function Plans() {
  return (
    <div className="plans">
      <h2>Buy Plans and Subscriptions</h2>
      <p>
        Unlock premium features and exclusive content with our subscription
        plans.
      </p>
      <div className="subscription-options">
        <div className="subscription-option">
          <h3>Basic Plan</h3>
          <p>Access to a limited set of features</p>
          <p>$9.99/month</p>
          <button>Subscribe</button>
        </div>
        <div className="subscription-option">
          <h3>Pro Plan</h3>
          <p>Full access to all features and exclusive content</p>
          <p>$19.99/month</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
