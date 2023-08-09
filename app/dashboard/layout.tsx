export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Dashboard</h2>
      {children}
    </div>
  );
}
