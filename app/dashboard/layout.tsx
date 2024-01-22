import SideNav from '@/app/ui/dashboard/sidenav'; // layout에 사용할 SideNav Component importing

// children props : page나 다른 layout이 될 수 있음
export default function Layout({ children }: { children: React.ReactNode}) {
    return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    )
}