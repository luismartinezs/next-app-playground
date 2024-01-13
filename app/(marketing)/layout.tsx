export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xl">Marketing Layout</div>
      {props.children}
    </div>
  );
}
