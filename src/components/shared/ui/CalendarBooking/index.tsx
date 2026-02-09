"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/providers/LanguageProvider'
import { MessageCircle, Calendar, Clock, Video, CheckCircle2, Sparkles } from 'lucide-react'

interface CalendarBookingProps {
    isDark?: boolean
    calendarUrl?: string
}

const WHATSAPP_NUMBER = "593995498636"

export const CalendarBooking: React.FC<CalendarBookingProps> = ({
    isDark = true,
    calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Y7jJ1ibdoAPwdrCVxFM4OWWuAAf5tRLk8q5BcnTYtchF9NydlnzUO9n1kxmVj1Fuqwvj2vXmU?gv=true"
}) => {
    const { t } = useLanguage()

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(t.whatsapp?.home || "¡Hola! Me interesa conocer más sobre sus servicios.")
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    }

    const benefits = [
        {
            icon: CheckCircle2,
            title: t.calendar?.benefit1Title || "Consultoría personalizada",
            description: t.calendar?.benefit1Desc || "Analizamos tu caso específico y tus objetivos de negocio."
        },
        {
            icon: Sparkles,
            title: t.calendar?.benefit2Title || "Propuesta a medida",
            description: t.calendar?.benefit2Desc || "Recibe un plan de acción adaptado a tus necesidades."
        },
        {
            icon: Video,
            title: t.calendar?.benefit3Title || "Sin compromisos",
            description: t.calendar?.benefit3Desc || "Reunión gratuita por Google Meet de 30 minutos."
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row h-full w-full">
            {/* Left Column - Info Section */}
            <div className={cn(
                "flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20",
                isDark
                    ? "bg-gradient-to-br from-purple-900/30 via-neutral-950 to-neutral-950"
                    : "bg-gradient-to-br from-purple-50 via-white to-white"
            )}>
                {/* Title */}
                <h2 className={cn(
                    "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight",
                    isDark ? "text-white" : "text-neutral-900"
                )}>
                    {t.calendar?.title || "Agenda tu Consultoría"}
                </h2>

                {/* Subtitle */}
                <p className={cn(
                    "text-base sm:text-lg lg:text-xl mb-8 max-w-lg leading-relaxed",
                    isDark ? "text-neutral-400" : "text-neutral-600"
                )}>
                    {t.calendar?.subtitle || "Selecciona el horario que mejor se adapte a ti y comienza tu transformación digital."}
                </p>

                {/* Benefits */}
                <div className="space-y-5 mb-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-4">
                            <div className={cn(
                                "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center",
                                isDark ? "bg-purple-500/20" : "bg-purple-100"
                            )}>
                                <benefit.icon className={cn(
                                    "w-5 h-5 sm:w-6 sm:h-6",
                                    isDark ? "text-purple-400" : "text-purple-600"
                                )} />
                            </div>
                            <div>
                                <h3 className={cn(
                                    "text-sm sm:text-base font-semibold mb-1",
                                    isDark ? "text-white" : "text-neutral-900"
                                )}>
                                    {benefit.title}
                                </h3>
                                <p className={cn(
                                    "text-xs sm:text-sm leading-relaxed",
                                    isDark ? "text-neutral-500" : "text-neutral-500"
                                )}>
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* WhatsApp Alternative */}
                <div className={cn(
                    "pt-6 border-t",
                    isDark ? "border-white/10" : "border-neutral-200"
                )}>
                    <p className={cn(
                        "text-sm mb-4",
                        isDark ? "text-neutral-500" : "text-neutral-500"
                    )}>
                        {t.calendar?.alternative || "¿Prefieres escribirnos directamente?"}
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer",
                            "bg-[#25D366] hover:bg-[#22c55e] text-white",
                            "hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/25"
                        )}
                    >
                        <MessageCircle className="w-4 h-4" />
                        {t.calendar?.whatsapp || "Escríbenos por WhatsApp"}
                    </button>
                </div>
            </div>

            {/* Right Column - Calendar Section */}
            <div className={cn(
                "flex-1 flex flex-col min-h-[500px] lg:min-h-0",
                isDark ? "bg-neutral-900" : "bg-white"
            )}>
                {/* Calendar Header */}
                <div className={cn(
                    "flex items-center justify-center gap-6 p-4 sm:p-6 border-b",
                    isDark
                        ? "border-neutral-700 bg-neutral-800"
                        : "border-neutral-200 bg-neutral-50"
                )}>
                    <div className={cn(
                        "flex items-center gap-2 text-sm font-medium",
                        isDark ? "text-white" : "text-neutral-700"
                    )}>
                        <Video className={cn("w-4 h-4", isDark ? "text-purple-400" : "text-purple-600")} />
                        <span>Google Meet</span>
                    </div>
                    <div className={cn(
                        "flex items-center gap-2 text-sm font-medium",
                        isDark ? "text-white" : "text-neutral-700"
                    )}>
                        <Clock className={cn("w-4 h-4", isDark ? "text-purple-400" : "text-purple-600")} />
                        <span>30 minutos</span>
                    </div>
                </div>

                {/* Calendar iframe container */}
                <div className={cn(
                    "flex-1 relative",
                    isDark && "bg-neutral-900" // Dark background when filter is applied
                )}>
                    <iframe
                        src={calendarUrl}
                        style={{
                            border: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            // CSS filter trick: invert colors for dark mode
                            filter: isDark ? 'invert(0.93) hue-rotate(180deg)' : 'none',
                        }}
                        frameBorder="0"
                        title="Google Calendar Appointment Scheduling"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default CalendarBooking
