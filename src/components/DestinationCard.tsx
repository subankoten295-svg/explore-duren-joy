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
    <Link to={`/fasilitas/${slug}`} className="block">
      <div className="group relative bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group/btn">
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
