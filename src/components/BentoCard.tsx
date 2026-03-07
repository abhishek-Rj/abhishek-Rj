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
            className={`relative group bg-[#1c1c1c]/50 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 ${!disableHoverInversion ? 'hover:bg-[var(--invert-bg)] hover:text-[var(--invert-text)]' : ''} flex flex-col ${className}`}
            {...props}
        >
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
