import { useEffect, useState } from "react";

const TestWrappedComponent = (props) => {
  return (
    <ul>
      <li>321</li>
      <li>321</li>
      <li>321</li>
    </ul>
  );
};
export default withClose(TestWrappedComponent);

function withClose(WrappedComponent) {
  return ({ isClose, isCloseCb, ...props }) => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        isCloseCb();
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", handleEscClose);
      return () => window.removeEventListener("keydown", handleEscClose);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

{
  /* <TestWrappedComponent title="qwe" />; => (() => <WrappedComponent />)() */
}

{/* <WC />; */}
