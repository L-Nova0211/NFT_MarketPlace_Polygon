import * as React from 'react'
import App from 'next/app';
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import Web3Provider from '../src/components/providers/Web3Provider'
import { StylesProvider, createGenerateClassName } from '@mui/styles'
import BaseLayout from '../src/components/layout/Base'
import { wrapper, store } from '../src/redux';
import { removeError } from '../src/redux/actions/errorActions';
import actions from '../src/redux/actions';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const generateClassName = createGenerateClassName({
  productionPrefix: 'c'
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    store.dispatch(removeError());
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = this.props

    return (
      <StylesProvider generateClassName={generateClassName}>
        <Web3Provider>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BaseLayout deauthenticate={() => actions.deauthenticate()(store.dispatch)}>
                  <Component {...pageProps} />
                </BaseLayout>
            </ThemeProvider>
          </CacheProvider>
        </Web3Provider>
      </StylesProvider>
    )
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}

export default wrapper.withRedux(MyApp)
