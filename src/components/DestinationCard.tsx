import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  slug: string;
}

const DestinationCard = ({ image, title, description, category, slug }: DestinationCardProps) => {
  return (
    <Link to={`/fasilitas/${slug}`} className="block group">
      <div className="relative bg-card rounded-2xl overflow-hidden hover-lift border border-border/50">
        {/* Image Container */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="badge-primary text-xs">
              {category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 bg-gradient-to-b from-card to-muted/30">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
              <span>Lihat Detail</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
      </div>
    </Link>
  );
};

export default DestinationCard;