export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grow-1 grid-home">
      <div className="lg:col-start-2 xl:col-start-3 col-span-3 lg:col-span-2 pt-16">
        {children}
      </div>
    </div>
  );
}
