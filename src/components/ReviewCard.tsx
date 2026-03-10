import Link from "next/link";
import Image from "next/image";
import { Review } from "@/data/reviews";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.date).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/reviews/${review.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100 h-48">
          <Image
            src={review.image}
            alt={`${review.year} ${review.make} ${review.model}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {review.recommended && (
            <div className="absolute top-3 left-3">
              <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Recommended
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Car name */}
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
            {review.year} {review.make} {review.model}
          </p>

          {/* Title */}
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
            {review.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {review.summary}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 bg-green-50 rounded-lg px-2.5 py-1.5">
              <StarRating rating={review.overallRating} size="sm" />
              <span className="font-bold text-sm text-gray-900">{review.overallRating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-gray-500">{review.helpful} found helpful</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {review.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Author & Date */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={review.authorAvatar}
                  alt={review.authorName}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="text-xs font-medium text-gray-700">{review.authorName}</span>
            </div>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
