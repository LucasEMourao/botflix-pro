import { useState, useEffect } from 'react';
import { IMovie } from '../types';

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: string;
  results: IMovie[];
}

export const useSearchHistory = () => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('botflix-search-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error parsing search history from localStorage:', error);
        setHistory([]);
      }
    }
  }, []);

  const addToHistory = (query: string, results: IMovie[]) => {
    const historyItem: SearchHistoryItem = {
      id: Date.now().toString(),
      query,
      timestamp: new Date().toISOString(),
      results
    };

    const newHistory = [historyItem, ...history]; // Add to the beginning
    // Keep only the last 20 searches
    const trimmedHistory = newHistory.slice(0, 20);
    
    setHistory(trimmedHistory);
    localStorage.setItem('botflix-search-history', JSON.stringify(trimmedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('botflix-search-history');
  };

  return {
    history,
    addToHistory,
    clearHistory
  };
};