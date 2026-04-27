import React from 'react';

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    disableHoverInversion?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
    children,
    className = '',
    glowColor,
    disableHoverInversion = false,
    ...props
}) => {
    return (
        <div
            className={`relative group bg-[var(--card-bg)] border border-[var(--line-color)] hover:border-dashed transition-all duration-300 ${!disableHoverInversion ? 'hover:bg-[var(--invert-bg)] hover:text-[var(--invert-text)]' : ''} flex flex-col ${className}`}
            {...props}
        >
            {/* Solid backing to ensure transparent custom backgrounds don't reveal lines beneath */}
            <div className="absolute inset-0 bg-[var(--card-bg)] pointer-events-none z-[-1] transition-colors duration-500" />
            
            {/* Infinitely extending border lines - solid color prevents additive brightness on overlaps */}
            <div className="absolute inset-0 pointer-events-none z-[-2] *:bg-[var(--line-color)] *:transition-colors *:duration-500">
                <div className="absolute top-[-1px] left-[-100vw] right-[-100vw] h-[1px]" />
                <div className="absolute bottom-[-1px] left-[-100vw] right-[-100vw] h-[1px]" />
                <div className="absolute top-[-100vh] bottom-[-100vh] left-[-1px] w-[1px]" />
                <div className="absolute top-[-100vh] bottom-[-100vh] right-[-1px] w-[1px]" />
            </div>
            {glowColor && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-0"
                    style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)` }}
                />
            )}
            {children}
        </div>
    );
};
