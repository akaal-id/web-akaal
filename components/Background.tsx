type BackgroundVariant = 'with-blur' | 'dots-only';

interface BackgroundProps {
  variant?: BackgroundVariant;
}

export default function Background({ variant = 'with-blur' }: BackgroundProps) {
  return (
    <>
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 0.5px, transparent 0)',
        backgroundSize: '5px 5px'
      }}></div>

      {/* Radial Blur from Top - Only for with-blur variant */}
      {variant === 'with-blur' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-100" style={{
          background: 'radial-gradient(ellipse at center top, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.08) 40%, rgba(139,92,246,0.03) 70%, transparent 100%)',
          filter: 'blur(10px)',
          mixBlendMode: 'screen'
        }}></div>
      )}
    </>
  )
}
