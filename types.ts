
export interface PlatformStrategy {
  id: string;
  name: string;
  iconName: string;
  maxChars: number;
  description: string;
  systemInstruction: string;
}

export type GenerationStatus = 'idle' | 'loading' | 'success' | 'error';

export interface GenerationResult {
  text: string;
  timestamp: number;
}

export interface HistoryItem {
  id: string;
  text: string;
  platform: string;
  perspective: string;
  lengthOption: string;
  timestamp: number;
}
