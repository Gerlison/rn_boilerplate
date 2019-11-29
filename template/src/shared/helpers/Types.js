//@flow 

export type State = {
    loading: Object,
    theme: {
        currentTheme: string,
        theme: Object
    },
    auth: Object,
}

export type Action = {
    type: string,
    payload?: any,
    error?: boolean,
    errorMessage?: string
}