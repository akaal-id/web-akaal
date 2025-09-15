type BackgroundVariant = 'both-radial' | 'top-radial' | 'no-radial' | 'dots-only';

interface BackgroundProps {
  variant?: BackgroundVariant;
}

export default function Background({ variant = 'both-radial' }: BackgroundProps) {
  return (
    <>
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.3) 0.4px, transparent 0)',
        backgroundSize: '4px 4px'
      }}></div>

      {/* Radial Blur Effects */}
      {variant === 'both-radial' && (
        <>
          {/* Radial Blur from Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] opacity-100" style={{
            background: 'radial-gradient(ellipse at center top, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.1) 40%, rgba(139,92,246,0.02) 70%, transparent 100%)',
            filter: 'blur(10px)',
            mixBlendMode: 'screen'
          }}></div>
          
          {/* Radial Blur from Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] opacity-100" style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 40%, rgba(20,184,166,0.02) 70%, transparent 100%)',
            filter: 'blur(10px)',
            mixBlendMode: 'screen'
          }}></div>
        </>
      )}

      {/* Only Top Radial Blur */}
      {variant === 'top-radial' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] opacity-100" style={{
          background: 'radial-gradient(ellipse at center top, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.1) 40%, rgba(139,92,246,0.02) 70%, transparent 100%)',
          filter: 'blur(10px)',
          mixBlendMode: 'screen'
        }}></div>
      )}

      {/* No Radial Blur - variant 'no-radial' shows only dots */}
    </>
  )
}
