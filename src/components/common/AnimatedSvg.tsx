import React, { useRef, useEffect } from 'react';

interface AnimatedSvgProps {
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
}

const AnimatedSvg: React.FC<AnimatedSvgProps> = ({
  SvgComponent,
  size = 50,
  className = ``,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Reset animations
      const animateElements = svgRef.current.querySelectorAll(
        `animate, animateTransform, animateMotion`,
      );
      animateElements.forEach((anim: any) => {
        anim.beginElement();
      });

      // Trigger SMIL animations
      svgRef.current.setCurrentTime(0);
    }
  }, []);

  return (
    <div style={{ width: size, height: size }} className={className}>
      <SvgComponent ref={svgRef} width={size} height={size} />
    </div>
  );
};

export default AnimatedSvg;
