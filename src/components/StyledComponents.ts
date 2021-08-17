import styled, { css } from 'styled-components'
import { colors as c, fonts as f, metrics } from './Constants'


export const AppContainer = styled.div(
  () => css`
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    padding: 0 2em;
    background-color: ${c.gray};
    font-family: ${f.poppins};
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
    /* background-attachment: fixed; */
    /* scroll-behavior: smooth; */
    background-size: cover;
    transform:translatez(0);
    -webkit-transform:translatez(0);
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

export const Container = styled.section(
  () => css`
    /* border: 1px solid ${c.red}; */
    margin-top: 2em;

    .title {
      text-align: center;
      padding: 1em;
      .collection__title {
        font-size: 2em;
      }
    }
  `
)

export const SCollections = styled.div(
  () => css`
    display: flex;
    gap: 2em;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2em;
  `
)

export const SCard = styled.div(
  () => css`
    border: 2px solid ${c.black};
    display: flex;
    flex-direction: column;
    box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);
    -moz-box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);    
    flex: 1 1 25rem;
    border-radius: 5px;
    transition: box-shadow 200ms ease-in;

    &:hover {
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 20,0.23);
    }
    
    .product__image {
      height: auto;
      width: 200px;
    }
  `
)