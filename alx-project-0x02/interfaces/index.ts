export interface CardProps{
    title: string;
    content: string;
}

export interface PostModalProps{
    onSubmit: (data: CardProps) => void
}

export type btnSize = 'small' | 'medium' | 'large';

export type  btnShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps{
    size?: btnSize;
    shape?: btnShape;
}

export interface PostProps{
    title: string;
    content: string;
    userId: number;
}

export interface UserProps{
    name: string; 
    email: string; 
    address: string;
}