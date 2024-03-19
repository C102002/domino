interface restult{
    ok: boolean;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string;
    errorCode?: string|null;
    errorMessage?: string|null;
}