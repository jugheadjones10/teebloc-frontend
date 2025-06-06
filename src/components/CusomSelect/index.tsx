import { useState } from "react";
import Select, { GroupBase, Props, components } from "react-select";

const Menu = (props) => {
  return (
    <components.Menu {...props}>
      {props.children}
      {props.selectProps.haveSelectAll && (
        <button
          className="flex justify-center w-full px-2 py-1 border-t-2 border-gray-200 cursor-pointer hover:text-gray-500"
          onClick={() => {
            // Select all options
            props.selectProps.setValues(props.selectProps.options);
            props.selectProps.setMenuOpen(false);
          }}
          // For some reason onClick doesn't work on mobile
          onTouchEnd={() => {
            // Select all options
            props.selectProps.setValues(props.selectProps.options);
            props.selectProps.setMenuOpen(false);
          }}
        >
          Select all
        </button>
      )}
    </components.Menu>
  );
};

const MultiValue = ({ index, getValue, ...props }) => {
  const maxToShow = 5;
  const length = getValue().length;

  return length <= maxToShow ? (
    <components.MultiValue {...props} />
  ) : index < 1 ? (
    <div className="text-gray-500">
      {props.selectProps.placeholder} ({props.selectProps.value.length})
    </div>
  ) : null;
};

export default function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Select
        {...props}
        setMenuOpen={setMenuOpen}
        menuIsOpen={menuOpen}
        //   menuIsOpen={true}
        onBlur={() => {
          setMenuOpen(false);
        }}
        onMenuOpen={() => {
          setMenuOpen(true);
        }}
        onMenuClose={() => {
          setMenuOpen(false);
        }}
        components={{
          Menu,
          LoadingIndicator: () => null,
          MultiValue,
        }}
      />
      {props.includeFooter !== false &&
        (!props.value ||
          (Array.isArray(props.value) && props.value.length === 0)) && (
          <span className="text-xs text-red-500">Need to select input</span>
        )}
    </div>
  );
}
