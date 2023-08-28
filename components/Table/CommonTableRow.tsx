import React from 'react';

const CommonTableRow = ({ children }:any) => {
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}

export default CommonTableRow;