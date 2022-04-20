import React from 'react';

interface HeaderProps {
    titleText: string,
    children?: React.ReactNode | [],
}

function MainHeader({ titleText, children = [] }: HeaderProps) {
  return (
    <header className="page__header">
      <div className="header__item">
        <h1 className="header__title">{titleText}</h1>
      </div>
      {children}
    </header>
  );
}

MainHeader.defaultProps = {
  children: [],
};

export default MainHeader;
