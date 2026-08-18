type GetToken = () => Promise<string | null>;

type CreateWorksheetInput = {
  getToken: GetToken;
  name: string;
  questionIds: string[];
};

type CreatedWorksheet = {
  id: number;
  name: string;
  creator: string | null;
  questionsOrder: string[];
  created: string;
};

type CreateWorksheetResponse = {
  worksheet: CreatedWorksheet;
  remainingFreeWorksheets: number | null;
};

type WorksheetErrorResponse = {
  error?: {
    code?: string;
    message?: string;
  };
};

export class WorksheetApiError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

export async function createWorksheet({
  getToken,
  name,
  questionIds,
}: CreateWorksheetInput): Promise<CreateWorksheetResponse> {
  const token = await getToken();

  if (!token) {
    throw new WorksheetApiError(
      "UNAUTHENTICATED",
      "Could not authenticate your session.",
    );
  }

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API}/worksheets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, questionIds }),
    },
  );
  const payload = (await response.json()) as
    | CreateWorksheetResponse
    | WorksheetErrorResponse;

  if (!response.ok) {
    const error = (payload as WorksheetErrorResponse).error;
    throw new WorksheetApiError(
      error?.code || "WORKSHEET_CREATION_FAILED",
      error?.message || "Could not create worksheet.",
    );
  }

  return payload as CreateWorksheetResponse;
}
