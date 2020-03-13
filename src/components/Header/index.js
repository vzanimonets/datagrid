import React from "react";
import IconSortAsc from "../Icons/IconSortAsc";
import IconSortDesc from "../Icons/IconSortDesc";

const Header = ({ column, fnClick, sort }) => {
  const style =
    column.sortKey === "id" || column.sortKey === "age"
      ? { width: "auto" }
      : {};
  const handleClick = (e, dir) => {
    e.preventDefault();
    fnClick({
      sortKey: column.sortKey,
      dir: dir,
      multiple: e.ctrlKey
    });
  };
  return (
    <div className="cell" style={style}>
      <span>{column.name}</span>
      <span className="table-column-sorter">
        <span onClick={e => handleClick(e, "asc")}>
          <IconSortAsc
            columnSort={column.sortKey}
            currentSort={sort.sortKey}
            currentDir={sort.dir}
          />
        </span>
        <span onClick={e => handleClick(e, "desc")}>
          <IconSortDesc
            columnSort={column.sortKey}
            currentSort={sort.sortKey}
            currentDir={sort.dir}
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
