import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
   * {
     margin: 0;
     padding: o;
     box-sizing: border-box;
     font-family: Roboto, sans-serif;
   }

   body {
    background-color: ${cores.preta};
    color: ${cores.branca};
   }
`
