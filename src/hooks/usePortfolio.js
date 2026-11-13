import { portfolioData } from '../data/portfolioData';

/**
 * Returns portfolio data locally without requiring a backend server.
 */
export function usePortfolio() {
  return {
    portfolio: portfolioData,
    loading: false,
    error: null,
  };
}
