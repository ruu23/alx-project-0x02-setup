import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"

interface UserPageProps {
    users: UserProps[]
}

const User: React.FC<UserPageProps> = ({ users }) => {
    
    return(
        <div className="m-10">
            <Header />
            <div>
                {users.map((user) => (
                    <UserCard 
                        key={user.id}
                        id={user.id}
                        name={user.name} 
                        email={user.email}
                        address={user.address} 
                    />
                ))

                }
            </div>
        </div>
    )
}

export default User;

export async function getStaticProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}
