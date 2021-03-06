const API_HOST = "http://api.symptomize.me";

export const client = async (body: {
  query: string;
  variables?: Record<string, any>;
}) => {
  const response = await fetch(`${API_HOST}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Port": "8000" },
    body: JSON.stringify(body),
  });
  return await response.json();
};
