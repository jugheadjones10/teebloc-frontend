import { createContext, useContext } from "react";

/**
 * Maps question IDs to the worksheets that contain them.
 *
 * Structure:
 * - key: The question ID (string)
 * - value: Array of worksheets that include this question
 *   - id: The worksheet's unique identifier (number)
 *   - name: The worksheet's display name (string)
 */
export type WorksheetsMapping = {
  [key: string]: { id: number; name: string }[];
};

// Default to an empty object so components can safely use it even before provider mounts
export const WorksheetsMappingContext = createContext<WorksheetsMapping>({});

export function useWorksheetsMapping() {
  return useContext(WorksheetsMappingContext);
}
