import { useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';




export default function ProgressBar() {
  
  NProgress.configure({ showSpinner: false });
  const handleStart = () => {
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };
  window.addEventListener("load", handleStop);
  
  useEffect(() => {
    handleStart();

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, [Router]);

  return (
    <></>
  );
}
