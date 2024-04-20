jest.mock('../css/SkeletonCard.css', () => ({}));
import { render, screen } from '@testing-library/react';
import SkeletonCard from '../components/SkeletonCard';

describe('SkeletonCard component', () => {
  it('renders skeleton card container correctly', () => {
    render(<SkeletonCard />);
    const skeletonCardContainer = screen.getByTestId('skeleton-card');
    expect(skeletonCardContainer).toBeTruthy();
  });

  it('renders skeleton elements correctly', () => {
    render(<SkeletonCard />);
    const skeletonElements = screen.getAllByTestId('skeleton-element');
    skeletonElements.forEach((element) => {
      expect(element).toBeTruthy();
    });
  });
});
