import { SSubscription } from "./StyledComponents";

const Subcription = () => {
  return (
    <SSubscription>
      <p className="text">
        Join our amazing mailing list, and get information on our new collections and jaw dropping offers.
      </p>
      <div className="subscribe__field">
        <input type="email" id="subscribe__input" placeholder="type in your email" />
        <button type="submit">
          Subscribe Now
        </button>
      </div>
    </SSubscription>
  )
}

export default Subcription