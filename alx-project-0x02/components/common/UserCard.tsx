import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return(
        <div className="m-10 bg-[#fdf2ef]">
            <h1 className="text-2xl font-bold font-viaoda">{name}</h1>
            <p>{email}</p>
            <p>{address.city}, {address.street}</p>
        </div>
    );
}

export default UserCard;