import React, { Fragment } from "react";
import RcDrawer from "rc-drawer";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`Drawer ${className || ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        lelve={null}
        duration={"0.4s"}
        {...props}
      >
        {closeButton && (
          <div as="div" onClick={toggleHandler} className={'Drawer-close-btn'}>
            X
          </div>
        )}
        <div style={drawerStyle}>{children}</div>
      </RcDrawer>
      <div
        className={"Drawer-handler"}
        style={{ dispaly: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
}

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};
