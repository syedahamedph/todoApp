export interface ToDo {
    id: string;
    title: string;
    priority: string;
    status: 'completed' | 'pending';
    important: boolean
}

export interface LoginDetails {
    userName: string;
    password:string
}