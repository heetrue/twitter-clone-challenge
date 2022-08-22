import Header from 'components/layouts/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
