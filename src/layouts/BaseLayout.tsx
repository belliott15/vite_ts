import AsideBar from "../components/AsideBar";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex-col">
      <Header />
      <div className="flex mx-auto max-w-7xl">
        {/* sidebar? */}
        <SideBar />

        <main className="flex-[9]">
          {/* header or navbar */}
          {/* main section */}
          {children}
        </main>
        <AsideBar />
      </div>
    </div>
  );
};

export default BaseLayout;
