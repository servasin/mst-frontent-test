import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>MST | Frontend Test - 1 </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{  minHeight: 'calc(100vh - 120px)' }}>
        {props.children}
      </main>

      <Footer />

    </div>
  );
}