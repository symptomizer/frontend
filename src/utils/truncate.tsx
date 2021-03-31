export const truncate = (content: string, length: number) => {
  content = content.trim();
  const truncatedContent =
    content.length > 320 ? content.slice(0, length).trim() + "..." : content;
  return truncatedContent;
};
