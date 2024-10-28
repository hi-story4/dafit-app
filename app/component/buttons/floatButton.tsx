export default function FloatButton({ name }: { name: string }) {
  return (
    <button
      className="fixed bottom-7 left-1/2 transform -translate-x-1/2
     bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-white 
     px-6 py-2 md:px-20 text-xl rounded-xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
    >
      {name}
    </button>
  );
}
