import styled, { css } from 'styled-components'
import { colors as c, fonts as f } from './constants'


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
    .logo {
      a {
        font-family: ${f.logoFont};
        font-size: 1.5em;
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