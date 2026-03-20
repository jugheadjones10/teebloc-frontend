import React, { useRef, useState, useEffect } from 'react';

export default function SplitPane({
  minLeft = 400,   // px
  minRight = 400,  // px
  initialLeft = 0.5, // fraction of container
  children,        // [leftContent, rightContent]
} : {
  minLeft?: number;
  minRight?: number;
  initialLeft?: number;
  children: React.ReactNode[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = useState<number | null>(null);
  const [rightWidth, setRightWidth] = useState<number | null>(null);
  const startX = useRef(0);
  const startLeftWidth = useRef(0);
  const startRightWidth = useRef(0);
  const HANDLE_WIDTH = 4; // px
  const hasDragged = useRef(false);

  // Use ResizeObserver to set initial width and respond to container resizes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const setInitialWidths = () => {
      if (hasDragged.current) return; // Don't reset if user has dragged
      const computedStyle = window.getComputedStyle(container);
      const gapPx = parseFloat(computedStyle.columnGap || computedStyle.gap || '0');
      const totalWidth = container.clientWidth - gapPx - HANDLE_WIDTH;
      const left = totalWidth * initialLeft;
      const right = totalWidth - left;
      setLeftWidth(left);
      setRightWidth(right);
    };
    setInitialWidths();
    const observer = new window.ResizeObserver(() => {
      setInitialWidths();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [initialLeft]);

  // Handle drag events
  const onDragStart = (e) => {
    e.preventDefault();
    hasDragged.current = true;
    startX.current = e.touches ? e.touches[0].pageX : e.pageX;
    startLeftWidth.current = leftWidth ?? 0;
    startRightWidth.current = rightWidth ?? 0;
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchmove', onDrag, { passive: false });
    window.addEventListener('touchend', onDragEnd);
  };

  const onDrag = (e) => {
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].pageX : e.pageX;
    const dx = clientX - startX.current;
    const container = containerRef.current;
    if (!container) return;
    const computedStyle = window.getComputedStyle(container);
    const gapPx = parseFloat(computedStyle.columnGap || computedStyle.gap || '0');
    const totalWidth = container.clientWidth - gapPx - HANDLE_WIDTH;
    let newLeft = startLeftWidth.current + dx;
    let newRight = totalWidth - newLeft;
    newLeft = Math.max(newLeft, minLeft);
    newRight = Math.max(newRight, minRight);
    if (newLeft + newRight > totalWidth) {
      // Adjust to fit
      if (dx > 0) {
        newLeft = totalWidth - minRight;
        newRight = minRight;
      } else {
        newLeft = minLeft;
        newRight = totalWidth - minLeft;
      }
    }
    setLeftWidth(newLeft);
    setRightWidth(newRight);
  };

  const onDragEnd = () => {
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', onDragEnd);
    window.removeEventListener('touchmove', onDrag);
    window.removeEventListener('touchend', onDragEnd);
  };

  const [leftContent, rightContent] = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className="flex w-full h-full overflow-hidden select-none gap-5"
    >
      {/* Left pane */}
      <div
        className="overflow-auto"
        style={{ flex: `0 0 ${leftWidth}px`, minWidth: `${minLeft}px`, maxWidth: `${leftWidth}px` }}
      >
        {leftContent}
      </div>

      {/* Drag handle */}
      <div
        className="w-1 cursor-col-resize bg-gray-100 hover:bg-gray-200"
        style={{ width: `${HANDLE_WIDTH}px`, minWidth: `${HANDLE_WIDTH}px`, maxWidth: `${HANDLE_WIDTH}px` }}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
      />

      {/* Right pane */}
      <div
        className="overflow-auto"
        style={{ flex: `0 0 ${rightWidth}px`, minWidth: `${minRight}px`, maxWidth: `${rightWidth}px` }}
      >
        {rightContent}
      </div>
    </div>
  );
}
