import styled, { css } from 'styled-components'
import { colors as c, fonts as f, metrics } from './constants'
import BgImage from '../assets/blurry-gradient-haikei.png'

export const AppContainer = styled.div(
  () => css`
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    padding: 0 2em;
    background-color: ${c.gray};
    font-family: ${f.main};
  `
)


export const SNavbar = styled.nav(
  () => css`
    background: ${c.gray};
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      a {
        font-family: ${f.logoFont};
        font-size: 2em;
        color: ${c.lightBlack};
      }
    }

    .nav__links {
      gap: 1em;
      display: flex;
      a {
        color: ${c.black};
        text-transform: uppercase;
      }
    }
  `
)

export const SHeader = styled.section(
  () => css`
    background: linear-gradient(to top, #F36A2B5E, #00000067), 
    url('https://res.cloudinary.com/checkadigs/image/upload/v1626714806/4_6001518644931069900-min_dhh53w.jpg') no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    height: 80vh;
    border-radius: ${metrics.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .title {
      font-family: ${f.main};
      font-size: 2em;
      text-transform: uppercase;
      text-align: center;
      color: ${c.white};
    }
    .subscription__box {
      text-align: center;
      margin-top: 1em;
      .subscribe__field {
        background: ${c.lightBlack};
      }
    }

  `
)