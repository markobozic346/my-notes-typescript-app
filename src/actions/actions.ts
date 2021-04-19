export const addNote = (title: string, tags: string[], description: string) => {
  return {
    type: "ADD_NOTE",
    payload: {
      title,
      tags,
      description,
    },
  };
};

export const addSearchKeywords = (keywords: string, tags: string) => {
  return {
    type: "ADD_SEARCH_KEYWORDS",
    payload: {
      keywords,
      tags,
    },
  };
};
