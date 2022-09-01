import Header from 'components/layouts/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center flex-grow w-[1255px] my-0 mx-auto ">
      <div className="flex justify-end w-full">
        <Header />
      </div>
      <div className="flex justify-between w-full">
        <main className="w-[600px] border-x border-[#eff3f4]">
          {props.children}
        </main>
        <aside className="w-[350px]"></aside>
      </div>
    </div>
  );
};

export default Layout;
