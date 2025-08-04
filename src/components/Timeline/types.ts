export interface TimelineEvent {
  date: string;
  description: string;
  pdfPage?: number; // Optional page number for PDF references
  pdfPath?: string; // Optional path to the PDF file
  externalUrl?: string; // Optional external URL for references
}

export interface TimelineBlock {
  id: string;
  title: string;
  events: TimelineEvent[];
}

export interface TimelineData {
  blocks: TimelineBlock[];
}