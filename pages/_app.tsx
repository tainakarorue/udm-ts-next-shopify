import { AppProps } from 'next/app';
import { FC } from 'react';
import '@assets/main.css';
import 'keen-slider/keen-slider.min.css';
import { UIprovider } from '@components/ui/context';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <UIprovider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIprovider>
  );
}

export default MyApp;
