import { SHeader } from './StyledComponents'
import Subscription from './Subscription'

const Header = () => {
  return (
    <SHeader>
      <section className="text">
        <h2 className="title">
          clothes for the coming trend
        </h2>
        <Subscription />
      </section>
    </SHeader>
  )
}

export default Header