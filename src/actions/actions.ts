

export const addNote = (title: string, tags: string[], description: string) => {
    return {
        type: 'ADD_NOTE',
        payload: {
            title,
            tags,
            description,
        }
    }
}