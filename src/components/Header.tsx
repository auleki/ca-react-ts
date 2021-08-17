import { SHeader } from './StyledComponents'
import Subscription from './Subscription'

const Header = () => {
  return (
    <SHeader>
      <section className="text">
        <h2 className="title">
          clothes for the <span>coming trend.</span>
        </h2>
        <Subscription />
      </section>
    </SHeader>
  )
}

export default Header