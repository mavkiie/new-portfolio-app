import React from 'react';
//header should contain a title

interface SectionHeaderProp {
    title: string;
}

const Header = ({title} : SectionHeaderProp) => {
  return (
    <div>
        <h3 className="text-[70px] font-bold">{title}</h3>
      
    </div>
  )
}

export default Header
