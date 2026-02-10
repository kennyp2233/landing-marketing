"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

// Context
interface ExpandableScreenContextValue {
    isExpanded: boolean
    expand: () => void
    collapse: () => void
    layoutId: string
    triggerRadius: string
    contentRadius: string
    animationDuration: number
    isDark?: boolean
}

const ExpandableScreenContext =
    createContext<ExpandableScreenContextValue | null>(null)

function useExpandableScreen() {
    const context = useContext(ExpandableScreenContext)
    if (!context) {
        throw new Error(
            "useExpandableScreen must be used within an ExpandableScreen"
        )
    }
    return context
}

// Root Component
interface ExpandableScreenProps {
    children: ReactNode
    defaultExpanded?: boolean
    onExpandChange?: (expanded: boolean) => void
    layoutId?: string
    triggerRadius?: string
    contentRadius?: string
    animationDuration?: number
    lockScroll?: boolean
    isDark?: boolean
}

export function ExpandableScreen({
    children,
    defaultExpanded = false,
    onExpandChange,
    layoutId = "expandable-card",
    triggerRadius = "100px",
    contentRadius = "0px",
    animationDuration = 0.5,
    lockScroll = true,
    isDark = true,
}: ExpandableScreenProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    // Sync with external state when defaultExpanded changes (controlled mode)
    useEffect(() => {
        setIsExpanded(defaultExpanded)
    }, [defaultExpanded])

    const expand = () => {
        setIsExpanded(true)
        onExpandChange?.(true)
    }

    const collapse = () => {
        setIsExpanded(false)
        onExpandChange?.(false)
    }

    useEffect(() => {
        if (lockScroll) {
            if (isExpanded) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "unset"
            }
        }

        // Handle escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isExpanded) {
                collapse()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("keydown", handleEscape)
            if (lockScroll) {
                document.body.style.overflow = "unset"
            }
        }
    }, [isExpanded, lockScroll])

    return (
        <ExpandableScreenContext.Provider
            value={{
                isExpanded,
                expand,
                collapse,
                layoutId,
                triggerRadius,
                contentRadius,
                animationDuration,
                isDark,
            }}
        >
            {children}
        </ExpandableScreenContext.Provider>
    )
}

// Trigger Component
interface ExpandableScreenTriggerProps {
    children: ReactNode
    className?: string
}

export function ExpandableScreenTrigger({
    children,
    className = "",
}: ExpandableScreenTriggerProps) {
    const { isExpanded, expand, layoutId, triggerRadius } = useExpandableScreen()

    return (
        <AnimatePresence initial={false}>
            {!isExpanded && (
                <motion.div className={`inline-block relative ${className}`}>
                    {/* Background layer with shared layoutId for morphing */}
                    <motion.div
                        style={{
                            borderRadius: triggerRadius,
                        }}
                        layout
                        layoutId={layoutId}
                        className="absolute inset-0 transform-gpu will-change-transform"
                    />
                    {/* Content layer that fades out on expand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        layout={false}
                        onClick={expand}
                        className="relative cursor-pointer"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Content Component - Full Screen
interface ExpandableScreenContentProps {
    children: ReactNode
    className?: string
    showCloseButton?: boolean
    closeButtonClassName?: string
}

export function ExpandableScreenContent({
    children,
    className = "",
    showCloseButton = true,
    closeButtonClassName = "",
}: ExpandableScreenContentProps) {
    const { isExpanded, collapse, layoutId, contentRadius, animationDuration, isDark } =
        useExpandableScreen()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    // Create portal container if it doesn't exist (though we use document.body)
    const portalContent = (
        <AnimatePresence initial={false}>
            {isExpanded && (
                <motion.div
                    className="fixed inset-0 z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: animationDuration * 0.5 }}
                >
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: animationDuration }}
                        className={cn(
                            "absolute inset-0",
                            isDark ? "bg-black/90" : "bg-white/90"
                        )}
                        onClick={collapse}
                    />

                    {/* Full-screen morphing container */}
                    <motion.div
                        layoutId={layoutId}
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                            y: 50
                        }}
                        transition={{
                            duration: animationDuration,
                            ease: [0.32, 0.72, 0, 1]
                        }}
                        style={{
                            borderRadius: contentRadius,
                        }}
                        className={cn(
                            "absolute inset-0 flex flex-col overflow-hidden transform-gpu will-change-transform",
                            isDark
                                ? "bg-neutral-950"
                                : "bg-white",
                            className
                        )}
                    >
                        {/* Content wrapper with fade-in */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: animationDuration * 0.3, duration: animationDuration * 0.7 }}
                            className="relative z-20 flex flex-col h-full w-full overflow-y-auto overscroll-y-contain"
                        >
                            {children}
                        </motion.div>

                        {/* Close button */}
                        {showCloseButton && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: animationDuration * 0.5, duration: 0.2 }}
                                onClick={collapse}
                                className={cn(
                                    "fixed right-6 top-6 sm:right-8 sm:top-8 z-[100] flex h-12 w-12 items-center justify-center transition-all rounded-full hover:scale-110 active:scale-95 shadow-lg",
                                    closeButtonClassName ||
                                    "text-white bg-neutral-900 hover:bg-neutral-800 border border-white/20"
                                )}
                                aria-label="Close"
                            >
                                <X className="h-6 w-6" />
                            </motion.button>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    // @ts-ignore - createPortal types can be tricky with specific React versions
    return createPortal(portalContent, document.body)
}

export { useExpandableScreen }
