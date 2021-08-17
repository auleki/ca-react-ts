import styled, { css } from 'styled-components'
import { colors as c, fonts as f, metrics } from './Constants'


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
    background: linear-gradient(to top, #110C0A5E, #00000067), 
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
      font-family: ${f.headerTitleFont};
      font-size: 4em;
      text-transform: uppercase;
      text-align: center;
      color: ${c.white};
      span {
        color: ${c.red};
      }
    }
  `
)

export const SSubscription = styled.section(
  () => css`
    text-align: center;
    margin-top: 1em;
    .text {
      color: ${c.white};
      font-size: 1.5em;
      
      text-align: center;
    }
    .subscribe__field {
      -webkit-box-shadow: 6px 6px 15px 0px #0000006C; 
      box-shadow: 6px 6px 15px 0px #0000006C;
      background: ${c.black};
      display: inline-flex;
      align-items: center;
      padding: .4em 1.5em;
      overflow: hidden;
      border-radius: 4px;
      margin-top: 1em;
      input {
        padding: 1em;
        font-family: ${f.headerTitleFont};
        color: ${c.white};
        font-size: 1em;
        background-color: transparent;
        &::placeholder {
          color: ${c.white};
        }
      }
      button {
        height: 2em;
        width: 3em;
        padding: .5em 1em;
        /* background: transparent; */
        background: ${c.lightBlack};
        border-radius: 5px;
        color: ${c.white};
        /* display: flex; */
        /* align-items: center; */
        font-size: 1.5em;
        cursor: pointer;
        transition: color 200ms ease-in,
        background 250ms ease-in,
        transform 150ms ease-in;
        &:hover, &:focus{
          background: ${c.red} ;
          color: ${c.white};
        }
        &:active {
          transform: translateY(.3em);
          .icon {
            transform: translateX(1em);
          }
        }
      }
    }
  `
)