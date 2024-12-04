

export const Navbar = () => {
    return (
        <div className="flex items-center gap-4 p-5 border-b-4 border-slate-400">
            <div className="hidden lg:flex lg:flex1 lg:w-5/6 gap-6">
                <input type="text" class="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-5/6" placeholder="Search here"/>
                             <button className="hover:bg-slate-700 hover:text-white rounded-md w-36 border-b-4">+InviteMembers</button>
        
            </div>
            <button className="rounded-3xl w-24 hover:bg-slate-700 hover:text-white border-b-4 h-10">User</button>
        </div>
    )
}