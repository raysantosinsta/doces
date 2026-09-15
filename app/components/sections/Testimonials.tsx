import { Play, Heart } from 'lucide-react';
import { Section } from '../ui/Section';

export const Testimonials = () => {
  return (
    <Section className="bg-cream-dark/50">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-chocolate mb-4 flex items-center justify-center gap-3">
          <Heart className="fill-rose text-rose" size={36} /> 
          Quem prova, recomenda
        </h2>
        <p className="font-sans text-chocolate-light">Um pedacinho do que nossos clientes dizem.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
        {['video', 'video1', 'video2', 'video3'].map((videoName, index) => (
          <div key={index} className="snap-center shrink-0 w-64 md:w-72 h-96 relative rounded-2xl overflow-hidden bg-chocolate shadow-lg group cursor-pointer">
            <video
              src={`/${videoName}.mp4`}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-cream/30 backdrop-blur-md flex items-center justify-center text-cream">
                <Play size={20} fill="currentColor" className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-cream text-sm font-medium drop-shadow-md">
              "Melhor doce que já comi na vida! ❤️"
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
