import ButtonSelect from "./buttonSelect";
import CustomSelect from "../CusomSelect/index";
import { Option } from "./index";
import { useEffect, useState } from "react";

const commonSelectSettings = {
  hideSelectedOptions: false,
  isClearable: true,
  closeMenuOnSelect: false,
  styles: {
    container: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
    }),
    placeholder: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      color: "black",
    }),
    option: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      whiteSpace: "nowrap",
    }),
    menu: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
      width: "fit-content",
      flexDirection: "column",
    }),
    menuList: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
      width: "100%",
      flexDirection: "column",
    }),
    multiValue: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      backgroundColor: "#fef08a",
    }),
  },
};

export default function RowSelect({
  rowLabel,
  options,
  showCondition = true,
  multiselect = false,
  hasAllOption = false,
  allLoading = false,
  reset = false,
  setReset = () => {},
  useCustomSelect = null,
  disabled = options.map(() => false),
}: {
  rowLabel: string;
  options: {
    label: string;
    onChange: (selected: boolean) => void;
    preselected: boolean;
  }[];
  showCondition?: boolean;
  multiselect?: boolean;
  hasAllOption?: boolean;
  allLoading?: boolean;
  reset?: boolean;
  setReset?: (value: boolean) => void;
  useCustomSelect?: {
    selectedValues: Option[];
    setSelectedValues: (values: Option[]) => void;
  } | null;
  disabled?: boolean[];
}) {
  const [selectedStates, setSelectedStates] = useState<boolean[]>(
    options.map((option) => option.preselected)
  );

  useEffect(() => {
    setSelectedStates(options.map((option) => option.preselected));
  }, [allLoading, options]);

  useEffect(() => {
    if (reset) {
      setSelectedStates(options.map(() => false));
      setReset(false);
      if (useCustomSelect) {
        useCustomSelect.setSelectedValues([]);
      }
    }
  }, [reset]);

  const handleButtonClick = (index: number) => {
    setSelectedStates((prevStates) => {
      const newStates = multiselect
        ? [...prevStates]
        : options.map(() => false);
      if (hasAllOption) {
        if (index !== 0) {
          newStates[0] = false;
        } else {
          newStates.fill(false);
          newStates[index] = true;
        }
      }
      newStates[index] = !prevStates[index];
      options[index].onChange(newStates[index]);
      return newStates;
    });
  };

  return (
    <div className="flex flex-row">
      <div
        className={`self-start flex-shrink-0 w-40 ${
          useCustomSelect ? "mt-[6px]" : ""
        }`}
      >
        <label className="font-medium">{rowLabel}</label>
      </div>
      {showCondition && (
        <div className="flex flex-row flex-wrap gap-2">
          {useCustomSelect ? (
            <CustomSelect
              {...commonSelectSettings}
              haveSelectAll={true}
              isLoading={allLoading}
              placeholder={rowLabel}
              isSearchable={true}
              isMulti={multiselect}
              value={useCustomSelect.selectedValues}
              setValues={useCustomSelect.setSelectedValues}
              includeFooter={false}
              onChange={(selectedOptions: Option[]) => {
                const newStates = options.map((option) =>
                  selectedOptions.some(
                    (selected) => selected.label === option.label
                  )
                );
                setSelectedStates(newStates);
                useCustomSelect.setSelectedValues(selectedOptions);
                options.forEach((option, index) => {
                  option.onChange(newStates[index]);
                });
              }}
              options={options.map((option) => ({
                label: option.label,
                value: option.label,
              }))}
            />
          ) : (
            options.map((option, index) => (
              <ButtonSelect
                key={option.label}
                label={option.label}
                selected={selectedStates[index]}
                disabled={disabled[index]}
                onChange={() => handleButtonClick(index)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
