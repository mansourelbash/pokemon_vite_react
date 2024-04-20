import React from 'react';
import '../css/SkeletonCard.css';

const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card" data-testid="skeleton-card">
      <div className="skeleton-element h-32" data-testid="skeleton-element"></div>
      <div className="skeleton-element-small h-8" data-testid="skeleton-element-small"></div>
      <div className="skeleton-element-large h-8" data-testid="skeleton-element-large"></div>
    </div>
  );
};

export default SkeletonCard;