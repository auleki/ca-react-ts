import styled, { css } from 'styled-components'
import { colors as c, fonts as f, metrics } from './constants'


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
  `
)

export const SSubscription = styled.section(
  () => css`
    text-align: center;
    margin-top: 1em;
    .text {
      color: ${c.white};
      font-size: 1em;
    }
    .subscribe__field {
      background: ${c.orange};
      display: inline-block;
      padding: .4em 1.5em;
      /* border-radius: ${metrics.borderRadius}; */
      border-radius: 4px;
      margin-top: 1em;
      input {
        padding: 1em;
        color: ${c.white};
        font-size: 1em;
        background-color: transparent;
        &::placeholder {
          color: ${c.white};
        }
      }
      button {
        padding: 1em .5em;
        background: transparent;
        color: ${c.black};
        font-size: 1em;
        cursor: pointer;
        transition: color 200ms ease-in;
        &:hover {
          color: ${c.white};
        }
      }
    }
  `
)