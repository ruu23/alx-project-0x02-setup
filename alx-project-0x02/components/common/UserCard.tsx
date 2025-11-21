import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    async function fetchData() {
        const res = await fetch('https://api.example.com')
        const data = await res.json()
    }
    return(
        <div>
            
        </div>
    );
}

export default UserCard;