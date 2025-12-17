// src/components/shared/ui/BentoGrid/index.tsx
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    features?: string[]; // Mantengo features por si se usa en otro lado, pero no en Services.
}) => {
    const { isDark } = useTheme();

    return (
        <div
            className={cn(
                `group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl ${isDark ? 'border-white/[0.1] bg-black shadow-none' : 'border-neutral-200 bg-white'}`,
                className
            )}
        >
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {icon}
                <div className={`mb-2 mt-2 font-sans font-bold text-xl md:text-2xl lg:text-3xl ${isDark ? 'text-neutral-200' : 'text-neutral-600'}`}>
                    {title}
                </div>
                <div className={`font-sans text-sm md:text-base font-normal ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {description}
                </div>
            </div>
        </div>
    );
};