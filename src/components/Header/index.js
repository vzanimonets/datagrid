import React from "react";
import IconSortAsc from "../Icons/IconSortAsc";
import IconSortDesc from "../Icons/IconSortDesc";

const Header = ({ column, fnClick, sort = [] }) => {
  const style =
    column.sortKey === "id" || column.sortKey === "age"
      ? { width: "auto" }
      : {};
  const current = sort.find(x => x.sortKey === column.sortKey) || {};

  const handleClick = (e, dir) => {
    e.preventDefault();
    fnClick(e.ctrlKey, { sortKey: column.sortKey, dir: dir });
  };
  return (
    <div className="cell" style={style}>
      <span>{column.name}</span>
      <span className="table-column-sorter">
        <span onClick={e => handleClick(e, "asc")}>
          <IconSortAsc
            columnSort={column.sortKey}
            currentSort={current.sortKey}
            currentDir={current.dir}
          />
        </span>
        <span onClick={e => handleClick(e, "desc")}>
          <IconSortDesc
            columnSort={column.sortKey}
            currentSort={current.sortKey}
            currentDir={current.dir}
          />
        </span>
      </span>
    </div>
  );
};
Headers.defaultProps = {
  fnClick: () => {},
  column: ""
};
export default Header;
