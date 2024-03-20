import AsideBar from "../components/AsideBar";
import SideBar from "../components/SideBar";


type LayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className="base">
      <div>
        {/* sidebar? */}
        <SideBar />
      </div>
      <main>
        {/* header or navbar */}
        {/* main section */}
        {children}
      </main>
      <AsideBar />
    </div>
  );
};

export default BaseLayout;
