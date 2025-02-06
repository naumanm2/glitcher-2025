interface cardCollectionType {
  children: React.ReactNode;
  overflow: boolean;
}

export default function CardCollection({
  children,
  overflow,
}: cardCollectionType) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        {children}
      </div>
    </div>
  );
}
