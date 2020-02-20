export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public google?: boolean,
        public role?: 'ADMIN_ROLE'|'USER_ROLE',
        public img?: string,
        public _id?: string
    ) {}
}