import {
  CSSProperties,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useWindowSize from '@/hooks/useWindowSize';
import './style.css';

interface PopoverProps {
  children: ReactNode;
  open: boolean;
  anchorEl?: Element | null;
  onClose(): void;
}

const Popover = ({
  open,
  onClose,
  children,
  anchorEl = null,
}: PopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState<CSSProperties | undefined>(undefined);

  useOnClickOutside(ref, onClose);

  const [windowWidth] = useWindowSize();

  const calculatePositionStyle = (
    anchorEl: Element | null,
  ): CSSProperties | undefined => {
    if (!anchorEl) {
      return undefined;
    }

    const anchorRect = anchorEl.getBoundingClientRect();

    const style: CSSProperties = {
      top: anchorRect.bottom + window.scrollY,
      left: anchorRect.right,
    };

    if (
      ref.current &&
      ref.current.getBoundingClientRect().right > windowWidth
    ) {
      style.transform = 'translate(-100%)';
    }

    return style;
  };

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    const style = calculatePositionStyle(anchorEl);
    setStyle(style);
  }, [open, windowWidth, ref.current]);

  if (!open) {
    return null;
  }

  return (
    <div className="popover" ref={ref} style={style}>
      {children}
    </div>
  );
};

export default Popover;
