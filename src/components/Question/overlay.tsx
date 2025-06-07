function Overlay({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="modal-box p-5 max-w-[90%] max-h-[90%] overflow-y-auto rounded-lg shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Overlay;
