import { Outlet } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

const BaseComponent = () => {
  return (
    <>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </>
  );
};

export default BaseComponent;
