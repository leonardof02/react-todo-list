export interface Todo {
    title: string;
    checked: boolean;
}

export type FilterMode = "All" | "Active" | "Completed";