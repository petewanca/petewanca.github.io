import React from "react";

import * as logoStyle from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <div className={logoStyle.logo}>Pete</div>
      <div className={logoStyle.logo}>Wanca</div>
    </div>
  );
};

export default Logo;
