import Header from 'components/layouts/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
