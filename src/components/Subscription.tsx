import { SSubscription } from "./StyledComponents";
import { icons } from "./Constants";

const Subcription = () => {
  return (
    <SSubscription>
      <p className="text">
        Join our amazing mailing list.
      </p>
      <div className="subscribe__field">
        <input type="email" id="subscribe__input" placeholder="type in your email" />
        <button type="submit">
          <span className="icon">
            {icons.send}
          </span>
        </button>
      </div>
    </SSubscription>
  )
}

export default Subcription