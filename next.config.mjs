/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'] // Ottimizzazione degli import dei pacchetti
  },
  // Ottimizzazioni aggiuntive
  poweredByHeader: false,  // Rimuove header http dalle risposte del server. Meno informazioni esposte sui server, Header più piccoli, meno byte trasferiti
  compress: true, // Abilita la compressione GZIP/Brotli delle risposte HTTP e comprime HTML, CSS, JS prima di inviarli al browser
}

export default nextConfig;
