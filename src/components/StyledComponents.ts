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
        padding: 0 1.5em .5em;
        font-family: ${f.headerTitleFont};
        display: inline-flex;
        border-bottom: 5px solid ${c.red};
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
    position: relative;
    box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);
    -moz-box-shadow: 10px 10px 5px 0px rgba(207,207,207,0.83);    
    flex: 1 1 25rem;
    border-radius: 5px;
    transition: box-shadow 200ms ease-in;

    &:hover {
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 20,0.23);
    }

    .product__name {
      /* styling */
    }
    
    .product__category {
      position: absolute;
      bottom: 0;
      background: ${c.orange};
      color: ${c.white};
      padding: .5em;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 2px;
      right: 0;
    }
    
    .image {
      text-align: center;
    }

    button {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 2px;
    }
    
    .product__image {
      height: auto;
      /* border: 1px solid red; */
      width: 300px;
    }
  `
)

export const SButton = styled.button(
  () => css`
    background: ${c.orange};
    padding: 1em;
    cursor: pointer;
    color: ${c.white};
    display: flex;
    overflow: hidden;
    gap: .5em;
    align-items: center;
    transition: background 200ms ease-out;
    .icon {
      color: ${c.orange};
      background: ${c.white};
      height: 1.5em;
      width: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 200ms ease-in;
      font-size: 1.2em;
    
      border-radius: 50%;
    }
    .text {
      font-size: 1.2em;
    }
    &:hover {
      background: ${c.white};
      color: ${c.black};
      .icon {
        transform: translateX(.5em);
        background-color: ${c.gray};
        box-shadow: 1px 2px 4px rgba(0, 0, 19, .4);
      }
    }
    &:active {
      .icon {
        transform: translateX(100px);
      }
    }
  `
)