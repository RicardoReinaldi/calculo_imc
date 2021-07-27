export default function Header({ children }) {
  return (
    <header>
      <div className="bg-green-300 mx-auto p-4">
        <h1 className={`text-center font-semibold text-4xl`}>{children}</h1>
      </div>
    </header>
  );
}
