import { userOrganizationList } from "@clerk/clerk-react";
export const List = () => {
    const { userMemberships } = userOrganizationList({
        userMemberships: {
            infinte: true,
        }
    });
    
    if (!userMemberships.data?.length) return null;
    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => (
                <p key={mem.organization.id}>
                    {mem.organization.name} 
                </p>
            ))}
        </ul>
    )
}