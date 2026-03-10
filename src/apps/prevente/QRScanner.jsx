import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { QrCode, Camera, MapPin, ExternalLink } from 'lucide-react'

const QRScanner = () => {
    const [scannedCode, setScannedCode] = useState('')
    const [result, setResult] = useState(null)

    const handleManualInput = (e) => {
        e.preventDefault()
        if (scannedCode) {
            setResult({
                client: 'Épicerie Al Baraka',
                location: 'Casablanca, Maarif',
                coords: '33.5731,-7.5898',
                code: scannedCode
            })
        }
    }

    return (
        <div className="pb-12 max-w-2xl mx-auto">
            {/* Scanner Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <h3 className="text-xl font-bold text-[#2B3674] tracking-tight mb-6">Scanner le Code QR</h3>

                {/* Camera Viewport */}
                <div className="relative w-full h-[300px] bg-[#2B3674] rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                    <div className="absolute inset-8 border-2 border-white/30 rounded-xl" />
                    <div className="absolute top-8 left-8 w-8 h-8 border-t-3 border-l-3 border-white rounded-tl-lg" />
                    <div className="absolute top-8 right-8 w-8 h-8 border-t-3 border-r-3 border-white rounded-tr-lg" />
                    <div className="absolute bottom-8 left-8 w-8 h-8 border-b-3 border-l-3 border-white rounded-bl-lg" />
                    <div className="absolute bottom-8 right-8 w-8 h-8 border-b-3 border-r-3 border-white rounded-br-lg" />

                    {/* Scan line animation */}
                    <motion.div
                        className="absolute left-8 right-8 h-0.5 bg-[#4318FF] shadow-[0_0_10px_rgba(67,24,255,0.5)]"
                        animate={{ top: ['15%', '85%', '15%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <div className="text-center z-10">
                        <Camera className="w-12 h-12 text-white/60 mx-auto mb-3" />
                        <p className="text-white/60 text-sm font-medium">Pointez la caméra vers le QR code</p>
                    </div>
                </div>

                {/* Manual Entry */}
                <div className="text-center mb-4">
                    <p className="text-[13px] text-[#A3AED0] font-medium mb-3">ou entrez le code manuellement</p>
                    <form onSubmit={handleManualInput} className="flex gap-3 max-w-sm mx-auto">
                        <div className="flex-1 relative">
                            <QrCode className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                            <input
                                type="text"
                                value={scannedCode}
                                onChange={(e) => setScannedCode(e.target.value)}
                                placeholder="Code QR..."
                                className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                            />
                        </div>
                        <button type="submit" className="px-6 py-3.5 bg-[#4318FF] text-white rounded-xl font-bold text-[15px] hover:bg-[#3614D0] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]">
                            Chercher
                        </button>
                    </form>
                </div>
            </div>

            {/* Result */}
            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6"
                >
                    <h3 className="text-xl font-bold text-[#2B3674] tracking-tight mb-4">Résultat</h3>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-[#F4F7FE] rounded-xl">
                            <QrCode className="w-5 h-5 text-[#4318FF]" />
                            <div>
                                <p className="text-[12px] text-[#A3AED0] font-medium">Code QR</p>
                                <p className="text-[15px] font-bold text-[#2B3674]">{result.code}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-[#F4F7FE] rounded-xl">
                            <MapPin className="w-5 h-5 text-[#05CD99]" />
                            <div className="flex-1">
                                <p className="text-[12px] text-[#A3AED0] font-medium">Client & Localisation</p>
                                <p className="text-[15px] font-bold text-[#2B3674]">{result.client} — {result.location}</p>
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${result.coords}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1 px-4 py-2 bg-[#4318FF] text-white rounded-xl font-bold text-[13px] hover:bg-[#3614D0] transition-all"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Maps
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default QRScanner
