const API_HOST = "http://35.214.36.96:8000";

export const client = async (body: {
  query: string;
  variables?: Record<string, any>;
}) => {
  const response = await fetch(`${API_HOST}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
};
