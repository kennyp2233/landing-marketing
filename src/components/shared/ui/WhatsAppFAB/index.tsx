'use client';

import React from 'react';
import { cn } from '../../../../lib/utils';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFABProps {
    phoneNumber?: string;
    message?: string;
    className?: string;
}

export const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({
    phoneNumber = "593995498636",
    message = "¡Hola! Me interesa saber más sobre sus servicios de marketing digital.",
    className
}) => {


    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Pulsing rings - Multiple layers for maximum impact */}
            <div className="absolute inset-0 animate-ping">
                <div className="w-14 h-14 rounded-full bg-[#25D366] opacity-75"></div>
            </div>
            <div className="absolute inset-0 animate-ping delay-75">
                <div className="w-14 h-14 rounded-full bg-[#25D366] opacity-50"></div>
            </div>
            <div className="absolute inset-0 animate-ping delay-150">
                <div className="w-14 h-14 rounded-full bg-[#25D366] opacity-25"></div>
            </div>

            {/* Rotating glow ring */}
            <div className="absolute inset-0 animate-spin duration-3000">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] via-transparent to-[#25D366] opacity-60 blur-sm"></div>
            </div>

            {/* Main button */}
            <button
                onClick={handleWhatsAppClick}
                className={cn(
                    "relative w-14 h-14 rounded-full",
                    "flex items-center justify-center",
                    "shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]",
                    "transition-all duration-500 ease-out",
                    "transform hover:scale-125 active:scale-95",
                    "group overflow-hidden",
                    // WhatsApp green with enhanced gradients
                    "bg-gradient-to-br from-[#25D366] to-[#128C7E]",
                    "hover:from-[#2BE773] hover:to-[#25D366]",
                    // Shimmer effect
                    "before:absolute before:inset-0 before:rounded-full",
                    "before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
                    "before:translate-x-[-100%] hover:before:translate-x-[100%]",
                    "before:transition-transform before:duration-700 before:ease-out",
                    className
                )}
                aria-label="Contactar por WhatsApp"
            >
                {/* Sparkling dots */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
                    <div className="absolute top-4 left-2 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-300"></div>
                    <div className="absolute bottom-3 right-2 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-500"></div>
                    <div className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
                </div>

                {/* Icon with enhanced animations */}
                <MessageCircle
                    className={cn(
                        "w-7 h-7 text-white relative z-10",
                        "transition-all duration-500 ease-out",
                        "group-hover:scale-110 group-hover:rotate-12",
                        "group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
                        "group-active:rotate-0"
                    )}
                />

                {/* Explosive ripple on hover */}
                <div className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r from-[#25D366] via-[#2BE773] to-[#25D366]",
                    "opacity-0 group-hover:opacity-60",
                    "scale-0 group-hover:scale-[3]",
                    "transition-all duration-700 ease-out",
                    "pointer-events-none blur-sm"
                )} />

                {/* Inner glow */}
                <div className={cn(
                    "absolute inset-1 rounded-full",
                    "bg-gradient-to-br from-white/20 to-transparent",
                    "opacity-50 group-hover:opacity-80",
                    "transition-opacity duration-300"
                )} />
            </button>

            {/* Floating message indicator */}
            <div className={cn(
                "absolute -top-2 -left-2 w-4 h-4 rounded-full",
                "bg-red-500 border-2 border-white",
                "flex items-center justify-center",
                "animate-bounce",
                "group-hover:animate-pulse"
            )}>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
        </div>
    );
};

export default WhatsAppFAB;