
import { ResultData } from '../components/ExamResults';

// Mock exam results for demonstration
export const mockResults: Record<'success' | 'failure', ResultData> = {
  success: {
    status: "success",
    name: "Traoré Aminata",
    placeNumber: "12345",
    result: "Admis",
    average: "14.5/20",
    mention: "Bien",
    subjects: [
      { name: "Mathématiques", grade: "15/20" },
      { name: "Physique-Chimie", grade: "14/20" },
      { name: "Sciences Naturelles", grade: "16/20" },
      { name: "Français", grade: "13/20" },
      { name: "Histoire-Géographie", grade: "15/20" },
    ],
  },
  failure: {
    status: "failure",
    name: "Coulibaly Ibrahim",
    placeNumber: "67890",
    result: "Ajourné",
    average: "09.5/20",
    subjects: [
      { name: "Mathématiques", grade: "08/20" },
      { name: "Physique-Chimie", grade: "09/20" },
      { name: "Sciences Naturelles", grade: "10/20" },
      { name: "Français", grade: "11/20" },
      { name: "Histoire-Géographie", grade: "09/20" },
    ],
  }
};

// Export mock data for regions, years, and bac types
export const mockRegions = [
  { value: "bamako", label: "Bamako" },
  { value: "kayes", label: "Kayes" },
  { value: "koulikoro", label: "Koulikoro" },
  { value: "sikasso", label: "Sikasso" },
  { value: "segou", label: "Ségou" },
  { value: "mopti", label: "Mopti" },
  { value: "tombouctou", label: "Tombouctou" },
  { value: "gao", label: "Gao" },
  { value: "kidal", label: "Kidal" },
];

export const mockYears = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
];

export const mockBacTypes = [
  { value: "general", label: "Bac Général" },
  { value: "technique", label: "Bac Technique" },
  { value: "professionnel", label: "Bac Professionnel" },
];
