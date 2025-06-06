export default function ButtonSelect({
  label,
  selected,
  onChange,
  disabled = false,
}: {
  label: string;
  selected: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`px-2 py-1 text-sm font-medium ${
        selected
          ? "bg-yellow-200 hover:bg-yellow-300"
          : "bg-gray-200 hover:bg-gray-300"
      } rounded-lg disabled:opacity-50`}
      disabled={disabled}
      onClick={() => onChange(label)}
    >
      {label}
    </button>
  );
}
