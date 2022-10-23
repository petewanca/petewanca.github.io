import React from "react";

import * as logoStyle from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <div className={logoStyle.main}>Pete Wanca</div>
      <div className={logoStyle.subtitle}>Mixing & Mastering Engineer</div>
    </div>
  );
};

export default Logo;
