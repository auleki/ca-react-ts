import { SHeader } from './StyledComponents'

const Header = () => {
  return (
    <SHeader>
      <section className="text">
        <h2 className="title">
          clothes for the coming trend
        </h2>
        <section className="subscription__box">
          <p>
            Join our amazing mailing list, and get information on our new collections and jaw dropping offers.
          </p>
          <div className="subscribe__field">
            <input type="email" id="subscribe__input" placeholder="type in your email" />
            <button type="submit">
              Subscribe Now
            </button>
          </div>
        </section>
      </section>
    </SHeader>
  )
}

export default Header