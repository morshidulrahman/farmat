import Layout from '../app/layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from "../app/redux/store"
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider position='top-right'>
          <Head>
            <title>Farmat</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  )
}

export default MyApp
