export const incrementSearchCounter = async () => {
  try {
    await fetch(
      "https://europe-west2-symptomizer.cloudfunctions.net/increment-search",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: 1 }),
      }
    );
  } catch {}
};
